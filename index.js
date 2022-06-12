const bod = document.querySelector('body');
const add = document.querySelector('.inp');
const todo = document.querySelector('ul');

window.onload = function () {
  add.focus();
};

bod.addEventListener("click", (e)=> {               /*****CAPTURING*****/
  if (e.target.classList.contains ('bt-add')) {     /*EKLE BUTONU*/
    console.log("ADD button clicked");
    if (!add.value) {                               /*BOŞ GİRİŞ KONTROL*/
      alert('Empty todos');
    } 
    else { 
      todo.innerHTML += `<li><i class='fa fa-times'></i><p>${add.value}</p><button class='bt-del btn'>DEL</button></li>`;
      add.value = '';
    }
  }
  if (e.target.classList.contains ('bt-del')){      /*SİL BUTONU*/ 
    console.log('DEL button clicked');
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains ('fa-check')) {   /*TİK FONKSİYONU*/
    console.log("TICK button clicked");
    e.target.classList.remove('fa-check');
    e.target.classList.add('fa-times');
    e.target.nextElementSibling.classList.remove('cizik');
    return;
  }
  if (e.target.classList.contains ('fa-times')) {   /*TİK FONKSİYONU GERİ AL*/
    console.log("TICK-2 button clicked");
    e.target.classList.remove('fa-times');
    e.target.classList.add('fa-check');
    e.target.nextElementSibling.classList.add('cizik');
    return;
    }
});

bod.addEventListener('keydown', (e) => {        /*KLAVYE GİRİŞİ*/
  if (e.key === 'Enter') {
    if (!add.value) {                               /*BOŞ GİRİŞ KONTROL*/
      alert('Empty todos');
    } 
    else { 
      todo.innerHTML += `<li><i class='fa fa-times'></i><p>${add.value}</p><button class='bt-del btn'>DEL</button></li>`;
      add.value = '';
    }
  }
});