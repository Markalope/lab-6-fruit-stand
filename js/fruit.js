console.log('fruit.js is loading');
/* exported apple strawberry pomegranate dragonfruit orange peach banana lemon yellowApple */

var allFruits = [
    
    //red fruits
    {
        name: 'Red Apple',
        price: '$1.99/lb',
        description: 'Keeps doctor away.',
        color: 'red',
        image: 'apple.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },
    
    {
        name: 'Strawberry',
        price: '$.99/lb',
        description: 'Sweet and Seedy.',
        color: 'red',
        image: 'strawberry.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },

    {
        name: 'Pomegranate',
        price: '$2.29',
        description: 'Sweet. Seed-filled. Biggish.',
        color: 'red',
        image: 'pomegranate.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },

    {
        name: 'Dragonfruit',
        price: '$3.99',
        description: 'OK it\s more pink than red. Sue me.',
        color: 'red',
        image: 'dragonfruit.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },

    //orange fruits
    {
        name: 'Orange',
        price: '$2.00/lb',
        description: 'They\re not just for breakfast anymore.',
        color: 'orange',
        image: 'orange.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },
    
    {
        name: 'Peach',
        price: '$2.79/lb',
        description: 'Dude. Seriously. Peaches are not orange.',
        color: 'orange',
        image: 'peach.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },

    //yellow fruits
    {
        name: 'Banana',
        price: '$1.79/lb',
        description: 'Can you tell I have no idea what fruit costs?',
        color: 'yellow',
        image: 'banana.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    },

    {
        name: 'Lemon',
        price: '$.79/lb',
        description: 'Used for Lemonade and Iced Tea. Hey, let\s mix these up!',
        color: 'yellow',
        image: 'lemon.jpg',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
            
        }
    },

    {
        name: 'Yellow Apple',
        price: '$2.79/lb',
        description: 'These are for baking mostly, right?',
        color: 'yellow',
        image: 'yellowapple.png',
        createLi: function() {
            const li = document.createElement('li');
            li.style.borderBottomColor = this.color;
            var newText = document.createTextNode (this.name + ': ' + this.description + ' On sale for  ' + this.price);
            li.appendChild(newText);
            return li;
        }
    }

];

console.log(allFruits[1].name);
console.log(allFruits[1]);
