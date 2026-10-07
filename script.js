document.getElementById('small-image').addEventListener('click', function() {
    let currentSrc = this.src;
    if (currentSrc.includes('apex-legends-listing-thumb-01-ps4-en-29oct20.png')) {
        this.src = 'capsule_616x353.png'; 
    } else {
        this.src = 'apex-legends-listing-thumb-01-ps4-en-29oct20.png'; 
    }
});


function showFirstSlide() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        if (i === 0) {
            slides[i].style.display = "block";
            slides[i].querySelector("p").style.display = "block";
        } else {
            slides[i].style.display = "none";
            slides[i].querySelector("p").style.display = "none";
        }
    }
}

showFirstSlide();


let currentSlide = 0;

let slideInterval = setInterval(nextSlideWithText, 3000); 


function nextSlideWithText() {
    let slides = document.getElementsByClassName("slide");
    
    slides[currentSlide].style.display = "none";

    let currentText = slides[currentSlide].querySelector("p");
    currentText.style.display = "none";
    
    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.display = "block";
  
    let nextText = slides[currentSlide].querySelector("p");
    nextText.style.display = "block";
}


function limitCheckboxSelection() {
    let checkboxes = document.querySelectorAll('input[name="igrica"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            if (this.checked) {
                checkboxes.forEach(function(otherCheckbox) {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
}


limitCheckboxSelection();

document.getElementById('turnir-forma').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let igricaChecked = document.querySelector('input[name="igrica"]:checked');

    if (username === '' || password === '' || igricaChecked === null) {
        document.getElementById('error-message').textContent = 'Niste uneli sve potrebne podatke!';
    } else {
      
        document.getElementById('error-message').textContent = '';

        let selectedGame = igricaChecked.value;
        alert("Uspešno ste se prijavili za turnir u igrici: " + selectedGame + "!");
 
        this.submit();
    }
});
