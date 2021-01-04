/* ScrollReveal().reveal('.container', {delay: 600});
ScrollReveal().reveal('.container-card', {delay: 500}); */
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        });
    }
}); 

console.log('Brand Code - Facebook & Instagram')

/* function pyramid(numPisos){
    for(let i = 0; i < numPisos; i++){
        let piso = '';
        for(let j = 0; j < i + 1; j++){
            piso = piso + '#';
        }
        console.log(piso);
    }
}

pyramid(5);

for(let i = 1; i<=100; i++){
    if(i%3===0){
        console.log(`${i} Fizz`);
    }else if(i%5===0){
        console.log(`${i} Buzz`)
    }else{
        console.log(i);
    }
} */
/* var x = " # # # #";
var y = "# # # # ";
for (var i = 1; i < 9; i++) {
    if(i % 2 == 0){
        console.log(y);
    } else{
        console.log(x); 
    }
} */