/*__________________Problem One__________________*/

//feetToMile

function feetToMile(feet){
    var mile = feet/5280;   //1 mile = 5280 feets;
    return mile + " miles in this feet";
}
var convert = feetToMile(42240)
console.log(convert);
/*___________________________________________ */


/*__________________Problem two__________________*/

//woodCalculator
function woodCalculator(chair,table,bed){
    var totalChair = chair * 1; //1 qubicfeet wood is needed for a chair.
    var totleTable = table * 3; //3 qubicfeet wood is needed for a table.
    var totalBed   = bed * 5;   //5 qubicfeet wood is needed for a bed.
    
    var result = totalChair + totleTable + totalBed
    return result + " qubicfeet wood is needed ";
}
var total = woodCalculator(15, 5, 4);
console.log(total)
/*_____________________________________________*/


/*__________________Problem Three__________________*/

//brickCalculator
function brickCalculator(building){
    var brick = 1000; // 1000 bricks are needed every feet.
    var feet = 0;
    if(building >= 1 && building <= 10){
        feet = 15;
        var calculate = building * feet * brick;
        return calculate + " bricks is needed ";
    }
    else if(building >= 11 && building <= 20){
        feet = 12;
        var calculate =  building * feet * brick;
        return calculate + " bricks is needed ";
    }
    else if(building > 20){
        feet = 10;
        var calculate =  building * feet * brick;
        return calculate + " bricks is needed ";
    }
}
var floor = brickCalculator(10);
console.log(floor);
/*_____________________________________________*/


/*__________________Problem Four__________________*/

//tinyFriend
function tinyFriend(name){
    var prevName = name[0];  //array's first element 0;
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length < prevName.length){
            prevName = currentName;
        }
	}
	return prevName + "'s length is smallest";
}
var arrayName = tinyFriend(['Rasel','Rayhan','Alomgir','Raju']);
console.log(arrayName);
/*_____________________________________________*/