import { StackCollection } from './stack/stack';
import { QueueCollection } from './queue/queue';

console.log('--- Stack ---\n\n');

const stack = new StackCollection();

stack.push(1)
stack.push('abc')
stack.push('toto')

// 3
console.log({ size: stack.size() });

console.log({ pop: stack.pop() });
console.log({ pop: stack.pop() });
console.log({ isEmpty: stack.isEmpty() === true })
console.log({ pop: stack.pop() });
console.log({ isEmpty: stack.isEmpty() === true })

// 0
console.log({ size: stack.size() });

stack.push(1)
stack.push('abc')
stack.push('toto')

// 3
console.log({ size: stack.size() });

stack.clear();

// 0
console.log({ size: stack.size() });

console.log('\n\n--- Queue ---\n\n');

const queue = new QueueCollection();

queue.enqueue(1)
queue.enqueue('abc')
queue.enqueue('toto')

// 3
console.log({ size: queue.size() });

console.log({ pop: queue.dequeue() });
console.log({ pop: queue.dequeue() });
console.log({ isEmpty: queue.isEmpty() === true })
console.log({ pop: queue.dequeue() });
console.log({ isEmpty: queue.isEmpty() === true })

// 0
console.log({ size: queue.size() });

queue.enqueue(1)
queue.enqueue('abc')
queue.enqueue('toto')

console.log({ front: queue.front() });

// 3
console.log({ size: queue.size() });

queue.clear();

// 0
console.log({ size: queue.size() });



