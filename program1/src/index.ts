// Definisi interface untuk struktur data
interface Greeting {
    pesan: string;
    penerima: string;
}

// Fungsi untuk menghasilkan pesan sapaan
function sayHello(greeting: Greeting): string {
    return `${greeting.pesan}, ${greeting.penerima}!`;
}

// Contoh penggunaan
const greeting: Greeting = {
    pesan: "Hello",
    penerima: "World"
};

console.log(sayHello(greeting));

// interface adalah sebuah struktur object yang memiliki indentifier Greeting dan 2 properti pesan dan penerima dengan masing masing valuenya adalah string
// fungsi sederhhana yang memiliki indentifier sayHello dengan parameter greeting yang bernilai struktur object kemudian : untuk tipe apa yang ingin diambbilnnya
// kemudian return dengan string parameter.pesan
// ubah nilai dengan apa yang kita inginkan di variabel greeting beserta valuenya
// console.log fungsi dengan parameter variabel greeting