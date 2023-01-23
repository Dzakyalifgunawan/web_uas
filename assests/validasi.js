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

if(document.getElementById("hapus")){
    document.getElementById("hapus").onclick = function() {
        clear();
    }    
}

function clear() {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}

// Sign Up
function kodemember() {
    
}

document.getElementById("signup").onload = function() {
    let a = "MB"
    let b = "001"
    let tgl = new Date();
    let tglsekarang = tgl.getFullYear();
    document.getElementById("kode").innerHTML = a + tglsekarang + b;

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

document.getElementById("tampil").onload = function() {
   kodemember();
}

document.getElementById("submit").onclick = function() {
    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tanggal = document.getElementById("tanggal").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;
    let komen = document.getElementById("komen").value;

    if(nama == "" || nama == null) {
        document.getElementById("tampil").style = "display: none;";
    }else {
        document.getElementById("dt1").innerHTML = nama;
        document.getElementById("tampil").style = "display: inline;";
    }
    
    if(tempat == "" || tempat == null || tanggal == "" || tanggal == null) {
        document.getElementById("tampil").style = "none";
    }else {
        document.getElementById("dt2").innerHTML = tempat + "," + tanggal;
        document.getElementById("tampil").style = "display: inline;";
    }

    if(email == "" || email == null) {
        document.getElementById("tampil").style = "display: none;";
    }else {
        document.getElementById("dt3").innerHTML = email;
        document.getElementById("tampil").style = "display: inline;";
    }

    let h;

    if(document.getElementById("Laki - Laki").checked == true) {
        h = "Laki - Laki";
    }else if (document.getElementById("Perempuan").checked == true) {
        h = "Perempuan";  
    }else {
        h = "";
    }

    let jns = h;
    if(jns == "" || jns == null) {
        document.getElementById("tampil").style = "display: none;";
    }else {
        document.getElementById("dt4").innerHTML = jns;
        document.getElementById("tampil").style = "display: inline;";
    }

    let pekerjaan = document.getElementById("pekerjaan").value;
    if(pekerjaan == "kuliah") {
        document.getElementById("dt5").innerHTML = "Kuliah";
    }else if(pekerjaan == "kerja") {
        document.getElementById("dt5").innerHTML = "Kerja";
    }else if(pekerjaan == "nganggur") {
        document.getElementById("dt5").innerHTML = "Nganggur";
    }

    if(pekerjaan == "" || pekerjaan == null) {
        document.getElementById("tampil").style = "display: none;";
    }else {
        document.getElementById("dt5").innerHTML = pekerjaan;
        document.getElementById("tampil").style = "display: inline;";
    }

    if(alamat == "" || alamat == null) {
        document.getElementById("tampil").style = "display: none;";
    }else {
        document.getElementById("dt6").innerHTML = alamat;
        document.getElementById("tampil").style = "display: inline;";
    }

    let at =document.getElementById("alamat").value;
    let pj = at.length;
    if(pj <= 30) {
        document.getElementById("karakter").innerHTML = "Karakter < 30 Karakter";
        document.getElementById("tampil").style = "display: none;";
    }else {
        document.getElementById("karakter").innerHTML = "";
        document.getElementById("tampil").style = "display: inline;";
    } 

    document.getElementById("dt7").innerHTML = komen;

    validasi(nama, tempat, tanggal, email, h, pekerjaan,alamat);
}

document.getElementById("pekerjaan").onchange = function() {
    let pk = document.getElementById("pekerjaan").value;
    let z = "";


    if(pk == "kuliah") {
        z = "Kuliah Kagak Kerja";
    }else if(pk == "kerja") {
        z = "Minta Duit Ngab";
    }else if(pk == "nganggur") {
        z = "nganggur terus cari kerja sana";
    }
    document.getElementById("komen").value = z;
}

document.getElementById("reset").onclick = function() {
    document.getElementById("tampil").style = "display: none;";
    document.getElementById("nama").value = "";
    document.getElementById("tempat").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("email").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("pekerjaan").value = "";
    document.getElementById("komen").value = "";
}  

function validasi(nama, tempat, tanggal, email, h, pekerjaan, alamat) {
    if(nama == "" || nama == null) {
        alert("Nama Belum Diisi");
    }else if(tempat == "" || tempat == null) {
        alert("Tempat Belum Diisi");
    }else if(tanggal == "" || tanggal == null) {
        alert("Tanggal Lahir Belum Diisi");
    }else if(email == "" || email == null) {
        alert("Email Belum Diisi");        
    }else if(h == "" || h == null) {
        alert("Jenis Kelamin Belum Diisi");        
    }else if(pekerjaan == "" || pekerjaan == null) {
        alert("Pekerjaan Belum Diisi");        
    }else if(alamat == "" || alamat == null){
        alert("Alamat Belum Diisi");
    }
}