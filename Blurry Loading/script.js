const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 100

let int = setInterval(blurring, 30)

function blurring() {
  load--

  if (load < 1) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 0, 1)
  bg.style.filter = `blur(${scale(load, 0, 100, 1, 30)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
