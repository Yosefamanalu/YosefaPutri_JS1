// If, Else
// Contoh 1
let nilaiHarian = 178;

if (nilaiHarian >= 180) {
    console.log("Anda tinggi!");
} else {
    console.log("Anda Cukup tinggi.");
}


// Nested If
// Contoh 1
let weather = "85"; 
if (weather === "1-13") {
    console.log("Anak-anak.");
} else if (weather === "14-20") {
    console.log("Remaja.");
} else if (weather === "21-50") {
    console.log("Dewasa.");
} else {
    console.log("Manula.");
}


// Switch Case
let hari = "Rabu";
let kegiatan;

switch (hari) {
    case "Senin":
        kegiatan = "Meeting pagi jam 9.";
        break;

    case "Selasa":
        kegiatan = "Kerja proyek baru.";
        break;

    case "Rabu":
        kegiatan = "Makan siang bersama tim.";
        break;

    case "Kamis":
        kegiatan = "Review dan perencanaan.";
        break;

    case "Jumat":
        kegiatan = "Menyelesaikan laporan mingguan.";
        break;

    default:
        kegiatan = "Tidak ada jadwal khusus hari ini.";
}

console.log(`Pada hari ${hari}, kegiatan yang dijadwalkan: ${kegiatan}`);


// For Statement
let fruits = ["Avocado", "Blueberry", "Mango", "Grapes"];
for (let j = 1; j < fruits.length; j++) {
    console.log(fruits[j]);
}


// While Statement
let barang = ["Buku", "Pensil", "Penggaris", "Kertas"];
let index = 0;

while (index < barang.length) {
  console.log("Barang di indeks " + index + ": " + barang[index]);
  index++;
}

console.log("Proses pengecekan barang selesai.");


// Do While Statement
let counter = 35;

do {
  console.log(counter);
  counter++;
} while (counter >= 40);



// Function
function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  } // Deklarasi fungsi untuk menghitung luas persegi panjang

  const panjangPersegiPanjang = 12;
  const lebarPersegiPanjang = 8;
  
  // Memanggil fungsi dan menyimpan hasilnya dalam variabel 'luas'
  const luas = hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
  
  console.log("Luas Persegi Panjang:", luas);
