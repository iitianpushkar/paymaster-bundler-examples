import { useAccount } from "wagmi";
import { useCapabilities, useWriteContracts } from "wagmi/experimental";
import { useMemo, useState } from "react";
import { abi } from "../abi.js";

export default function ContractTester() {
  const account = useAccount();
  const [txHash, setTxHash] = useState<string | null>(null);
  const [roomId, setRoomId] = useState("1");
  const [cellIndex, setCellIndex] = useState(0);
  const [mines, setMines] = useState(3);
  const [gems, setGems] = useState(0);

  const { writeContracts } = useWriteContracts({
    mutation: {
      onSuccess: (data:any) => {
        // data is array of TransactionResponse
        
        console.log("tx hash:", data);
        setTxHash(data);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  });

  // optional paymaster-capabilities boilerplate
  const { data: caps } = useCapabilities({ account: account.address });
  const capabilities = useMemo(() => {
    if (!caps || !account.chainId) return {};
    const cc = caps[account.chainId];
    if (cc?.paymasterService?.supported) {
      return { paymasterService: { url: import.meta.env.VITE_RPC_URL } };
    }
    return {};
  }, [caps, account.chainId]);

  const doCall = (fnName: string, args: any[]) => {
    writeContracts({
      contracts: [{
        address: import.meta.env.VITE_CONTRACT_ADDRESS as `0x${string}`,
        abi,
        functionName: fnName,
        args,
      }],
      capabilities,
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Onchain Game Tester</h2>

      <label>Room ID:</label>
      <input
        type="text"
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button onClick={() => doCall("createRoom", [roomId])}>
        createRoom
      </button>
      <button onClick={() => doCall("joinRoom", [roomId])}>
        joinRoom
      </button>

      <hr />

      <label>Start Game (mines, gems):</label>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input
          type="number"
          value={mines}
          onChange={e => setMines(Number(e.target.value))}
          style={{ width: 60 }}
          placeholder="mines"
        />
        <input
          type="number"
          value={gems}
          onChange={e => setGems(Number(e.target.value))}
          style={{ width: 60 }}
          placeholder="gems"
        />
        <button onClick={() => doCall("startGame", [roomId, mines, gems])}>
          startGame
        </button>
      </div>

      <hr />

      <label>Click Cell:</label>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input
          type="number"
          value={cellIndex}
          onChange={e => setCellIndex(Number(e.target.value))}
          style={{ width: 60 }}
          placeholder="cellIndex"
        />
        <button onClick={() => doCall("clickCell", [roomId, cellIndex])}>
          clickCell
        </button>
      </div>

      <hr />

      <button onClick={() => doCall("revealMines", [roomId])}>
        revealMines
      </button>

      <hr />

      {txHash && (
        <div style={{ marginTop: 12 }}>
          <strong>Last tx hash:</strong>
          <div style={{ fontFamily: "monospace", wordBreak: "break-all" }}>
            {txHash}
          </div>
        </div>
      )}
    </div>
  );
}
