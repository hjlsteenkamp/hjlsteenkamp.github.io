

let title = localStorage.getItem("TITLE");
document.getElementById('title').innerHTML = title;


let ingredientsH = localStorage.getItem("INGREDIENTSH");
document.getElementById('ingredientsH').innerHTML = ingredientsH;


let ingredients = localStorage.getItem("INGREDIENTS");
document.getElementById('ingredients').innerHTML = ingredients;

let methodH = localStorage.getItem("METHODH");
document.getElementById('methodH').innerHTML = methodH;

let method= localStorage.getItem("METHOD");
document.getElementById('method').innerHTML = method;

let image = localStorage.getItem("IMAGE");
document.getElementById('img').src = image;


//soup

let titleSoup = localStorage.getItem("TITLESOUP");
document.getElementById('titleSoup').innerHTML = titleSoup;


let ingredientsHSoup= localStorage.getItem("INGREDIENTSHSOUP");
document.getElementById('ingredientsHSoup').innerHTML = ingredientsHSoup;


let ingredientsSoup = localStorage.getItem("INGREDIENTSOUP");
document.getElementById('ingredientsSoup').innerHTML = ingredients;

let methodHSoup= localStorage.getItem("METHODHSOUP");
document.getElementById('methodHSoup').innerHTML = methodHSoup;

let methodSoup= localStorage.getItem("METHODSOUP");
document.getElementById('methodSoup').innerHTML = methodSoup;

let imageSoup = localStorage.getItem("IMAGESOUP");
document.getElementById('imgSoup').src = imageSoup;


//eggs

let titleEggs = localStorage.getItem("TITLEEGGS");
document.getElementById('titleEggs').innerHTML = titleEggs;


let ingredientsHEggs= localStorage.getItem("INGREDIENTSHEGGS");
document.getElementById('ingredientsHEggs').innerHTML = ingredientsHEggs;


let ingredientsEggs = localStorage.getItem("INGREDIENTSEGGS");
document.getElementById('ingredientsEggs').innerHTML = ingredientsEggs;

let methodHEggs= localStorage.getItem("METHODHEGGS");
document.getElementById('methodHEggs').innerHTML = methodHEggs;

let methodEggs= localStorage.getItem("METHODEGGS");
document.getElementById('methodEggs').innerHTML = methodEggs;

let imageEggs = localStorage.getItem("IMAGEEGGS");
document.getElementById('imgEggs').src = imageEggs;

if(titleEggs!=null & title ==null && titleSoup ==null){
    alert("There are one recipe saved!")
}
else if(title!=null && titleEggs!=null && titleSoup==null){
    alert("There are two recipes saved!")
}

else{
    alert("There are three recipes saved!")
}