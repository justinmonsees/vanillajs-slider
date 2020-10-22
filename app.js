var sliderVal = document.querySelector('.slider input');

var image1Div = document.querySelector('.wrapper .image-container .image-1');
var image2Div = document.querySelector('.wrapper .image-container .image-2');

//Load images into background 
image1Div.style.backgroundImage = "url('after_new.jpg')";
image2Div.style.backgroundImage = "url('before_new.jpg')";

var wrapperDiv = document.querySelector('.wrapper');
var image1 = new Image(); 
var image2 = new Image(); 
image1.src = 'before_new.jpg';
console.log(image1.height + "X" + image1.width);
console.log("new width: " + wrapperDiv.clientWidth);
resizeWrapper();

function resizeWrapper(){

    var maxWidth = wrapperDiv.clientWidth;
    var scaleFactor = image1.height / image1.width; 
    var newHeight = scaleFactor * maxWidth; 
    wrapperDiv.style.height = newHeight + 'px';
    console.log(newHeight + "X" + maxWidth);
}


new ResizeObserver(resizeWrapper).observe(wrapperDiv);


sliderVal.addEventListener('input',function(){
    //console.log(sliderVal.value);
    image2Div.style.width = sliderVal.value + "%";
})

