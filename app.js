const slider = document.getElementById('slider');
const tooltip = document.getElementById('tool-tip');
const minValueLbl = document.getElementById('minValue');
const maxValueLbl = document.getElementById('maxValue');
const sliderContainerWidth = slider.offsetWidth;

const minValue = slider.min;
const maxValue = slider.max;
let currentValue = slider.value;


minValueLbl.innerText = `${minValue}`;
maxValueLbl.innerText = `${maxValue}`;
tooltip.innerText = `${currentValue}`;

$('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;
    
    $(e.target).css({
      'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
    tooltip.innerText = `${slider.value}`;
    currentValue = slider.value;
    //tooltip.style.left = `${(currentValue/100) * sliderContainerWidth}%`; 
    tooltip.style.marginLeft = `${(currentValue/100)*sliderContainerWidth-90}px`                                                                                    
  }).trigger('input');