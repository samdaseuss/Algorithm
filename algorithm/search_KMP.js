/** Knuth-Morris-Pratt string search algorithm */
function makeTable(str) {
    var table = new Array(str.length);
    var maxPrefix = 0;
    table[0] = 0;
    
    for (var i = 1; i < str.length; i++) {
      while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        maxPrefix = table[maxPrefix - 1];
      }
      
      if (str.charAt(maxPrefix) === str.charAt(i)) {
        maxPrefix++;
      }
      table[i] = maxPrefix;
    }
    return table;
  }
function kmpMatching(str, word) {
   
    var prefixes = makeTable(word);
    var matches = [];
    
    
    var j = 0;
    var i = 0;
    while (i < str.length) {
      
      if (str.charAt(i) === word.charAt(j)) {
        i++;
        j++;
      }
      
      if (j === word.length) {
        matches.push(i-j);
        
        j = prefixes[j-1];
      }
      
      else if (str.charAt(i) !== word.charAt(j)) {
          
          if (j !== 0) {
              j = prefixes[j-1];
          } else {
              
              i++;
          }
      }
    }
  
    return matches;
  }
console.log(kmpMatching("it implies that it is very important","impo"))