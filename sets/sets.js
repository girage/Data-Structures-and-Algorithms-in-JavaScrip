class mySet {
  constructor(collection = []) {
    this.collection = collection;
  };

  has(element) {
    return (this.collection.indexOf(element) !== -1);
  };

  values() {
    return this.collection;
  };

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
  };

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  size() {
    return this.collection.length;
  };

  union(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));
    return unionSet;
  };

  intersection(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  difference(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    })
    return differenceSet;
  };

  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every( value => otherSet.has(value));

  };

}

//  mySet
let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log('set A: ', setA);
console.log('set B: ', setB);
console.log('size A: ', setA.size());
console.log('size B: ', setB.size());
let result = setA.union(setB).values();
console.log('[AB]union result: ', result);
console.log('[AB]type of result: ', typeof result);
console.log('[AB]intersection result: ', setA.intersection(setB).values());
console.log('[AB]difference result: ', setB.difference(setA).values());
console.log('[A subset B]subset result: ', setA.subset(setB));
console.log('[B subset A]subset result: ', setB.subset(setA));

//  Set
let setC = new Set();  
let setD = new Set();  
setC.add('a');  
setD.add('b');  
setD.add('c');  
setD.add('a');  
setD.add('d');  
console.log('Set D Value', setD.values());
console.log('type of Set D.values ', typeof setD.values());

setD.delete('a');
console.log(setD.has('a'));
console.log(setD.add('d'));