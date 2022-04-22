let Messenger = require('./Messenger');

let list = [];


for(let i = 129; i < list.length; i++){
    setTimeout(() =>{
        new Messenger(list[i]);
    }, 20000)
}


