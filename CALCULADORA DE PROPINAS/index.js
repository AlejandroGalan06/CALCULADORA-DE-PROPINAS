let cuenta = document.getElementById('cuenta');
let euros = 13;

cuenta.textContent = euros;

let propina = document.getElementById('propina');

let btn0 = document.getElementById('cero');
let btn5 = document.getElementById('cinco');
let btn10 = document.getElementById('diez');

btn0.addEventListener('click', (e) =>{
    let total = euros * 0;
    if (total < 10){
        total = total.toString().substring(0, 4);
    }else{
        total = total.toString().substring(0, 5);
    }
    propina.value = total;
})
btn5.addEventListener('click', (e) =>{
    let total = euros * 0.05;
    if (total < 10){
        total = total.toString().substring(0, 4);
    }else{
        total = total.toString().substring(0, 5);
    }
    propina.value = total;
})
btn10.addEventListener('click', (e) =>{
    let total = euros * 0.10;
    if (total < 10){
        total = total.toString().substring(0, 4);
    }else{
        total = total.toString().substring(0, 5);
    }
    propina.value = total;
})