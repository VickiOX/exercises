
// Random number

//1.Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100

const minNumber = 0;
const maxNumber =100;

function logRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (maxNumber-minNumber)) + minNumber; 
    console.log(randomNumber); 
  }
  
  logRandomNumber();

  

//2.Opdater din funktion så den skriver det tilfædige tal til HTML.
//Credit inspiration from HTML and JS https://www.youtube.com/watch?v=2cQUkYU8AmI&t=135s

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const h1 = document.querySelector('.hop'); 

let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; 

btn.addEventListener('click', function () {
    let usertext = parseInt(document.getElementById('usertext').value); 
    if (usertext === randomNumber) {
        text.innerHTML = `Du gættede rigtigt! Dit tal var ${randomNumber}.`;
        h1.classList.add("hop");
        h1.classList.remove("hide");
    } else if (usertext < randomNumber) {
        text.innerHTML = 'Du har gættet for lavt!';
    } else { 
        text.innerHTML = 'Du har gættet for højt!';
    }
});



