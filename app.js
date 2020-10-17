var sliderVal = document.querySelector('.slider input');

var image1Div = document.querySelector('.wrapper .image-container .image-1');
var image2Div = document.querySelector('.wrapper .image-container .image-2');

//Load images into background 
image1Div.style.backgroundImage = "url('after_new.jpg')";
image2Div.style.backgroundImage = "url('before_new.jpg')";




sliderVal.addEventListener('input',function(){
    //console.log(sliderVal.value);
    image2Div.style.width = sliderVal.value + "%";
})

