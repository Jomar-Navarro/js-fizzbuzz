console.log('js-fizzbuzz');


const box = document.getElementById('container-box');
for(let i = 1; i <= 100; i++){
  box.innerHTML += `
    <div class="box">${i}</div>
  `
  console.log(box);
}
