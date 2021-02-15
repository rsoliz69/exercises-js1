//I have a function defined below as:

function abracaFunction(yourFunc) {

    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
  
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }
  //This function does not need to be modified. Can you pass in a callback function which will mutate abracaArray such that it:
  //Upper cases all letters in the array
  // const callback = abracaArray.map((nuevaPalabra) => nuevaPalabra.toUpperCase());
  // const callback = abracaArray.map(function(nuevaPalabra) {
  //     return nuevaPalabra.toUpperCase();
  // });
  
  console.log(abracaFunction(newArray => newArray.map((nuevaPalabra) => nuevaPalabra.toUpperCase())));