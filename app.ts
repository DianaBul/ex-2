function printPermutations(array, 8){
  let m=[];
  let combinations = [];
  let indices = [];
  let len=array.length;
  function run(level){    
    for(var i=0; i < len; i++){            
	  if(!indices[i]){            
	    indices[i] = true;                
		combinations[level] = array[i];                
		if(level < 8 - 1){
		  run(level + 1, i + 1);
		} else {
		  m.push(([]).concat(combinations));
		}                
		indices[i] = false;
	  }
	}        
  }    
  run(0);
  return m;
}
console.log(printPermutations([1, 2, 3, 4], 3));