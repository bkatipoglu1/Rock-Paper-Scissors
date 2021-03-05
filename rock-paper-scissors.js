function init() {

    var secenekler = ["url(tas.jpg)", "url(kagit.jpg)", "url(makas.jpg)"];

    function uret() {
        var random = Math.round(Math.random() * 2);
        return random;
    }

    var a, b;

    function yerlestir() {
        a = secenekler[uret()];
        b = secenekler[uret()];

        document.getElementById("player1").style.backgroundImage = a;
        document.getElementById("player2").style.backgroundImage = b;
    }

    function sonuc() {
        var x = Number(document.getElementById("skor1").innerHTML);
        var y = Number(document.getElementById("skor2").innerHTML);

        if (a == "url(tas.jpg)" && b == "url(makas.jpg)") {

            document.getElementById("skor1").innerHTML = x + 1;

        } else if (a == "url(tas.jpg)" && b == "url(kagit.jpg)") {

            document.getElementById("skor2").innerHTML = y + 1;

        } else if (a == "url(kagit.jpg)" && b == "url(tas.jpg)") {

            document.getElementById("skor1").innerHTML = x + 1;

        } else if (a == "url(kagit.jpg)" && b == "url(makas.jpg)") {

            document.getElementById("skor2").innerHTML = y + 1;

        } else if (a == "url(makas.jpg)" && b == "url(tas.jpg)") {

            document.getElementById("skor2").innerHTML = y + 1;

        } else if (a == "url(makas.jpg)" && b == "url(kagit.jpg)") {

            document.getElementById("skor1").innerHTML = x + 1;

        }

    }

    function kontrolEt() {
        var x = Number(document.getElementById("skor1").innerHTML);
        var y = Number(document.getElementById("skor2").innerHTML);

        if (x == 3) {
            document.getElementById("sonuc").innerHTML = "PLAYER 1 KAZANDI !";
        }

        if (y == 3) {
            document.getElementById("sonuc").innerHTML = "PLAYER 2 KAZANDI !";

        }
    }

    function boya() {
        var x = Number(document.getElementById("skor1").innerHTML);
        var y = Number(document.getElementById("skor2").innerHTML);

        if (x == y) {
            document.getElementById("skor1").style.backgroundColor = "grey";
            document.getElementById("skor2").style.backgroundColor = "grey";
        } else if (x > y) {
            document.getElementById("skor1").style.backgroundColor = "lightgreen";
            document.getElementById("skor2").style.backgroundColor = "red";
        } else if (x < y) {
            document.getElementById("skor1").style.backgroundColor = "red";
            document.getElementById("skor2").style.backgroundColor = "lightgreen";
        }
    }

    document.getElementById("btn").addEventListener("click", function() {
        uret();
        yerlestir();
        sonuc();
        kontrolEt();
        boya();
    });
}