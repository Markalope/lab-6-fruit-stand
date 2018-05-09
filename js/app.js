console.log('app.js is loading');
/* globals allFruits */


var position = document.getElementById('fruit-list');

// This loop is for testing to see if my array is working properly
for(var i = 0; i < allFruits.length; i++){
    
    var li = allFruits[i].createLi();

    const imgEle = document.createElement('img');
    imgEle.width = 250;
    imgEle.src = './images/' + allFruits[i].image;

    position.appendChild(imgEle);
    position.appendChild(li);
    

    //var colorBorder = document.querySelector('li');
    //colorBorder.style.borderBottomColor = allFruits[i].color;
    


}



