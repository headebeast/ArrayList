class ArrayList {
    constructor() {
        this.array = [
            '1', '2', '3', '4', '5', '6', '7'
        ];

        this.array1 = [
            '8', '9', '10'
        ]
    }

    clear() {
       return this.array = []
    }

    lengthofArray() {
        return this.array.length
    }

    addToStartofArray(x) {
      return this.array.unshift(x)
    }

    addToEndtofArray(x) {
        return this.array.push(x)
    }

    removeFromStartofArray(x) {
        return this.array.shift(x)
    }

    removeFromEndofArray(x) {
        return this.array.pop(x)
    }

    mapThroughArray(x) {
        return this.array.map(x)
    }

    filterThroughArray(x) {
        return this.array.filter(x)
    }

    findThroughArray(x) {
        return this.array.find(x)
    }
    
    reduceThroughArray() {
        return this.array.reduce((acc, current) => acc + current)
    }

    concatingTwoArrays() {
        return this.array.concat(this.array1)
    }
}

let Array = new ArrayList()
let NewArray = new ArrayList()

console.log(Array)
console.log(Array.lengthofArray())
console.log(Array.addToStartofArray('12'))
console.log(Array.addToEndtofArray('13'))
console.log(Array.mapThroughArray(x => x * 2))
console.log(Array.filterThroughArray(x => x.array !== this.array))
console.log(Array.findThroughArray(x => x.array === this.array))
console.log(Array.reduceThroughArray())
console.log(Array.concatingTwoArrays())
for (let i = 0; i < Array.length; i++) {
    for (let i = 0; i < Array.length; i++) {
        Array += i;
        console.log(Array);
        
    } 
}

for (let element of Array) {
    element += 1;
    console.log(element);
}

console.log(Array)
console.log(Array.clear())
console.log(NewArray)

