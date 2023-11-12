class HashTable {
    constructor(size=4) {
        this.keymap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++ ) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keymap.length;
        }
        return total;
    }

    set(key, value) { // 1. 키와 값을 입력 받음
        let index = this._hash(key); // 2. 키를 해쉬 처리함
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);  // 3. separate chaining를 통해 키-값 쌍을 해쉬 테이블 배열에 저장
    }

    get(key) {
    }
}

let hash = new HashTable();
hash.set("Hello", "world");
