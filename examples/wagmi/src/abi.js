export const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "score",
				"type": "uint8"
			}
		],
		"name": "GameOverEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "leader",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "mines",
				"type": "uint8"
			}
		],
		"name": "GameStartedEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint8[3]",
				"name": "",
				"type": "uint8[3]"
			}
		],
		"name": "MinePositionEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "roomId",
				"type": "string"
			}
		],
		"name": "MineRevealEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "cell",
				"type": "uint8"
			}
		],
		"name": "PlayerClickedEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "score",
				"type": "uint8"
			}
		],
		"name": "ScoreEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "WaitForOthersEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX_CELLS",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_PLAYERS",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "roomId",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "cellIndex",
				"type": "uint8"
			}
		],
		"name": "clickCell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "roomId",
				"type": "string"
			}
		],
		"name": "createRoom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "roomId",
				"type": "string"
			}
		],
		"name": "joinRoom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "roomID",
				"type": "string"
			}
		],
		"name": "revealMines",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "roomId",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "mines",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "gems",
				"type": "uint8"
			}
		],
		"name": "startGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
