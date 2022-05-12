(async () => {
const json = await fetch('./slides.json')
const slides = await json.json()
const active = 0

const slider = document.getElementById('slider')
const slidesElement = document.querySelector('.slides')
const controlsElement = document.querySelector('.controls')

function fillData() {
  slides.forEach((slide, index) => {
    slidesElement.innerHTML += 
    `
    <div class="slide ${index === active ? 'active' : ''}">
      <img src="${slide.image}" alt="img">
      <div>
        <h2 class="title">${slide.title}</h2>
        <p class="description">${slide.description}</p>
      </div>
    </div>
    `
    controlsElement.innerHTML += 
    `
    <div class="btn ${index === active ? 'active' : ''}">
      <img src="${slide.button}" alt="btn">
      <p class="text">${slide.title}</p>
    </div>
    `
  })

  const controls = document.querySelectorAll('.btn')
  controls.forEach((control, index) => {
    control.addEventListener('click', () => {
      setActiveControl(index)
      setActiveSlide(index)
    })
  })
}
fillData()

function setActiveSlide(index) {
  const slides = document.querySelectorAll('.slide')

  slides.forEach((slide, index_curr) => {
    if (slide.classList.contains('active')) {
      // gsap.fromTo(slide, { xPercent: 0 }, { duration: 0.5, xPercent: direction }) 
      slide.classList.remove('active')
    }
  })
  slides[index].classList.add('active')
  // gsap.fromTo(slides[index], { xPercent: -direction }, { duration: 0.5, xPercent: 0 })
}

function setActiveControl(index) {
  const controls = document.querySelectorAll('.btn')
  controls.forEach(control => {
    if (control.classList.contains('active')) {
      control.classList.remove('active')
    }
  })
  controls[index].classList.add('active')
}

})()