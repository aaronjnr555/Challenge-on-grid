let closeEl = document.querySelector('.close-icon');
let spanEl = document.querySelector('.span-tag');
let popupEl = document.querySelector('.popup-container')
let mainEl = document.querySelector('.span-icon')



function spantab(){
    spanEl.addEventListener('click',()=>{
        mainEl.classList.add('active');
        popupEl.classList.remove('active');
    })
    console.log('a click');
}

function closetab(){
    closeEl.addEventListener('click',()=>{
        mainEl.classList.remove('active');
        popupEl.classList.add('active');
    })
}
