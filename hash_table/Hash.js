class HashTable {
    constructor(size=53) {
        this.keymap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++ ) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRED_PRIME + value) % this.keymap.length;
        }
        return total;
    }
}