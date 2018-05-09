console.log('app.js is loading');
/* globals allFruits */


var position = document.getElementById('fruit-list');
var headline = document.getElementById('fruit-name');

// This loop is for testing to see if my array is working properly
for(var i = 0; i < allFruits.length; i++){
    
    var li = allFruits[i].createLi();
    var head = allFruits[i].name;

    const imgEle = document.createElement('img');
    imgEle.width = 100;
    imgEle.src = './images/' + allFruits[i].image;

    position.appendChild(imgEle);
    

    
    position.appendChild(li);

    var colorBorder = document.querySelector('li');
    colorBorder.style.borderBottomColor = allFruits[i].color;
    


}



