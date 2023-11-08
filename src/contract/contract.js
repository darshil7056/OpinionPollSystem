export const contractaddress = "0x43aa9dEd243A3d9daCcFe65010851d5d4fEC8C48";
export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "comments",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "studentID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "professorID",
				"type": "uint256"
			}
		],
		"name": "EvaluationSubmitted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_professorAddress",
				"type": "address"
			}
		],
		"name": "addProfessor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_ids",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "_names",
				"type": "string[]"
			}
		],
		"name": "addStudents",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "evaluations",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "comments",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "submitted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "professorID",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_professorID",
				"type": "uint256"
			}
		],
		"name": "getEvaluationsByProfessorID",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"internalType": "uint8[]",
				"name": "ratings",
				"type": "uint8[]"
			},
			{
				"internalType": "string[]",
				"name": "comments",
				"type": "string[]"
			},
			{
				"internalType": "bool[]",
				"name": "submitted",
				"type": "bool[]"
			},
			{
				"internalType": "uint256[]",
				"name": "studentIDs",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "professorNames",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProfessors",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getStudentWalletAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVerifiedStudents",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "isStudentVerified",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "professors",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_rating",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_comments",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_studentID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_professorID",
				"type": "uint256"
			}
		],
		"name": "submitEvaluation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "verifiedProfessorIDs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "verifiedStudentIDs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "verifyStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]