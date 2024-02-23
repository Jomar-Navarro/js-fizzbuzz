console.log('js-fizzbuzz');


const box = document.getElementById('container-box');
for(let i = 1; i <= 100; i++){
  if(!(i % 3) && !(i % 5)){
    box.innerHTML += `<div class="box red">fizzbuzz</div>`
  }else if (!(i % 3)){
    box.innerHTML += `<div class="box yellow">fizz</div>`
  }else if (!(i % 5)){
    box.innerHTML += `<div class="box green">buzz</div>`
  }else{
    box.innerHTML += `<div class="box">${i}</div>`
  }


  console.log(box);
}

