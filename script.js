const btnRandom = document.getElementById('button-random'); 

let myArray = ['bayram barbu',
'samir s\'amuse',
'thomas têtu',
'melina marrante',
'fabrice fabulous',
'loic l\'ancien',
'gary gourmant',
'loic le jeune',
'alexandre amusant',
'quentin qui est la',
'lydie locasse',
'nisrine nouvelle',
'maxime maboule',
'remi raleur',
'jérôme joyeux',
'nicolas nabot',
'guillaume gogol',
'samra survivante', ];

btnRandom.addEventListener('click', () => {     
  RandArray(myArray)
 })  

function RandArray(array){     
    let rand = Math.random()*array.length | 0;     
    let rValue = array[rand];    
    console.log(rValue);     
    btnRandom.innerHTML = rValue; 
  
    setTimeout(reinitialise, 3000);
  
  }

  function reinitialise () {
    btnRandom.innerText="Random Apprenant"
  }





      
