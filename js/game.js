const tlacitko = document.getElementById('game');

var hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    cube.src = 'img/kostka' + hod + '.png';
}

document.getElementById('game').addEventListener('click',
    function () {
        if (!timer) {
            timer = setInterval(animace, 50);
            tlacitko.innerText = 'Stuj';
        } else {
            clearInterval(timer);
            timer=false;
            tlacitko.innerText = ('Hoď znovu');
            statistika();
            console.log(hody);
        }
    
    }
);


function suma(cisla) {
    var sum = 0;
    cisla.forEach(function (value, index) {
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}
function statistika() {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    document.getElementById('cube').src = 'img/kostka' + h + '.png';

    document.getElementById('result').innerHTML = '<h2>Výsledek</h2>';
    document.getElementById('result').innerHTML = '<table class="table table-dark table-striped"><thead><tr><th>Hod: ' + h + '</th></tr></thead></table>';
    document.getElementById('result').innerHTML +=
        '<table class="table table-dark table-striped"><thead><tr><th>Počet hodů: ' + hody.length + '</th></tr></thead></table>';
    document.getElementById('result').innerHTML +=
        '<table class="table table-dark table-striped"><thead><tr><th>Součet hodů: ' + suma(hody) + '</th></tr></thead></table>';
    document.getElementById('result').innerHTML +=
        '<table class="table table-dark table-striped"><thead><tr><th>Průměr hodů: ' + average(suma(hody), hody.length) + '</th></tr></thead></table>';
    document.getElementById('result').innerHTML +=
        '<table class="table table-dark table-striped"><thead><tr><th>Nejvyšší hod: ' + maximum(hody) + '</th></tr></thead></table>';
    document.getElementById('result').innerHTML +=
        '<table class="table table-dark table-striped"><thead><tr><th>Nejnižší hod: ' + minimum(hody) + '</th></tr></thead></table>';
    return h;
}