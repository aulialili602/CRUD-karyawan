
const daftarSiswa = [
   {  nama: "Rosa",
      jenKel: "P",
      umur: "17",
      wfavorit: "kuning",
      seragam: [`osis`, `indentitas`, `werpack`, `pramuka`, `olahraga`]
   },
   {
    nama: "Ambar",
    jenKel: "L",
    umur: "16",
    wfavorit: "merah",
    seragam: [`osis`, `indentitas`, `werpack`, `pramuka`, `olahraga`]
   },
   {
    nama: "Rizki",
    jenKel: "P",
    umur: "16",
    wfavorit: "ungu",
    seragam: [`osis`, `indentitas`, `werpack`, `pramuka`, `olahraga`]
   },
   {
    nama: "Mila",
    jenKel: "P",
    umur: "18",
    wfavorit: "biru",
    seragam: [`osis`, `indentitas`, `werpack`, `pramuka`, `olahraga`]
   },
   {
    nama: "Bagas",
    jenKel: "L",
    umur: "15",
    wfavorit: "coklat",
    seragam: [`osis`, `indentitas`, `werpack`, `pramuka`, `olahraga`]
   }
]

let mode = 'tambah'
// READ

// arrow function

// function menampilkan nama
const tampilkanSiswa = () => {

    const tblSiswa = document.getElementById("tblSiswa")
    tblSiswa.innerHTML = `<tr><th scope="col">No</th><th scope="col">Nama</th><th scope="col">Jenis Kelamin</th><th scope="col">Umur</th><th scope="col">Warna Favorit</th></tr>`

    for(let index in daftarSiswa) {
        console.log(`${parseInt(index) + 1}. ${daftarSiswa[index].nama} berjenis kelamin ${daftarSiswa[index].jenKel} berumur ${daftarSiswa[index].umur} warna favorit dia ${daftarSiswa[index].wfavorit}`)

        const tblSiswa = document.getElementById("tblSiswa")
        tblSiswa.innerHTML += `<tr><th>${parseInt(index) + 1}</th><td>${daftarSiswa[index].nama}</td><td> ${daftarSiswa[index].jenKel}</td><td>${daftarSiswa[index].umur}</td><td>${daftarSiswa[index].wfavorit}</td><td><button type="button" class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Delate</button></td><td><button type="button" class="btn btn-warning" onlick="editSiswa('${daftarSiswa[index].nama}')">Edit</button>
</td></tr>`

        
    }
}

const tambahSiswa = () => {
    const nama = document.getElementById("txtNama").value 
    const jenKel= document.getElementById("jenKel").value 
    const umur = document.getElementById("txtUmur").value 
    const wfavorit = document.getElementById("wfav").value

    const siswaBaru = {
        nama: nama,
        jenKel: jenKel,
        umur: umur,
        wfavorit: wfavorit,
    }
    // menambahkan siswa
    if(mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        daftarSiswa[0] = siswaBaru

    }

    document.getElementById("txtNama").value =''
    document.getElementById("jenKel").value =''
    document.getElementById("txtUmur").value = ''
    document.getElementById("wfav").value = ''

    mode = 'tambah'

    tampilkanSiswa()
}

const cariIndex = (nama) => {
    for(let i = 0; i < daftarSiswa.length; i ++) {
        if(daftarSiswa[i].nama == nama){
            return i 
        }
    } 
}

const hapusSiswa = (target) => {
    const indexDihapus = cariIndex (target)
        daftarSiswa.splice(indexDihapus, 1)
    tampilkanSiswa()
    // console.log(target)
    // console.log(indexDihapus)
// cara menghapus elemen
    

}


// mengedit file
const editSiswa = (target) => {
    const indexEdit = cariIndex(target)
    const siswaDiedit = daftarSiswa[indexEdit]

    document.getElementById("txtNama") = siswaDiedit.nama;
    document.getElementById("jenKel") = siswaDiedit.jenKel;
    document.getElementById("txtUmur") = siswaDiedit.umur;
    document.getElementById("wfav") = siswaDiedit.wfavorit;

    console.log(target)
    console.log(indexEdit)
    console.log(daftarSiswa[indexEdit])

    mode = indexEdit

    const namaBaru = prompt('Masukan Nama Baru')
    const jenKelBaru= prompt('Masukan Jenis Kelamin Baru')
    const umurBaru = prompt('Masukan Umur Baru')
    const wfavoritBaru = prompt('Masukan Warna Favorit Baru')

    daftarSiswa[indexEdit] = {
        nama: namaBaru,
        jenKel: jenKelBaru,
        umur: umurBaru,
        wfavorit: wfavoritBaru
    }
}
    