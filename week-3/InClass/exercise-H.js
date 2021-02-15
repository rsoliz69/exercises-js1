const names = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];


function isPresent(name2){
    let name = names.find(element => element.toUpperCase() === name2.toUpperCase())
    if (name === undefined){
        console.log("Haven't found me :(");
    } else {
        console.log("Found me!");        
    }
}

//function isPresent2(name2){
//    let name = names.find(element => element.toUpperCase() === name2.toUpperCase())
//    console.log(name === undefined ? "Haven't found me :(" : "Found me!");
//}

function isPresent2(name2){
    console.log(names.find(element => element.toUpperCase() === name2.toUpperCase()) === undefined ? "Haven't found me :(" : "Found me!");
}

isPresent("Ricardo");
isPresent("ricardo");
isPresent("Lesley");
isPresent("lesley");
isPresent("Rukmini");
isPresent2("ricardo");
isPresent2("Lesley");