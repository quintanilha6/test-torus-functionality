const NUMBER_ABI = [
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_newNumber",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "number",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "int256",
                "name": "_newNumber",
                "type": "int256"
            }
        ],
        "name": "setNumber",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export default NUMBER_ABI