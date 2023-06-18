const swiper = new Swiper(".swiper", {

  loop: true,
  width: 240,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".go",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});

let btn = document.querySelector(".show");
let companies = document.querySelectorAll('.companies-item').length;
let item = 8; 

btn.onclick = function () {
  btnContent = document.getElementById("content")
  const arr = Array.from(document.querySelector('.companies-item').children);
 
  if(btnContent.textContent == "Скрыть"){
    let visItems = arr.slice(0, item)
    
    visItems.forEach(el => el.classList.remove('is-visible'));

      btnContent.textContent = "Показать все"
  }else{
    item+=3;
    let visItems = arr.slice(0, item)
    
    visItems.forEach(el => el.classList.add('is-visible'));
    btnContent.textContent = "Скрыть"
  }
}
