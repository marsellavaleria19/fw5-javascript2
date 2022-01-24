function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) { // inisialisai fungsi dengan parameter nilaiAwal, nilaiAkhir dan dataArray
    /* paramter nilaiAwal : menampung nilai yang menjadi batas awal untuk menampilkan nilai di dalam array. 
       paramter jumlahOutput : menampung nilai yang menjadi batas akhir untuk menampilkan nilai di dalam array. 
       paramter dataArray : menampung data berupa array */
    var hasil = [] // inisialisai variabel hasil dengan array kosong
    if (nilaiAwal > nilaiAkhir) { // cek apakah niai pada parameter nilaiAwal lebih besar dari nilai pada parameter nilaiAkhir
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length <= 5) { // jika kondisi salah, maka akan dicek apakah jumlah dataArray lebih kecil dari atau sama dengan 5
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } else { // jika kondisi salah
        // proses filter nilai
        hasil = dataArray.filter(function(num) { // menggunakan method filter yang didalamnya terdapat fungsi den parameter num
            return num > nilaiAwal && num < nilaiAkhir
                // akan mengembalikan data lebih besar dari parameter nilaiAwal dan data lebih kecil dari parameter nilaiAkhir
        })
        hasil.sort(function(a, b) { //setelah data difilter, maka akan diurutkan dengan menggunakan method sort yang dalamnya terdapat fungsi dengan parameter a dan b  
            return a - b // mengembalikan nilai hasil pengurangan dari a-b 
        });
        /* jika hasilnya kurang dari 0, maka parameter a yang diurutkan terlebih dahulu. 
        Jika hasilnya lebih dari 0, maka paramter b yang akan diurutkan terlebih dahulu. 
        Jika hasilnya 0, tidak ada yang akan diurutkan */
        console.log(hasil) // output parameter hasil
    }
}


SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]) // output : [8,14,17]
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]) // output : Nilai akhir harus lebih besar dari nilai awal
SeleksiNilai(4, 17, [2, 25, 4]) // Jumlah angka dalam dataArray harus lebih dari 5s