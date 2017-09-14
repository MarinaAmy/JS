function maFonction(message, version){
    version = version || '1.0.0';
    console.log('Ma première fonction');
    console.log(message, version);
}

//fonction anonyme
(function(){
    console.log('waaaaaw');
})();

//fonction dans une variable
var funky = function(){
 console.log('Get funky');
};

funky();

//fonction de rappel 
var myButton = document.getElementById('btnHello');//Récupère balise button 

myButton.addEventListener('click',function(event){
    //console.log(event);
    var btn = event.target;
    btn.innerHTML = "off"; //btn off 
    alert('My Callback');
});

function myCallback(name, callbackFunc){
    console.log('Hi ' + name);
    callbackFunc(name);
    
}

myCallback('Chuck Norris', function(){
    console.log('hey '+ name) ;
});

