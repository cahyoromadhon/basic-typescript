async function getUserInfo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        console.log("Username is: ", user.name);
    } catch (error) {
        console.error("Error fetching user: ", error);
    }
}

getUserInfo()

// How the logic works
// 1. deklarasi fungsi async bernama getUserInfo
// 2. di dalam fungsi, blok try-catch digunakan untuk menangani error
// 3. fetch digunakan untuk mengambil data user dengan ID 1 dari API
// 4. await digunakan untuk menunggu hasil fetch sebelum melanjutkan ke baris berikutnya
// 5. response diubah menjadi JSON dengan await response.json()
// 6. nama user ditampilkan di console
// 7. jika terjadi error selama proses fetch atau parsing JSON, error ditangani di blok catch dan pesan error ditampilkan di console