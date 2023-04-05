let button = document.getElementById('Btn');
let image = document.getElementById('img').src="https://cdn-prd-02.pnp.co.za/media/recipes/pickled-fish.jpg";

let title = document.getElementById('title').innerHTML ="Traditional pickled fish PNP recipe";
console.log(title);

   
let ingredientsH = document.getElementById('ingredientsH').innerHTML ="Ingredients";



let ingredients = document.getElementById('ingredients').innerHTML =
"1 batch deep-fried fish or pan-fried fish 5 cups (1.25L) water <br>"+
"4 cups (1L) white spirit vinegar <br>"+
"3-4 bay leaves <br>"+
"3 Tbsp (45ml) curry powder <br>" + 
"1 Tbsp (15ml) fish masala spice mix <br>" + 
"2 Tbsp (30ml) ground turmeric <br>" + 
"1 Tbsp (15ml) black peppercorns <br>" +
"1 Tbsp (15ml) coriander seeds <br>" +
"2 cups (500ml) brown sugar <br>" +
"1 jar (290g) apricot jam <br>" +
"2 Tbsp (30ml) cornflour <br>" +
"6-8 onions, sliced into rings <br>" +
"For serving: <br>" +
"Garlic naan <br>" +
"Hot cross buns <br>" +
"Rotis <br> Salad";



let methodH = document.getElementById('methodH').innerHTML ="Method";

let method = document.getElementById('method').innerHTML = "Arrange cooked fish in a deep baking tray or large bowl with a lid.<br> Combine water, vinegar, bay leaves and all spices in a large pot and boil the mixture for about 8 minutes. <br>"+ 
"Add sugar and jam and simmer on high for 10-12 minutes. <br> Combine cornflour and ¼ cup (60ml) pickling sauce in a separate bowl until smooth.<br>" + 
"Whisk mixture into pot and simmer for 5 minutes, or until sauce has thickened slightly. Taste sauce and adjust seasoning as desired. <br>" + 
"Add onion rings and simmer for 5 minutes.<br> Pour over fish and cool completely. Cover and refrigerate (do not cover with a lid).<br>" +
"Pickle for at least 48 hours before serving, or store for up to 3 weeks. <br> Serve with garlic naan, hot cross buns, rotis or a side salad.";


button.addEventListener('click', (e) =>{
    window.open("savedRecipes.html", null)
    localStorage.setItem("TITLE", title);

    localStorage.setItem("INGREDIENTSH", ingredientsH);

    localStorage.setItem("INGREDIENTS", ingredients);
    
    localStorage.setItem("METHODH", methodH);
    localStorage.setItem("METHOD", method);
    
    localStorage.setItem("IMAGE", image);

})


//soup
let buttonSoup = document.getElementById('BtnSoup');
let titleSoup = document.getElementById('titleSoup').innerHTML ="Minestrone soup PNP recipe";
let imageSoup = document.getElementById('imgSoup').src= "https://s3-eu-west-1.amazonaws.com/pnp-hybris-media-prod/media/recipes/Minestrone-soup.jpg";
   
let ingredientsHSoup = document.getElementById('ingredientsHSoup').innerHTML ="Ingredients";



let ingredientsSoup = document.getElementById('ingredientsSoup').innerHTML =
"2 Tbsp (30ml) olive oil <br> 2 onions, roughly chopped <br> 4 sticks celery, sliced <br> 6 carrots, sliced <br>" +
"4 cloves garlic, grated <br> 8 sprigs fresh thyme <br> 1 large packet (100g) tomato paste <br> 5-6 cups (1.25-1.5L) vegetable or beef stock <br>"+
"1 can (400g) chopped and peeled tomatoes <br>Salt and milled pepper<br>1 cup (150g) pasta (like alphabet pasta or macaroni)<br>"+
"1 packet (300g) green beans, sliced into 2cm pieces <br> 6 baby marrows, roughly sliced <br> ½ packet (150g) Swiss chard or kale, shredded <br>" +
"1 can (400g) cannellini beans, drained and rinsed <br> Grated parmesan, for serving <br> Buttered sourdough bread or crusty rolls, for serving";


