let Messenger = require('./Messenger');

let list = [];

const pause = 7000;

// iterating through the list...
for(let i = 0; i < list.length; i++){
    setTimeout(() =>{
        new Messenger(list[i]);
    }, pause);
}


