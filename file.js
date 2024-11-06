const fs = require('fs');
fs.writeFile('one.txt','hello brotherr',(e) => {
    if(e){
        console.log(e);
        return;
    }
});
fs.appendFile('one.txt',' so jaa bhai',(e) => {
    if(e){
        console.log(e);
        return;
    }
});
fs.readFile('one.txt','utf8',(e,data) => {
    if(e){
        console.log(e);
        return;
    }
    console.log('file content' , data);
});
