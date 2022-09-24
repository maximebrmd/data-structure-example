export abstract class Collection<T> {
    protected items: T[] = [];

    //returns the length of the stack.
    size(): number {
        return this.items.length;
    }

    //returns true if stack is empty, false otherwise.
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    //removes all the items from the Stack.
    clear(): void {
        this.items.splice(0);
    }
}
