cat1 = {
  name: 'Joe',
  favFood: 'Wafer Thin Ham',
  image: 'http://i.imgur.com/Kk0TDaV.jpg'
}


// var createSection = function(){
//   var section = document.createElement('section')
// }

var createUL = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat;
}

var createNameLI = function(text){
  var nameli = document.createElement('li');
  nameli.innerText = 'Name: ' + text;
  return nameli;
}

var createfavFoodLI = function(text){
  var foodli = document.createElement('li');
  foodli.innerText = 'Favourite Food: ' + text;
  return foodli;
}

var createImageLI = function(imageLink){
  var imageli = document.createElement('li');
  imageli.innerHTML = '<img width="500" src=' + imageLink + '>';
  return imageli;
}


var addCat = function(cat){
  var cats = document.querySelector('#cats');

  var UL = createUL();

  var nameLI = createNameLI(cat.name);
  var favFoodLI = createfavFoodLI(cat.favFood);
  var imageLI = createImageLI(cat.image);

  UL.appendChild(nameLI);
  UL.appendChild(favFoodLI);
  UL.appendChild(imageLI);

  cats.appendChild(UL);
}

app = function(){

 addCat(cat1);

}




window.onload = app;