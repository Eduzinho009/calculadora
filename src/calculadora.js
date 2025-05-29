function Somar() {
    var num = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var res = document.getElementById("Resp");

    if (!isNaN(num) && !isNaN(num2)) {
        res.textContent = num + num2;
    } else {
        res.textContent = "Digite números válidos!";
    }
}

function Menos(){
    var num3 = parseFloat(document.getElementById("n3").value)
    var num4 = parseFloat(document.getElementById("n4").value);
    var res2 = document.getElementById("Resp2");

    if (!isNaN(num3) && !isNaN(num4)) {
        res2.textContent = num3 - num4;
    } else {
        res2.textContent = "Digite números válidos!";
    }
}

function Vezes(){
    var num5 = parseFloat(document.getElementById("n5").value)
    var num6 = parseFloat(document.getElementById("n6").value);
    var res3 = document.getElementById("Resp3");

    if (!isNaN(num5) && !isNaN(num6)) {
        res3.textContent = num5 * num6;
    } else {
        res3.textContent = "Digite números válidos!";
    }
}

function Dividir() {
    var num7 = parseFloat(document.getElementById("n7").value);
    var num8 = parseFloat(document.getElementById("n8").value);
    var res4 = document.getElementById("Resp4");

    if (isNaN(num7) || isNaN(num8)) {
        res4.textContent = "Digite números válidos!";
    } else if (num8 === 0 || num7 === 0) {
        res4.textContent = "Não é possível dividir por 0";
    } else {
        res4.textContent = num7 / num8;
    }
}

function Media() {
    var num1 = parseFloat(document.getElementById("n9").value);
    var num2 = parseFloat(document.getElementById("n10").value);
    var num3 = parseFloat(document.getElementById("n11").value);
    var res4 = document.getElementById("Resp5");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        res4.textContent = "Digite números válidos!";
    } else {
        var media = (num1 + num2 + num3) / 3;
        res4.textContent = "Média: " + media.toFixed(2); // Exibe com 2 casas decimais
    }
}


document.getElementById("n1").addEventListener("input", Somar);
document.getElementById("n2").addEventListener("input", Somar);

document.getElementById("n3").addEventListener("input", Menos);
document.getElementById("n4").addEventListener("input", Menos);

document.getElementById("n5").addEventListener("input", Vezes);
document.getElementById("n6").addEventListener("input", Vezes);

document.getElementById("n7").addEventListener("input", Dividir);
document.getElementById("n8").addEventListener("input", Dividir);

document.getElementById("n9").addEventListener("input", Media);
document.getElementById("n10").addEventListener("input", Media);
document.getElementById("n11").addEventListener("input", Media);
