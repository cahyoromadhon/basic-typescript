// Materi kali ini akan mempelajari union types dan type guard dengan usecase yang sama
interface Transaction {
    id: string;
    amount: number | string; // Union Type
}

// fungsi untuk memformat transaksi dengan type guard 

function printTransaction(tx: Transaction): string {
    let formattedAmount: string;
    if (typeof tx.amount === "number") { // typeof adalah type guard
        formattedAmount = tx.amount.toString() // Aman karena tipe number
    } else {
        formattedAmount = tx.amount; // Aman karena tipe string
    }
    return `Transaction ${tx.id}: ${formattedAmount} tokens`;
}

// array transaksi dengan variasi tipe amount
const transactions: Transaction [] = [
    {id: "0x1", amount: 100},
    {id: "0x2", amount: "50"},
    {id: "0x3", amount: 25}
];

// tampilkan semua transaksi
transactions.forEach(tx => {
    console.log(printTransaction(tx));
});

// pada properti amount kita dihadapkan oleh sebuah pilihan tipe number atau string, ini adalah sebuah konsep dalam union type
// fungsi printTransaction mengambil interface Transacrtion kedalam parameter dan memasukkannya ke tx
// : string artinya adalah fungsi ini harus mengembalikan (return) tipe string
// deklarasi variabel lokal dengan tipe string
// inti dari pengkondisian ini adalah mengubah tipe data yang awalnya number menjadi string agar semuanya selaras
// jika sudah maka masuk kedalam return yang diharuskan mengembalikan string sesuai : string diatas

// sebenarnya ini hanyalah konversi yang dilakukan secara explisit agar union type dapat terbaca dengan aman
// apabila properti hanya memiliki 1 tipe data, kita tidak perlu melakukan konversi secara explisit karena perilaku javascript by default selalu mengubah tipe data apapun yang masuk kedalam string interpolasi menjadi string, kamu bisa melihat contoh nyata pada program ke-2