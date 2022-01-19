/*
1. Method .pop()
Pop adalah method javascript yang digunakan di array 
untuk menghapus nilai terakhir dari sebuah array. 
Pop tidak menerima parameter apapun */

var numbers = [5, 6, 7, 8, 9] // inisialisasi variabel
numbers.pop() // mengeksekusi method pop 
console.log(numbers) //[5, 6, 7, 8]

/*
2. Method .unshift()
Unshift yaitu method javascript yang digunakan pada array untuk 
menambahkan nilai pada elemen awal array. */
var angka = [1, 2, 3, 4] // inisialisasi variabel
angka.unshift() //mengeksekusi method unshift
console.log(angka) // [0, 1, 2, 3, 4] 

/*
3. Method .shift()
Shift adalah method javascript yang digunakan pada array untuk 
menghapus nilai pada index awal dari sebuah array. 
Method Shift tidak menerima parameter apapun.*/

var numbers = [0, 1, 2, 3] // inisialisasi variabel
numbers.shift() // mengeksekusi method shift
console.log(numbers) //[1, 2, 3]

/*4. Method .split()
Split adalah method javascript yang dapat digunakan pada string untuk 
memecah string menjadi array. Split menerima sebuah parameter berupa karakter 
yang menjadi separator untuk memecah string. */

var biodata = "nama saya john" // inisialisasi variabel
console.log(biodata.split(" ")) //[ "nama", "saya","john"] 

/*5 Method .join()
Metode join adalah method javascript yang digunakan pada array yand dapat
mengubah sebuah array menjadi string dengan cara menggabungkan seluruh 
elemen array menjadi satu dengan sebuah karakter pemisah yang dikirim 
melalui parameter.*/

var kata = ["saya", "sedang", "belajar", "javascript"] // inisialisasi variabel
console.log(kata.join(" ")) //"saya sedang belajar javascript"

/*
6. Method .concat()
method concat adalah method javascript yang digunakan pada string 
untuk menggabungkan beberapa string dan mengembalikannya menjadi string baru.*/

var string1 = 'good'; // inisialisasi variabel
var string2 = 'luck'; // inisialisai variabel
console.log(string1.concat(string2)) // goodluck

/*
7. Method .toUpperCase()
Method toUpperCase adalah method javascript yang digunakan pada string untuk
mengubah semua huruf yang ada di string menjadi huruf kapital. */

var letter = 'This Letter Is For You!'; // inisialisi variabel 
console.log(letter.toUpperCase()) // THIS LETTER IS FOR YOU


/* 8. Method .toLowerCase()
Method toLowerCase adalah method javascript yang digunakan pada string untuk
mengubah semua huruf yang ada di string menjadi huruf kecil. */

var letter = 'This Letter Is For You!'; // inisialisasi variabel
console.log(letter.toLowerCase()); // this letter is for you

/* 9. method .every()
method every adalah method javascript yang digunakan pada array
untuk memeriksa semua nilai yang ada di dalam array sesuai dengan
kondisi tertentu */
const data = [10, 17, 9, 16, 8]; // inisialisasi variabel
function functionEvery(value) { // inisialisasi fungsi callback
    return value > 20; // membandingkan value dengan 20, return boolean
}
console.log(data.every(functionEvery)) // false

/*10 method some()
method every adalah method javascript yang digunakan pada array
untuk memeriksa beberapa nilai yang ada di dalam array sesuai dengan
kondisi tertentu*/
const number = [45, 4, 9, 16, 25]; // inisialisasi variabel

function functionSome(value) { //inisialisai fungsi callback
    return value > 18 // membandingkan value dengan 18, return boolean
}
console.log(number.some(functionSome)); // true