let time = 3000,
    currentImageIndex = 0, 
    images = document.querySelectorAll("#slider img"),
    max = images.length,
    slideActive = true,
    btnBack = document.getElementById("btnBack"),
    btnNext = document.getElementById("btnNext")

function start(){  
    console.log(max);
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


window.addEventListener("load",start)