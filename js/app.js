console.log('app.js is loading');
/* globals allFruits */


var position = document.getElementById('fruit-list');

// This loop is for testing to see if my array is working properly
for(var i = 0; i < allFruits.length; i++){
    
    var li = allFruits[i].createLi();

    position.appendChild(li);

    const imgEle = document.createElement('img');
    imgEle.width = 100;
    imgEle.src = './images/' + allFruits[i].image;

console.log(imgEle);

position.appendChild(imgEle);

}

