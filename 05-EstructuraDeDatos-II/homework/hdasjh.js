
class HashTable {
    constructor() {
        this.values = {}
        this.length = 10
        this.size = 0
    }

    calculateHash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = hash + (key.charCodeAt(i) * i)
        }
        return hash % this.length
    }

    add(key, value) {
        const hash = this.calculateHash(key)
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {}
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++
        }
        this.values[hash][key] = value
    }

    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }
}



let tabla = new HashTable()
tabla.add('maria', 56)
tabla.add('alejandro', 68)
tabla.add('ana', 37)
tabla.add('mauricio', 98)
tabla.add('mauricio', 98)
console.log(tabla)