let Messenger = require('./Messenger');

let list = ["givenng6", "givenng6.social"];

for(let i = 0; i < list.length; i++){
    let send = new Messenger(list[i] + "@gmail.com");
}





