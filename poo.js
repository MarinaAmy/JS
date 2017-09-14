var Person = {
    name: 'John',
    weight: 65,
    age: 25,
    marcher: function(){
        console.log(this.name + ' Marche..');
        var that = this; //that ou self 
        var funk = function(){
            console.log('Age', that.age);
        }

        funk();
    },

    manger: function(preparePlat){
        //preparePlat.call(this);
        //preparePlat.apply(this);//pareil que call
        console.log('Je mange..')
    }

}

//console.log(Person.name);
//Person.marcher();
Person.age = 16;
Person.manger(function(){
    if(this.age <=18 ){
        console.log('Je mange bien');
    }
    else {
        console.log('Où est ma bière ?');
    }
    console.log(this);
});