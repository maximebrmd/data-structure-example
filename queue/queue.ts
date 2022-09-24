import { Collection } from '../collection';

interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    front(): T | undefined;
}

export class QueueCollection<T> extends Collection<T> implements IQueue<T> {
    //adds an item to the queue
    enqueue(item: T): void {
       this.items.push(item);
    }

    //retrieves an item from the queue
    dequeue(): T | undefined {
        return this.items.shift();
    }

    //returns the front item of the queue
    front(): T | undefined {
        return this.items[0];
    }
}