let methodHSoup = document.getElementById('methodHSoup').innerHTML ="Method";

let methodSoup = document.getElementById('methodSoup').innerHTML = " Heat oil in a pot and brown onions, celery and carrots. <br>" +
"Add garlic and thyme and fry for a minute. <br> Add tomato paste and cook until sticky.<br> Pour in stock and tomatoes. <br>" +
"Season and simmer for 10-15 minutes. <br> Add pasta, green beans and marrows, and cook for 8 minutes.<br>" +
"Stir in Swiss chard or kale and cannellini beans and heat through.<br> Season <br> Serve soup topped with parmesan and with sourdough bread or rolls on the side.";


buttonSoup.addEventListener('click', (e) =>{
    window.open("savedRecipes.html", null)

    localStorage.setItem("TITLESOUP", titleSoup);
    
    localStorage.setItem("INGREDIENTSHSOUP", ingredientsHSoup);

    localStorage.setItem("INGREDIENTSSOUP", ingredientsSoup);
    
    localStorage.setItem("METHODHSOUP", methodHSoup);
  
    localStorage.setItem("METHODSOUP", methodSoup);
    
    localStorage.setItem("IMAGESOUP", imageSoup);

})


//eggs benedict
let buttonEggs = document.getElementById('BtnEggs');
let titleEggs = document.getElementById('titleEggs').innerHTML ="Eggs Benedict PNP recipe";
let imageEggs = document.getElementById('imgEggs').src= "https://s3-eu-west-1.amazonaws.com/pnp-hybris-media-prod/media/recipes/Mothers-Day-Recipe-v1_0001s_0002_Eggs-benedict.jpg";
   
let ingredientsHEggs = document.getElementById('ingredientsHEggs').innerHTML ="Ingredients";



let ingredientsEggs = document.getElementById('ingredientsEggs').innerHTML =" 2 PnP extra-large free-range-egg yolks <br>" +
"1-2 tsp (5-10ml) PnP white grape vinegar <br> Salt and milled pepper <br> ½ cup (125ml) butter, melted <br>" +
"Lemon juice, to taste <br> ½-1 Tbsp (8-15ml) water <br> 2 English muffins, halved and toasted <br> 1 packet (200g) PnP streaky bacon, cooked until crisp <br>" +
"4 PnP extra-large free-range eggs, poached <br> Handful chives, chopped, for serving."

let methodHEggs = document.getElementById('methodHEggs').innerHTML ="Method";

let methodEggs = document.getElementById('methodEggs').innerHTML = " Place yolks and vinegar in a glass bowl over a saucepan of barely simmering water. <br>" +
"Season. <br> Whisk for 1 minute. Add melted butter in a steady stream until mixture thickens and all butter is incorporated. <br>" +
"Add lemon juice, then add water to make a slightly runny sauce. <br> Top English muffins with bacon and poached eggs. <br>" +
"Serve dolloped with hollandaise sauce and sprinkled with chives.";

buttonEggs.addEventListener('click', (e) =>{
    window.open("savedRecipes.html", null)

    localStorage.setItem("TITLEEGGS", titleEggs);
    
    localStorage.setItem("INGREDIENTSHEGGS", ingredientsHEggs);

    localStorage.setItem("INGREDIENTSEGGS", ingredientsEggs);
    
    localStorage.setItem("METHODHEGGS", methodHEggs);
  
    localStorage.setItem("METHODEGGS", methodEggs);
    
    localStorage.setItem("IMAGEEGGS", imageEggs);

})

//saved recipes btn 
let savedRecipesBtn = document.getElementById('savedRecipesBtn')

savedRecipesBtn.addEventListener('click', () =>{
    window.open("savedRecipes.html", null)
})
