function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    var hasil = []
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } else {
        hasil = dataArray.filter(function(num) {
            return num > nilaiAwal && num < nilaiAkhir
        })
        hasil.sort(function(a, b) { return a - b });
        console.log(hasil)
    }




}


SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(4, 17, [2, 25, 4])