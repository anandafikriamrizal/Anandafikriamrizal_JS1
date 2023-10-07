//contoh program javascript menggunakan else, if
var bilangan = 35;

if (bilangan % 2 === 0) {
  console.log(bilangan + " adalah bilangan genap.");
} else {
  console.log(bilangan + " adalah bilangan ganjil.");
}

//contoh program javascript menggunakan nested if
var nilai = 75;

if (nilai >= 60) {
  console.log("Anda lulus ujian.");

  if (nilai >= 90) {
    console.log("Anda mendapatkan nilai A.");
  } else if (nilai >= 80) {
    console.log("Anda mendapatkan nilai B.");
  } else if (nilai >= 70) {
    console.log("Anda mendapatkan nilai C.");
  } else {
    console.log("Anda mendapatkan nilai D.");
  }
} else {
  console.log("Anda gagal ujian.");
}

// contoh program javascript menggunakan swtich case
var nomorHari = prompt("Masukkan nomor hari (1-7):");

nomorHari = parseInt(nomorHari);

switch (nomorHari) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Nomor hari yang Anda masukkan tidak valid.");
}

// contoh program javascript menggunakan for statement
var namaNama = ["Alutpih", "Roy", "Muptih", "Immanuel"];

for (var i = 0; i < namaNama.length; i++) {
  console.log(namaNama[i]);
}

//contoh program javacsript menggunakan while
let sum = 0;
let number = 5;

while (number <= 30) {
  sum += number;
  number++;
}
console.log("Jumlah bilangan bulat dari 5 hingga 30 adalah: " + sum);

// contoh program javascript menggunakan do while
let counter = 1;

do {
  console.log("Absen ke-" + counter);
  counter++;
} while (counter <= 10);

// contoh program javascript menggunakan function (penjumlahan)
function tambah(a, b) {
  return a + b;
}

// Memanggil dan mencetak hasil
var hasil = tambah(10, 6);
console.log("Hasil penjumlahan: " + hasil);
