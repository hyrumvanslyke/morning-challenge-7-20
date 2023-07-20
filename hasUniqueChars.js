// Write your code below
function hasUniqueChars(w) {
    let unique = new Set([])// making a variable creating a new instance of the set class(whatever you put as a argument only holds a set of completly unique items)
    for (let i = 0; i < w.length; i++){
      unique.add(w[i])//(need to use .add instead of . push with set)
    }
    return unique.size === w.length// .size is the same as .length checking if the set is smaller than the original if it is it returns true else returns false
  }
  console.log(hasUniqueChars('bobby'))

  function hasUniqueChars2(w){
    let bool = true
    for(let i = 0; i < w.length; i++){
        for(let j = i + 1; j < w.length; j++){
            if(w[i] === w[j]){
                bool = false
            }
        }
    }
    return bool
  }
  console.log(hasUniqueChars2('hyrum'))