class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }


    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }


    set(key,value){ // 1. 키와 값을 입력 받음
      let index = this._hash(key); // 2. 키를 해쉬 처리함
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);  // 3. separate chaining를 통해 키-값 쌍을 해쉬 테이블 배열에 저장
    }


    get(key){ // 1. 키를 입력 받음
      let index = this._hash(key); // 2. 키를 해쉬 처리함
      if(this.keyMap[index]){  // 3. 키-값 쌍을 찾은 다음에 출력
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined; // 4.찾을 수 없다면 언디파인드 출력 
    }
}
  
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

console.log(ht.get("maroon"));
console.log(ht.get("yellow"));
console.log(ht.get("olive"));
console.log(ht.get("salmon"));
console.log(ht.get("lightcoral"));
console.log(ht.get("mediumvioletred"));
console.log(ht.get("plum"));