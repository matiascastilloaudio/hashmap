class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = Array.from({ length: capacity }, () => []);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        if (this.size / this.capacity > this.loadFactor) {
            const newCapacity = this.capacity * 2;
            const newBuckets = Array.from({ length: newCapacity }, () => []);

            for (let i = 0; i < this.buckets.length; i++) {
                const bucket = this.buckets[i];
                for (let [key, value] of bucket) {
                    const index = this.hash(key) % newCapacity;
                    newBuckets[index].push([key, value]);
                }
            }

            this.buckets = newBuckets;
            this.capacity = newCapacity;
        }
        let index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;
    }


    get(key) {
        const index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return null;
    }

    has(key) {
        let index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let bucket = this.buckets[index];

        for (const [existingKey] of bucket) {
            if (existingKey === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        let index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i];
            if (existingKey === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.size = 0;
    }

    keys() {
        let arr = [];

        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                arr.push(key);
            }
        }

        return arr;
    }

    values() {
        let arr = [];

        for (const bucket of this.buckets) {
            for (const [, value] of bucket) {
                arr.push(value);
            }
        }

        return arr;
    }

    entries() {
        let arr = [];

        for (const bucket of this.buckets) {
            for (const entry of bucket) {
                arr.push(entry);
            }
        }

        return arr;
    }
}

export { HashMap };