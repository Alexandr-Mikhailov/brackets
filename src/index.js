module.exports = function check(str, bracketsConfig) {
  let bracketsCounter = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
              
        switch (str[i]) {
          case bracketsConfig[j][0]:
            if (bracketsConfig[j][0]==bracketsConfig[j][1] && bracketsCounter.length) {
              let bracket = bracketsCounter.pop();
              if (bracket == bracketsConfig[j]){
                break;
              } else {
                bracketsCounter.push(bracket);
              }
            }
            bracketsCounter.push(bracketsConfig[j]);
            break;
          case bracketsConfig[j][1]:
            if (!bracketsCounter.length) {
              return false
            } else {
              if (!(bracketsCounter.pop()[0] == bracketsConfig[j][0])) {
                return false;
              }
            };     
            break;
          default:
            break;
        }        
      }
    }
    if (bracketsCounter.length){
      return false;
    } else {
      return true;    
    }
  }
}
