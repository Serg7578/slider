let slideIndex = 1
let butIndex = 1

let prev = document.querySelector('.previous')
let next = document.querySelector('.next')
let button = document.querySelectorAll('.button')
let slides = document.getElementsByClassName('item')
let list = document.querySelectorAll('.list')
prev.addEventListener('click', previousSlide)
next.addEventListener('click', nextSlide)

showSlides(slideIndex)

function nextSlide() {
   showSlides(slideIndex += 1)
   butNav(butIndex += 1)

}

function previousSlide() {
   showSlides(slideIndex -= 1)
   butNav(butIndex -= 1)
}

function showSlides(n) {
   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (let slide of slides) {
      slide.style.display = 'none'
   }
   slides[slideIndex - 1].style.display = 'flex'
}

function butNav(m) {
   if (m > button.length) {
      butIndex = 1
   }
   if (m < 1) {
      butIndex = button.length
   }
   for (let but of button) {
      but.classList.remove('one')
   }
   for (let menu of list) {
      menu.classList.remove('reallist')
   }
   button[butIndex - 1].classList.toggle('one')
   list[butIndex - 1].classList.toggle('reallist')
}

button.forEach((elem, index) => {
   elem.addEventListener('click', () => {
      slideIndex = index
      butIndex = index
      for (let slide of slides) {
         slide.style.display = 'none'
      }
      slides[slideIndex].style.display = 'flex'
      for (let but of button) {
         but.classList.remove('one')
      }
      for (let menu of list) {
         menu.classList.remove('reallist')
      }
      button[butIndex].classList.toggle('one')
      list[butIndex].classList.toggle('reallist')
   })
});

list.forEach((elem, index) => {
   elem.addEventListener('click', () => {
      slideIndex = index
      butIndex = index
      for (let slide of slides) {
         slide.style.display = 'none'
      }
      slides[slideIndex].style.display = 'flex'
      for (let menu of list) {
         menu.classList.remove('reallist')
      }
      for (let but of button) {
         but.classList.remove('one')
      }
      button[butIndex].classList.toggle('one')
      list[slideIndex].classList.toggle('reallist')
   })
});