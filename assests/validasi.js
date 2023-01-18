// Sign In
function ceklogin() {
    const username = "Dzaky";
    const password = "Dzaky";

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if((user == username) && (pass == password)) {
        alert("Username Benar");
        clear();
        window.location.href = "index.html";
    }else {
        alert("Username Salah");
    }
}

if(document.getElementById("masuk")) {
    document.getElementById("masuk").onclick = function() {
        ceklogin();
    } 
}

document.getElementById("reset").onclick = function() {
    clear();
}

function clear() {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}

// Sign Up
function kodemember() {
    let a = "MB"
    let b = "001"
    let tanggal = new Date();
    let tglsekarang = tanggal.getFullYear();
    document.getElementById("tampil").innerHTML = "Kode Member:" + a + tglsekarang + b;
}

document.getElementById("signup").onload = function() {
    let jenis = ["Laki - Laki", "Perempuan"];
    let jenisx = "";

    for (let i = 0; i<jenis.length; i++){
        jenisx += '<input class="form-check-input" type="radio" name="jns" id="' + jenis[i] + '" />' + jenis[i] + "</br>";
    }
    document.getElementById("jns").innerHTML = jenisx;
}

document.getElementById("tempat").onkeyup = function() {
    let a = document.getElementById("tempat").value;
    let b = a.toUpperCase();
    document.getElementById("tempat").value = b;
}

document.getElementById("nama").onkeyup = function() {
    let c = document.getElementById("nama").value;
    let d = c.toUpperCase();
    document.getElementById("nama").value = d;
}

// function pekerjaan() {
//     let pekerjaan = document.getElementById("form").value;
//     let tampil = "";
//     if(pekerjaan == "kuliah") {
//         tampil = "Kuliah";
//     }else if(pekerjaan == "kerja") {
//        tampil = "Kerja";
//     }else if(pekerjaan == "nganggur") {
//         tampil = "Nganggur";
//     }
//     document.getElementById("pekerjaanx").innerHTML = tampil;
// }

document.getElementById("submit").onclick = function() {
    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tanggal = document.getElementById("tanggal").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;
    let pekerjaan = document.getElementById("pekerjaan").value;

    kodemember();
    // pekerjaan();

    let h;

    if(document.getElementById("Laki - Laki").checked == true) {
        h = "Laki - Laki";
    }else if (document.getElementById("Perempuan").checked == true) {
        h = "Perempuan";  
    }else{
        h = alert("Jenis Kelamin Belum diisi");
    };

    
    document.getElementById("tampil").innerHTML = nama;
    document.getElementById("tampil").innerHTML = tempat + "," + tanggal;
    document.getElementById("tampil").innerHTML = email;
    document.getElementById("tampil").innerHTML = alamat;
    document.getElementById("tampil").innerHTML = pekerjaan;
}

document.getElementById("pekerjaan").onchange = function () {
    let pk = document.getElementById("pekerjaan").value;
    let k = "";

    if(pk == "kuliah") {
        k = "Kuliah mulu dapat kerja kagak"
    }else if(pk == "kerja") {
        k = "Bagi Duit Lah Ngab"
    }else if(pk == "nganggur") {
        k = "Nganggur Mulu Kapan Sukses"
    }
    document.getElementById("komen").value = k;
}