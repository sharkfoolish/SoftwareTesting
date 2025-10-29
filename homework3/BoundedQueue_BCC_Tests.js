// BoundedQueue_test.js
import BoundedQueue from './BoundedQueue.js';

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log(testName + ": PASS");
    } else {
        console.log(testName + ": FAIL, expected " + expected + ", got " + actual);
    }
}

function assertThrows(fn, testName) {
    try {
        fn();
        console.log(testName + ": FAIL, expected error but none thrown");
    } catch (e) {
        console.log(testName + ": PASS");
    }
}

// C-B1
let q = new BoundedQueue(3);
assertEqual(q.is_empty(), true, 'C-B1');

// C-B2
q = new BoundedQueue(0);
assertEqual(q.is_empty(), true, 'C-B2 - is_empty');
assertEqual(q.is_full(), true, 'C-B2 - is_full');

// C-B3
assertThrows(() => new BoundedQueue(-1), 'C-B3');

// E-B1
q = new BoundedQueue(3);
q.enqueue(1);
assertEqual(q.is_empty(), false, 'E-B1');

// E-B2
assertThrows(() => q.enqueue(NaN), 'E-B2');

// Q-B2
q = new BoundedQueue(2);
q.enqueue(1);
q.enqueue(2);
assertThrows(() => q.enqueue(3), 'Q-B2');

// D-B1
q = new BoundedQueue(3);
q.enqueue(1);
assertEqual(q.dequeue(), 1, 'D-B1');

// D-B2
q = new BoundedQueue(3);
assertThrows(() => q.dequeue(), 'D-B2');

// Emt-B2
q = new BoundedQueue(3);
q.enqueue(1);
assertEqual(q.is_empty(), false, 'Emt-B2');

// F-B2
q = new BoundedQueue(2);
q.enqueue(1);
q.enqueue(2);
assertEqual(q.is_full(), true, 'F-B2');

// Wrap-A
q = new BoundedQueue(2);
q.enqueue(1);
q.enqueue(2);
assertEqual(q.dequeue(), 1, 'Wrap-A - step1');
q.enqueue(3);
assertEqual(q.dequeue(), 2, 'Wrap-A - step2');
assertEqual(q.dequeue(), 3, 'Wrap-A - step3');
assertEqual(q.is_empty(), true, 'Wrap-A - step4');
