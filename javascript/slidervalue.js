/* Custom slide update value */

/* Variable declaration */
var rangeslider = document.querySelector(".range-slider__range"); // select the slider input
var output = document.querySelector(".rangeSliderValue"); // select the output value
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
}