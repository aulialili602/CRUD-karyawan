const nama = [
    "Devyn Ramirez",
    "Harmony Duncan",
    "Clarissa Burgess",
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase",
    "Kristin Mcdaniel",
    "Macey Sanford",
    "Alfredo Faulkner"
]

const masaKerja = [
    10,
    5,
    8,
    7,
    4,
    10,
    9,
    8,
    7,
    10
]

const karyawanJunior = []
const karyawanSenior = []

// for(let i = 0; i < nama.length; i++) {
//     if(masaKerja[i] < 6) {
//         karyawanJunior.push(nama[i])
//         console.log(`karyawan ${nama[i]} mendapatkan gaji Rp 4.000.000`)
//     }

//     else{
//         karyawanSenior.push(nama[i])
//         console.log(`karyawan ${nama[i]} mendapatkan gaji Rp 7.000.000`)
//     }
// }

// for in
// console.log(`Daftar Karyawan Senior`)
// for(let index in karyawanSenior) {
//     console.log(`${parseInt(index) + 1}. ${karyawanSenior[index]}`)
// }

// // for of
// let index = 1
// console.log(`Daftar Karyawan Junior`)
// for(let karyawan of karyawanJunior) {
//     console.log(`${index}. ${karyawan}`);
//     index++;
// }

function gajikaryawan () {
    for(let i = 0; i < nama.length; i++) {
        if(masaKerja[i] < 6) {
            karyawanJunior.push(nama[i])
            console.log(`karyawan ${nama[i]} mendapatkan gaji Rp 4.000.000`)
        }
    
        else{
            karyawanSenior.push(nama[i])
            console.log(`karyawan ${nama[i]} mendapatkan gaji Rp 7.000.000`)
        }
    }
}
gajikaryawan()

function golonganKaryawan () {
    for(let i = 0; i < nama.length; i++) {
        if(masaKerja[i] < 6) {
            karyawanJunior.push(nama[i])
        }
    
        else{
            karyawanSenior.push(nama[i])
        }
    }
    console.log(golonganKaryawan)
}
console.log(`golongan karyawan`)
golonganKaryawan()


