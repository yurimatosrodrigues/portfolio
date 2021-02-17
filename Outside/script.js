let time = 3000, 
    currentImageIndex = 0, 
    images = document
                .querySelectorAll("#slider img")
    max = images.length,
    slideActive = true;

function start(){    
    setInterval(() =>{
        if (slideActive) nextImage()
    }, time)
}

function stopSlide(){
    slideActive = false;
}

function restartSlide(){
    slideActive = true;    
}

function nextImage(){    
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0    

    images[currentImageIndex]
        .classList.add("selected")    
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