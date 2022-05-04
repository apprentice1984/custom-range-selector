const slider = document.getElementById('myRange')
const count = document.getElementById('count')

count.innerHTML = slider.value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  count.innerHTML = this.value
  count.style.left = this.value + '%'
  count.style.transform = `translate(-${scale(this.value, 0, 100, 25, 75)}%)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// scale(this.value, 0, 100, 25,  75)
