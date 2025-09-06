// const promise = new Promise((resolve, reject) => {
//     const dataFound = true;
//     if (dataFound) {
//         resolve("Data found successfully!");
//     } else {
//         reject("Data not found.");
//     }
// });

// promise
//     .then(result => console.log("Success:", result))
//     .catch(error => console.error("Error:", error));

// const fetchUsers = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(error => reject("Failed to fetch users: " + error));
// })

// fetchUsers
//     .then(users => {
//         console.log("Fetched Users:", users);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// How the logic works
// 1. deklarasi variabel bernama fetchUsers yang berisi promise
// 2. di dalam promise, parameter resolve dan reject dibuat dalam arrow function
// 3. fetch digunakan untuk mengambil data dari API
// 4. jika fetch berhasil, response diubah menjadi json dan data diteruskan ke resolve
// 5. jika fetch gagal, error diteruskan ke reject dengan pesan "Failed to fetch users: " diikuti errornya
// 6. kemudian, fetchUsers dipanggil dengan .then untuk menangani hasil sukses dan .catch untuk menangani error
// 7. jika sukses, data user ditampilkan di console
// 8. jika error, pesan error ditampilkan di console

// Pada Real Development, Fetch sudah secara default mengembalikan Promise
// sehingga kita tidak perlu membungkusnya lagi dengan Promise baru

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log("Fetched Users:", data);
//     })
//     .catch(error => {
//         console.error("Failed to fetch users: " + error);
//     })

fetch('https://jsonplaceholder.typicode.com/users/1') // Ambil data user dengan ID 1
    .then(res => res.json()) // Ubah response menjadi JSON
    .then(user => { // Tangani data user jika data berhasil diambil
        console.log("User: ", user); // Tampilkan data user di console
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`); // Ambil data posts berdasarkan userId
    })
    .then(res => res.json()) // Ubah response posts menjadi JSON
    .then(posts => { // Tangani data posts jika data berhasil diambil
        console.log("Posts: ", posts); // Tampilkan data posts di console
    })
    .catch(err => { // Tangani error jika ada kesalahan pada salah satu proses di atas
        console.error("Error: ", err); // Tampilkan pesan error di console
    })

// Ada macam macam Promise diluar sana
// 1. Promise.all() => Menjalankan beberapa promise secara paralel dan menunggu semuanya selesai
// 2. Promise.allSettled() => Menjalankan beberapa promise secara paralel dan menunggu semuanya selesai, baik resolve atau reject
// 3. Promise.race() => Menjalankan beberapa promise secara paralel dan mengembalikan hasil dari promise yang pertama selesai
// 4. Promise.any() => Menjalankan beberapa promise secara paralel dan mengembalikan hasil dari promise yang pertama resolve, jika semuanya reject maka akan mengembalikan AggregateError

// Real World Use Cases
// 1. Mengambil data dari beberapa API sekaligus
// 2. Memuat beberapa aset (gambar, script, dll) secara paralel
// 3. Menyimpan beberapa data ke database secara bersamaan
// 4. Mengunduh gambar dari beberapa sumber sekaligus