function randomSecim() {
    const secenek = ["taş", "kağıt", "makas"];
    const rastgeleSec = Math.floor(Math.random() * 3);
    return secenek[rastgeleSec];
}

function emir() {
    let kullanici = 0;
    let bot = 0;

    while (kullanici < 3 && bot < 3) {
        const kullaniciSecim = prompt("taş, kağıt veya makas seçiniz.");
        const botSecim = randomSecim();

        if (kullaniciSecim === botSecim) {
            alert("berabere")
        } else if
            ((kullaniciSecim == "taş" && botSecim == "kağıt") ||
            (kullaniciSecim == "kağıt" && botSecim == "makas") ||
            (kullaniciSecim == "makas" && botSecim == "taş")) {
            alert("kazandınız")
            kullanici++
        } else {
            alert("kaybettiniz")
            bot++
        }
    }

    if (kullanici === 3) {
        alert("Kazandınız. Tebrikler.");
    } else if (bot === 3) {
        alert("Kaybettiniz. Bot kazandı.");
    }
}
emir()

