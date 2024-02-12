let time = 3000,
    currentImageIndex = 0, 
    images = document.querySelectorAll("#slider img"),
    max = images.length,
    slideActive = true,
    btnBack = document.getElementById("btnBack"),
    btnNext = document.getElementById("btnNext"),
    textElement = document.querySelector('.automaticText'),    
    textsIntro = ['Software Engineer.', 'Developer', 'Designer.', 'Musician.'],
    counter = 0;

function start(){    
    calcularIdade();
    setInterval(()=>{
        if(counter==textsIntro.length) counter=0;
        automaticText(textElement, textsIntro[counter]);
        counter++;
    }, 2000);
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
        }, 60*i);
    });
}

function calcularIdade(){
    let diaNasc = 13;
    let mesNasc = 6;
    let anoNasc = 1999;

    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();    

    let idade = 0;
    
    idade = ano - anoNasc;
    if(mes - mesNasc < 0 )
    {
        idade = idade - 1;
    }
    else if(mes - mesNasc == 0){
        if(dia - diaNasc < 0){
            idade = idade -1;
        }
    }
    document.getElementById('idade').innerHTML = idade.toString();
}

window.addEventListener("load",start);