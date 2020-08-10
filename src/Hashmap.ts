type Key = string | number;
export class Hashmap {
    private keyMap: Array<Array<Array<any>>>; 
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    private _hash(key: Key): number {
        if(<Object>key instanceof String) {
            return this._hashString(<string>key)
        }
        if(<Object>key instanceof Number) {
            return this._hashNumber(<number>key);
        }
        return 0;
    }

    private _hashString(key: string): number {
        let total = 0;
        const PRIME_NUM = 31;
         for (let i = 0; i < Math.min(key.length, 25); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME_NUM + value) % this.keyMap.length;
        }
        return total;       
    }

    private _hashNumber(key: number): number {
        const PRIME_NUM = 31;
        return key * PRIME_NUM % this.keyMap.length;
    }

    public checkHash(key: Key): number {
        return this._hash(key);
    }
     
    private _checkIndex(index: number): boolean {
        return this.keyMap[index] === undefined ? false : true
    }

    // uses a separete chaining approach to handle collisions
    public add(key: Key, data: any): void | string {
        const hashedKey = this._hash(key);
        if(!this._checkIndex(hashedKey)) {
            this.keyMap[hashedKey] = [[key, data]];
        } else {
            let isKeyUsed = this.keyMap[hashedKey].some((item) => item[0] === key);
            if(isKeyUsed) return console.error(`The key: ${key} is used twice! Don't use same key twice for adding elements.`);
            this.keyMap[hashedKey].push([key, data]);
        }
    }

    public get(key: Key): any {
        const hashedKey = this._hash(key);
        if(this._checkIndex(hashedKey)) {
            let value = this.keyMap[hashedKey].find((item) => item[0] === key);
            return value && value[1];
        } else return undefined;
    }

    public remove(key: Key): boolean {
        const hashedKey = this._hash(key);
        if(this._checkIndex(hashedKey)) {
            try {
                let index = this.keyMap[hashedKey].findIndex((item) => item[0] === key)
                this.keyMap[hashedKey].splice(index, 1);
            } catch(err) {return false}
            return true;
        } else return false;
    }
}

