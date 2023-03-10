var character = {
    name: 'Eleven',
    show: 'Stranger Things',
    portrayedBy: 'Millie Bobby Brown'
  }
  
  const quotes = [
      'I\'m going to my friends. I\'m going home.', 
      'Pure fuel! PURE FUEL! WOO!', 
      'See? Zoomer.', 
      'Bitchin.'
  ];

  var proto1 = Object.getPrototypeOf(character);
  var proto2 = Object.getPrototypeOf(proto1);
  
//   console.log(proto1);
//   console.log(proto2);

  var rndCnt = parseInt(Math.random()*10) % 4;
  

  character.prototype = function(){
    //console.log(rndCnt);
    let rndVal = quotes[rndCnt];
    //console.log(rndVal);
    return rndVal;

  }
  console.log(character.prototype());