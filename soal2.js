const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ] // inisialisai variabel name yang dengan data array nama

function searchName(hurufDicari, jumlahOutput, callback) { // insialisai function dengan parameter hurufDicari, jumlahOutput dan callback 
    /* paramter hurufDicari : menampung huruf . kata yang akan dicari
       paramter jumlahOutput : menampung jimlah maksimal data yang akan ditampilkan
       paramter callback : untuk meampung fuunction. */

    // proses memfilter data array yang akan dicari berdasarkan parameter hurufDicari
    var filterName = name.filter(function(data) {
        /* menggunakan method filter yang didalamnya ada fungsi dengan parameter data.
        parameter data ini yang nantinya akan mennampilkan nilai di dalam array */
        return data.toLowerCase().includes(hurufDicari)
            /* mengembalikan nilai berdasarkan huruf yang dicari dengan cara parameter data dibuat menjadi huruf kecil semua 
            dengan menggunakan method toLowerCase() dan icludes. Method toLowerCase() untuk membuat semua nama menjadi huruf kecil,
            dan method icludes untuk mencari nama berdasarkan parameter hurufDicari*/
    })
    callback(jumlahOutput, filterName)
        /* memanggil parameter callback dengan parameter diisi variabel jumlahOutput dan filterName.
        variabel jumlahOutput berisi parameter dari jumlahOutput dan variabel filterName berisi data array yang telah di filter */
}


function printOutput(jumlahOutput, dataArray) { // inisialisai fungsi dengan parameter jumlahOutput dan dataArray.
    /*
       paramter jumlahOutput : menampung jimlah maksimal data yang akan ditampilkan
       paramter dataArray : untuk menampung data berupa array */
    var hasil = dataArray.filter(function(data, index) { //memfilter dataArray menggunkana method filter yang didalamnya terdapat fungsi dengan parameter data dan index.
        /*Parameter data : menampung nilai yang ada di dalam array 
        parameter index : menampung index dari array*/
        return index < jumlahOutput // mengembalikan data array dengan index lebih kecil dari parameter jumlahOutput.
    })
    console.log(hasil) // output : [Alexandra,Amanda,Angela]
}
searchName("an", 3, printOutput) // output : [Alexandra,Amanda,Angela]