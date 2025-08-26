interface Transaction {
    id: string;
    amount: number;
}

function printTransaction (trx: Transaction): string {
    return `Transaction ${trx.id}, ${trx.amount} tokens`
}

const transaction: Transaction[] = [
    {id: "0x1", amount: 100},
    {id: "0x2", amount: 50},
    {id: "0x3", amount: 25}
];

transaction.forEach(tx => {console.log(printTransaction(tx));
});