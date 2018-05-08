console.log('app.js is loading');
/* globals allFruits */


var position = document.getElementById('fruit-list');

// This loop is for testing to see if my array is working properly
for(var i = 0; i < allFruits.length; i++){
    console.log(allFruits[i].description);
    document.write('<img src="./images/' + allFruits[i].image + '" width = "100">');
    
    var li = allFruits[i].createLi();

    position.appendChild(li);
}

