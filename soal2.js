const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(hurufDicari, jumlahOutput, callback) {
    var filterName = name.filter(function(data) {
        return data.toLowerCase().includes(hurufDicari)
    })
    callback(jumlahOutput, filterName)
}


function printOutput(jumlahOutput, dataArray) {
    var hasil = dataArray.filter(function(data, index) {
        return index < jumlahOutput
    })
    console.log(hasil)
}
searchName("an", 3, printOutput)