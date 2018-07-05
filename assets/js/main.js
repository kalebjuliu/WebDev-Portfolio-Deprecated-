const readmeWindow = document.querySelector('.window-readme');
const readmeBtn = document.querySelector('.readme');
const closeBtn = document.querySelector('#close-btn');

readmeBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
  readmeWindow.style.display = 'block';
}
function closeModal(){
  readmeWindow.style.display = 'none';
}



const systemWindow = document.querySelector('.window-system');
const systemBtn = document.querySelector('.system');
const closeBtn1 = document.querySelector('#close-btn-1');

systemBtn.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);

function openModal1(){
  systemWindow.style.display = 'block';
}
function closeModal1(){
  systemWindow.style.display = 'none';
}
