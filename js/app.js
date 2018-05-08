console.log('app.js is loading');

for(i=0; i < allFruits.length; i++){
    console.log(allFruits[i].name);
    document.write('<img src=\"./images/' + allFruits[i].image + '\" width = \"100\">');
}