"use strict";
// Type Annotations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. Static Type Determination:
let nama1 = "Cahyo"; // Anotasi dideklarasikan secara eksplisit pada variabel
console.log(nama1);
// 2. Dynamic Type Determination:
let nama2 = "cahyorom"; // Anotasi dideklarasikan secara implisit pada variabel
console.log(nama2);
// Note:
// Keunggulan static dibanding dynamic adalah error dapat langsung terdeteksi pada saat penulisan kode
// 3. Bonus: Any Type (Not Recommended)
let kalimat = "Hello, World!";
kalimat = 42;
console.log(kalimat);
// Type Annotations with Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let person = {
    name: "Cahyo",
    age: 17,
    address: {
        street: "Jl. Black",
        city: "Surabaya"
    },
    job: "Student" // Optional Property
};
// Type Annotations with Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pluscalc(a, b) {
    return a + b;
}
console.log(pluscalc(5, 20));
// Optional Parameters
function minuscalc(a, b, c) {
    if (c !== undefined) {
        return a - b - c;
    }
    return a - b;
}
console.log(minuscalc(20, 5));
console.log(minuscalc(20, 5, 3));
// Default Parameters
function multiplycalc(a, b = 2) {
    return a * b;
}
console.log(multiplycalc(5 * 3));
console.log(multiplycalc(5));
// Rest Parameters
function sumcalc(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumcalc(1, 2, 3, 4, 5));
// ... sebagai rest parameter yang menandakan bahwa parameter ini dapat menerima banyak argumen
// anotasi number[] menandakan bahwa tipe data yang diterima adalah array of number
// reduce adalah method array untuk mengakumulasikan semua nilai dalam array menjadi satu nilai tunggal
// acc adalah accumulator yang menyimpan hasil sementara, curr adalah current value yang sedang diproses dalam iterasi
// 0 adalah nilai awal dari accumulator
// hasil akhirnya adalah jumlah dari semua angka yang diberikan sebagai argumen ke fungsi sumcalc
// Void Type ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message.");
// Void adalah type yang menunjukkan bahwa fungsi tidak mengembalikan nilai apapun
// Biasanya digunakan pada fungsi yang hanya melakukan efek samping seperti logging, menampilkan pesan, atau memodifikasi data tanpa mengembalikan nilai
// Another Example of Void Type
function showAlert() {
    alert("This is an alert message.");
}
// Fungsi ini menampilkan pesan peringatan (alert) di browser
// Karena fungsi ini tidak mengembalikan nilai apapun, maka tipe kembalian (return type) dari fungsi ini adalah void
// Namun mengapa menggunakan void? Bukankah kita bisa saja tidak menuliskan tipe kembalian sama sekali?
// Jawabannya adalah dengan menuliskan void, kita memberikan informasi yang jelas kepada pembaca kode bahwa fungsi ini memang tidak mengembalikan nilai apapun
// Hal ini dapat membantu dalam pemahaman kode dan mencegah kesalahan penggunaan fungsi di kemudian hari
// Never Type ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function throwError(message) {
    throw new Error(message);
}
// Never adalah type yang menunjukkan bahwa fungsi tidak pernah mengembalikan nilai
// Biasanya digunakan pada fungsi yang selalu melempar error atau memiliki loop tak berujung
// Fungsi dengan tipe never tidak pernah selesai secara normal, sehingga tidak ada nilai yang bisa dikembalikan
// Union Types ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let either;
console.log(either = "Hello");
console.log(either = 123);
// Union types memungkinkan sebuah variabel untuk menampung lebih dari satu tipe data
// Literal Types ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let direction;
console.log(direction = "up");
// Literal types memungkinkan sebuah variabel untuk menampung nilai tertentu yang telah ditentukan sebelumnya
// Hal ini berguna untuk membatasi nilai yang dapat diterima oleh variabel tersebut
// Nullable Types ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function greetUser(username) {
    if (username === null) {
        return "Hello, Guest!";
    }
    else {
        return `Hello, ${username}!`;
    }
}
console.log(greetUser("Cahyo"));
console.log(greetUser(null));
let myName = "Cahyo";
let myAge = 17;
console.log(myName);
console.log(myAge);
let personInfo = {
    name: "Cahyo",
    age: 17,
    address: "Jl. Black",
    phone: "123-456-7890"
};
console.log(personInfo);
// Intersection types memungkinkan kita untuk menggabungkan beberapa tipe data menjadi satu tipe data baru
// Hal ini berguna untuk membuat tipe data yang kompleks dengan menggabungkan properti dari beberapa tipe data yang berbeda
// Array Types ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
// Multi-dimensional array
let arrayOne = [1, 2, 3];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, "A", 2, "B", 3, "C"];
let multiDimensionalArray = [arrayOne, arrayTwo, arrayThree];
console.log(multiDimensionalArray);
// Array types memungkinkan kita untuk menentukan tipe data dari elemen-elemen dalam sebuah array
// Hal ini berguna untuk memastikan konsistensi tipe data dalam array dan mencegah kesalahan tipe data saat mengakses elemen-elemen dalam array
// Tuples ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let user = ["Cahyo", 17, true];
console.log(user);
// Tuples memungkinkan kita untuk membuat array dengan jumlah elemen yang tetap dan tipe data yang berbeda-beda untuk setiap elemen
// Hal ini berguna untuk merepresentasikan data yang memiliki struktur tetap, seperti koordinat (x, y), pasangan kunci-nilai, atau data yang terdiri dari beberapa atribut dengan tipe data yang berbeda
// Enums ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log(favoriteColor);
// Enums memungkinkan kita untuk mendefinisikan sekumpulan nilai konstan yang memiliki nama yang mudah dibaca
// Hal ini berguna untuk meningkatkan keterbacaan kode dan mencegah kesalahan penulisan nilai konstan
// Another Example of Enums
var Size;
(function (Size) {
    Size["Small"] = "SMALL";
    Size["Medium"] = "MEDIUM";
    Size["Large"] = "LARGE";
})(Size || (Size = {}));
let tshirtSize = Size.Medium;
console.log(tshirtSize);
let cahyo = {
    name: "Cahyo",
    age: 17,
};
console.log(cahyo);
// Arti void disini berarti method ini tidak mengembalikan nilai apapun atau undefined
// Jika method ini mengembalikan nilai, maka kita harus menentukan tipe data dari nilai yang dikembalikan tersebut
let cahyoPerson = {
    name: "Cahyo",
    age: 17,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
cahyoPerson.greet("Hello Typerscript"); // Output: Cahyo says: Hello Typerscript
let userSettings = {
    theme: true,
    font: "Arial",
    sidebar: false,
    external: true,
};
// Readonly adalah modifier yang menandakan bahwa properti ini hanya dapat dibaca dan tidak dapat diubah setelah diinisialisasi
// Hal ini berguna untuk melindungi data dari perubahan yang tidak diinginkan dan memastikan konsistensi data dalam aplikasi
// Class Type Annotations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Products {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    getProductInfo() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
// Create an instance of the Products class
const product1 = new Products(1, "Laptop", 999.99);
console.log(product1.getProductInfo());
// Class properties dan constructor parameters memiliki type annotations yang sama
// Method getProductInfo memiliki return type annotations yang menunjukkan bahwa method ini mengembalikan nilai bertipe string
// Mengapa kita perlu menggunakan Class
// Class adalah blueprint untuk membuat objek dengan properti dan metode yang sama
// Dengan menggunakan class, kita dapat membuat banyak objek dengan struktur yang konsisten dan menghindari duplikasi kode
// Class juga mendukung konsep inheritance, yang memungkinkan kita untuk membuat class baru berdasarkan class yang sudah ada, sehingga meningkatkan reuseability kode
// Selain itu, class juga mendukung encapsulation, yang memungkinkan kita untuk menyembunyikan detail implementasi dan hanya menampilkan antarmuka yang diperlukan kepada pengguna class
// Class Access Modifiers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getUserInfo() {
        return `User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
    }
}
const Oxuser = new User(1, "Cahyo", "cahyorom01@gmail.com");
console.log(Oxuser.getUserInfo());
// Hal yang membedakan antara class dan interface adalah class dibuat untuk membuat object dengan properti dan metode yang sama, sedangkan interface dibuat untuk mendifinisikan struktur dari sebuah object
// Generics ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Generic Function
function returnType(val) {
    return val;
}
const numValue = returnType(123);
const strValue = returnType("Hello, Generics!");
const boolValue = returnType(true);
console.log(numValue);
console.log(strValue);
console.log(boolValue);
// Generic function memungkinkan kita untuk membuat fungsi yang dapat bekerja dengan berbagai tipe data tanpa harus menulis ulang kode untuk setiap tipe data
// Dengan menggunakan generics, kita dapat meningkatkan reuseability kode dan mengurangi duplikasi kode yang tidak perlu
// Generic Class
class GenericBox {
    constructor(content) {
        this.content = content;
    }
}
const stringBox = new GenericBox('This is a string');
const numberBox = new GenericBox(123);
const defaultBox = new GenericBox('Default to string');
console.log(stringBox);
console.log(numberBox);
console.log(defaultBox);
const kv1 = { key: 1, value: "One" };
console.log(kv1);
const kv2 = { key: "isActive", value: true };
console.log(kv2);
// Generic interfaces memungkinkan kita untuk membuat interface yang dapat bekerja dengan berbagai tipe data tanpa harus menulis ulang kode untuk setiap tipe data
// Type Assertions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let someValue = "This is a string";
let strLength = someValue.length;
console.log(strLength);
// Type assertions memungkinkan kita untuk memberitahu compiler tentang tipe data dari sebuah variabel, sehingga kita dapat mengakses properti atau metode yang spesifik untuk tipe data tersebut
// Hal ini berguna ketika kita yakin bahwa sebuah variabel memiliki tipe data tertentu, tetapi compiler tidak dapat mengetahuinya secara otomatis
// Namun perlu diingat bahwa type assertions tidak melakukan pemeriksaan tipe data pada runtime, sehingga kita harus berhati-hati saat menggunakannya untuk menghindari kesalahan tipe data
// Keyword as berguna untuk melakukan type assertions
// Summary ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Type annotations memungkinkan kita untuk menentukan tipe data dari variabel, parameter, dan properti dalam kode kita
// Dengan menggunakan type annotations, kita dapat meningkatkan keterbacaan kode, mencegah kesalahan tipe data, dan memanfaatkan fitur-fitur TypeScript seperti autocompletion dan refactoring
// Beberapa konsep penting dalam type annotations meliputi static dan dynamic type determination, objek, fungsi, void dan never types, union dan literal types, nullable types, type aliases dan intersection types, array dan tuples, enums, interfaces, class type annotations dan access modifiers, generics, serta type assertions
// Dengan memahami dan menguasai konsep-konsep ini, kita dapat menulis kode TypeScript yang lebih aman, efisien, dan mudah dipelihara
