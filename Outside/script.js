let time = 3000,
    currentImageIndex = 0, 
    images = document.querySelectorAll("#slider img"),
    max = images.length,
    slideActive = true,
    btnBack = document.getElementById("btnBack"),
    btnNext = document.getElementById("btnNext"),
    elementText=document.querySelector('.automaticText'),
    countWritedText = 0;

function start(){    
    text=document.querySelector('.automaticText').textContent;
    document.querySelector('.automaticText').textContent='';
    setInterval(() =>{
        if (slideActive) nextImage()
    }, time)

    images.forEach(image => image.addEventListener("mouseover", function stopSlide(){ slideActive = false }, false));
    images.forEach(image => image.addEventListener("mouseout", function restartSlide(){ slideActive = true }, false));

    btnNext.addEventListener("click", nextImage, false);
    btnBack.addEventListener("click", backImage, false);    
}

function nextImage(){         
    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if (currentImageIndex >= max)
        currentImageIndex = 0    ;

    images[currentImageIndex]
        .classList.add("selected");
}

function backImage(){
    images[currentImageIndex]
    .classList.remove("selected")
    
    console.log(currentImageIndex, max)
    if (currentImageIndex <= 0)
        currentImageIndex = max - 1
    else
        currentImageIndex = currentImageIndex - 1       

    images[currentImageIndex]
        .classList.add("selected")
}

function automaticText(element, text){    
    const textArray = text.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(function(){
            element.innerHTML += letter;
        }, 60 * i);
    });    
}

var observable = new IntersectionObserver(
    function(entries){
        if(entries[0].isIntersecting === true && countWritedText==0){
            automaticText(elementText, text);
            countWritedText +=1;
        }
    }, 
    {threshold: [0.50]}
);

window.addEventListener("load",start);
observable.observe(document.getElementById('profile'));