// co websocket
var ws = new WebSocket('ws://localhost:8000/echo');

//ws.send({0: "add user", 1:"John"});

//A la connexion si ouverte
ws.onopen = function(){
    console.log('websocket : Welcome');

    /*ws.send(
        JSON.stringify({
            username:"Toto", text:'Yeoman'
        })
    );*/

    var username = document.getElementById('username');
    var text = document.getElementById('message');
    var btn = document.getElementById('btnSend');

    btn.addEventListener('click', function(){
        var name = username.value;
        console.log(name, text.value);

        ws.send(JSON.stringify({
            username: username.value,
            text: text.value
        }));

    });

    text.value = '';
};

//catch les erreurs sur la console
ws.onerror = function (event){
    console.log(event);

};

//réception des messages
ws.onmessage = function (event){
    var message = JSON.parse(event.data);
    console.log(message); 
    
    var messages = document.getElementById('messages');

    messages.innerHTML += '<p>'+ message.text +'</p>';
};
