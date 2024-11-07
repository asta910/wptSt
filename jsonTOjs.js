var jsonObject = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit... doloremque"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil..."
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis..."
    }
];

console.log('connected');
let jsArray = JSON.stringify(jsonObject);
let js = JSON.parse(jsArray);
function f1(){
    for(let i =0; i < js.length; i++){
        console.log(js[i]);
    }  
}
