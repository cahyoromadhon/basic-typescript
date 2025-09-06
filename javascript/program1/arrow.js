// Hari ini kita akan mempelajari ulang mengenai konsep dasar Arrow Function

// Normal Function
function add(a, b) {
    return a + b;
}
console.log(add(10,20));
// Seperti inilah bagaimana normal function itu bekerja pada javascript

// Function Expression
const add2 = function(a, b) {
    return a + b
};
console.log(add2(11,20));
// Function expression adalah function yang disimpan di dalam sebuah variable

// Arrow Function
const add3 = (a, b) => a + b;
const add4 = x => x + x;
const add5 = () => console.log("Tanpa Parameter");
const add6 = (a, b) => {
    return a + b;
}
console.log(add3(12,20));
console.log(add4(12));
add5();
console.log(add6(12,20));

// Arrow function adalah function expression yang lebih singkat penulisannya
// Pada add3 kita bisa melihat bahwa kita tidak perlu menuliskan kata kunci function
// Pada add4 kita bisa melihat bahwa jika hanya memiliki satu parameter kita tidak perlu menuliskan tanda kurung
// Pada add5 kita bisa melihat bahwa jika tidak memiliki parameter maka kita harus menuliskan tanda kurung kosong
// Pada add6 kita bisa melihat bahwa jika memiliki lebih dari satu baris kode di dalam body function
// Maka kita harus menuliskan tanda kurung kurawal dan kata kunci return jika ingin mengembalikan nilai