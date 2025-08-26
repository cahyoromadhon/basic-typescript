"use strict";
// Fungsi untuk menghasilkan pesan sapaan
function sayHello(greeting) {
    return `${greeting.pesan}, ${greeting.penerima}!`;
}
// Contoh penggunaan
const greeting = {
    pesan: "Hello",
    penerima: 123
};
console.log(sayHello(greeting));
// interface adalah sebuah struktur object yang memiliki indentifier Greeting dan 2 properti pesan dan penerima dengan masing masing valuenya adalah string
// fungsi sederhhana yang memiliki indentifier sayHello dengan parameter greeting yang bernilai struktur object kemudian : untuk tipe apa yang ingin diambbilnnya
// kemudian return dengan string parameter.pesan
// ubah nilai dengan apa yang kita inginkan di variabel greeting beserta valuenya
// console.log fungsi dengan parameter variabel greeting
