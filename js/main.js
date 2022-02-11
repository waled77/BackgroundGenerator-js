
var body = document.getElementById('gradient');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var viewCode = document.getElementById('view-code');

setBg = () => {
    color1.addEventListener('input', () => {
        body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
        viewCode.textContent = body.style.background ;
    })
    color2.addEventListener('input', () => {
        body.style.background = "linear-gradient(to right," + color2.value + "," + color2.value +")";
        viewCode.textContent = body.style.background ;
    })

}

setBg();

