class PriorityQueue {
    constructor(collection = []) {
        this.collection = collection;
    };

    printCollection() {
        console.log(this.collection);
    };

    size() {
        return this.collection.length;
    };

    isEmpty() {
        return this.size() === 0;
    };

    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            };
            if (!added) {
                this.collection.push(element);
            };
        };
    };

    dequeue() {
        let value = this.collection.shift();
        return value[0];
    };

    front() {
        return this.collection[0];
    };
}

let pq = new PriorityQueue;
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
console.log(pq.dequeue());
pq.printCollection();
console.log(pq.front());
pq.printCollection();