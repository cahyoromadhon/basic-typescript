"use strict";
// fungsi untuk memformat transaksi dengan type guard 
function printTransaction(tx) {
    let formattedAmount;
    if (typeof tx.amount === "number") {
        formattedAmount = tx.amount.toString(); // Aman karena tipe number
    }
    else {
        formattedAmount = tx.amount; // Aman karena tipe string
    }
    return `Transaction ${tx.id}: ${formattedAmount} tokens`;
}
// array transaksi dengan variasi tipe amount
const transactions = [
    { id: "0x1", amount: 100 },
    { id: "0x2", amount: "50" },
    { id: "0x3", amount: 25 }
];
// tampilkan semua transaksi
transactions.forEach(tx => {
    console.log(printTransaction(tx));
});
