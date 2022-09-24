import { Collection } from '../collection';

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
}

export class StackCollection<T> extends Collection<T> implements IStack<T> {
    //adds an item to the top of the stack.
    push(item: T): void {
       this.items.push(item);
    }

    //removes and returns the top item of the stack.
    pop(): T | undefined {
        return this.items.pop();
    }

    //returns the top item of the Stack
    peek(): T | undefined {
        return this.items[this.size() - 1];
    }
}
