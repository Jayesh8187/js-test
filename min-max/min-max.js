function findMin() {
    let a =  Number(document.getElementById('box1').value);
    let b =  Number(document.getElementById('box2').value);
        if (a < b) {
            document.getElementById('min').innerText = "min = " + a;
        } else if (b < a) {
            document.getElementById('min').innerText = "min = " + b;
        } else {
            document.getElementById('min').innerText = "something wrong";
        }
    }

function findMax() {
    let c =  Number(document.getElementById('box3').value);
    let d =  Number(document.getElementById('box4').value);
    let f =  Number(document.getElementById('box5').value);

        if (c > d && c > f) {
            document.getElementById('max').innerText = "max = " + c;
        } else if (d > c && d > f) {
            document.getElementById('max').innerText = "max = " + d;
        } else if (f > c && f > d) {
            document.getElementById('max').innerText = "max = " + f;
        } else {
            document.getElementById('max').innerText = "something wrong";
        }
    }