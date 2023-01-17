function kodemember() {
    let a = "MB"
    let b = "001"
    let tanggal = new Date();
    let tglsekarang = tanggal.getFullYear();
     document.getElementById("kode").value = a + tglsekarang + b;
    let jenis = ["Laki - Laki", "Perempuan"];
    let jenisx = "";

    for (let i = 0; i<jenis.length; i++){
        jenisx += '<input class="form-check-input" type="radio" name="jns" id="' + jenis[i] + '" />' + jenis[i] + "</br>";
    }
    document.getElementById("jns").innerHTML = jenisx;
}

document.getElementById("signup").onload = function() {
    kodemember();
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

function pekerjaan() {
    let pekerjaan = document.getElementById("form").pekerjaan.value;
    if(pekerjaan == "kuliah") {
        document.getElementById("pekerjaanx").innerHTML = "Kuliah";
    }else if(pekerjaan == "kerja") {
        document.getElementById("pekerjaanx").innerHTML = "Kerja"
    }else if(pekerjaan == "nganggur") {
        document.getElementById("pekerjaanx").innerHTML = "Nganggur";
    }
}

document.getElementById("submit").onclick = function() {
    let kode = document.getElementById("kode").value;
    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tanggal = document.getElementById("tanggal").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;

    pekerjaan();

    let h;

    if(document.getElementById("Laki - Laki").checked == true) {
        h = "Laki - Laki";
    }else if (document.getElementById("Perempuan").checked == true) {
        h = "Perempuan";  
    }else{
        h = document.getElementById("jenisx").innerHTML = "-";
        h = alert("Operator Belum Diisi");
    };

    document.getElementById("kodex").innerHTML = kode;
    document.getElementById("namax").innerHTML = nama;
    document.getElementById("lahirx").innerHTML = tempat + "," + tanggal;
    document.getElementById("emailx").innerHTML = email;
    document.getElementById("jenisx").innerHTML = h;
    document.getElementById("alamatx").innerHTML = alamat;
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