# Leetcode Design Patterns Explained

## Use Cases

* Finding median or middle elements in a data stream:
    * Two Heaps

* Manipulating collection of items:
    * Arrays

* Searching, enumerating all combinations, or optimization problems:
    * Backtracking

* Optimization problems that involve decision making at many stages:
    * Dynamic Programming

* Dealing with cyclic lists or arrays, or finding middle elements:
    * Fast & Slow pointers

* Problems involving networks, relationships or interconnected nodes:
    * Graph Traversal

* Reordering lists, reversing linked list parts, or manipulating nodes:
    * In-place traversal of a Linked List

* Problems that involve merging sorted lists, arrays, or data streams:
    * K-way Merge

* Dealing with intervals, such as finding overlapping intervals or merging intervals:
    * Merge Intervals

* Problems involving sorted arrays or lists, especially with rotations or duplicates:
    * Modified Binary Search

* Finding the "longest/shortest, maximum/minimum, largest/smallest" substring, subarray, or desirable value:
    * Sliding Window

* Finding the top, bottom, smallest, largest, or most frequent 'k' elements of a collection:
    * Top K elements

* Scheduling problems, or finding an order to complete tasks given certain conditions:
    * Topological Sorting

* Traversal of a tree in a level-by-level order (Breadth-first traversal):
    * Tree BFS

* Traversal of a tree in a depth-first manner, particularly for finding paths, connecting nodes, or dealing with a tree-like graph:
    * Tree DFS

* Finding a set of elements that fulfill a certain condition in sorted arrays or linked lists:
    * Two Pointers

## 2 Heaps

Also known as a "double heap" or a "median heap," this pattern involves using two heaps to keep track of dynamically changing data. It's usually used when you need to maintain a statistical property (like the median) over a stream of data. A common strategy is to use a max-heap for the lower half of the data and a min-heap for the upper half.

* Example: Given an array of numbers and a number 'k', find the median of all the 'k' sized sub-arrays of the array. 
* In this example, we create a simple Priority Queue class which simulates the behavior of a Heap. A priority queue is an abstract data type (ADT) that operates similar to a queue, and every item has a priority associated with it. Items with higher priority are dequeued before items with lower priority. If two elements have the same priority, they are dequeued based on their order in the queue.  
* In this scenario where we're maintaining two heaps to find a median from a data stream. In this code, we define a PriorityQueue class with basic operations like enqueue, dequeue, peek, isEmpty, and size. We also define a MedianFinder class that uses two heaps, a max heap to represent the first half of the numbers, and a min heap to represent the second half.
* When a new number comes in, we check if it's smaller or equal to the max value in the first half, then we add it to the first half. Otherwise, we add it to the second half. After adding the number, we check if the heaps are balanced. If not, we move the root of one heap to the other heap. The median would be the root of the heap if the total number of elements is odd, or the average of the roots of the two heaps if the total number of elements is even.

```ts
class PriorityQueue {
  collection: [number, number][];
  constructor() {
    this.collection = [];
  }
  enqueue(element: [number, number]) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i += 1) {
        if (element[1] < this.collection[i - 1][1]) {
          this.collection.splice(i - 1, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }
  dequeue() {
    const value = this.collection.shift();
    return value;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

class PriorityQueue {
  collection: number[];
  comparator: (a: number, b: number) => number;

  constructor(comparator: (a: number, b: number) => number) {
    this.collection = [];
    this.comparator = comparator;
  }

  enqueue(element: number) {
    this.collection.push(element);
    this.collection.sort(this.comparator);
  }

  dequeue() {
    return this.collection.shift();
  }

  peek() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  size() {
    return this.collection.length;
  }
}

class MedianFinder {
  maxHeap: PriorityQueue; // first half of numbers
  minHeap: PriorityQueue; // second half of numbers

  constructor() {
    this.maxHeap = new PriorityQueue((a, b) => b - a); // max heap
    this.minHeap = new PriorityQueue((a, b) => a - b); // min heap
  }

  addNum(num: number) {
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
      this.maxHeap.enqueue(num);
    } else {
      this.minHeap.enqueue(num);
    }

    // Balance heaps
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.enqueue(this.maxHeap.dequeue() as number);
    } else if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.enqueue(this.minHeap.dequeue() as number);
    }
  }

  findMedian(): number | null {
    if (this.maxHeap.isEmpty() && this.minHeap.isEmpty()) {
      return null;
    }

    if (this.maxHeap.size() === this.minHeap.size()) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
}

let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Output: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Output: 2
```

## Arrays

Arrays are basic data structures that hold data, typically of the same type, in memory. They are especially useful when you need to access elements by their numerical position in the array (random access).

* Example: In this example, we are given an array of numbers, which contains some zeros. The task is to move all zeros to the end of the array while maintaining the relative order of non-zero elements. We start with a pointer at the start of the array and another pointer that runs through the array. If a non-zero number is found, we swap it with the value at the first pointer and then increment the first pointer. In the end, all non-zero numbers will be on the left side in their original order and zeros on the right side.

```ts
function moveZeroes(nums: number[]): number[] {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
}

console.log(moveZeroes([0,1,0,3,12]));  // Output: [1,3,12,0,0]
```

## Backtracking

Backtracking is a strategy for finding all solutions to some computational problems, particularly constraint satisfaction problems, that incrementally builds candidates for the solutions, but abandons a candidate ("backtracks") as soon as it is determined that a solution cannot be successfully constructed from the candidate. 

* In the given example, we're generating all possible subsets of a given set. We start with an empty set, and for each number, we generate new sets by adding the number to all existing sets. This problem is solved using a depth-first search strategy.

```ts
function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  function backtrack(start: number, curr: number[]) {
    result.push([...curr]);
    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(i + 1, curr);
      curr.pop();
    }
  }
  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3])); // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
```

## Dynamic Programming (DP)

Dynamic Programming (DP) is a technique used to solve a complex problem by breaking it into subproblems, solving the subproblems, and combining the solutions to solve the original problem. It's used when the problem has overlapping subproblems and optimal substructure.

* In the provided example, we are checking whether a continuous subarray of size at least 2 sums up to a multiple of 'k'. We keep a running sum of the elements and store the mod of the sum by 'k' in a map. If we encounter a mod that is already present in the map, it means there is a subarray that sums up to a multiple of 'k'. However, to ensure the subarray size is at least 2, we need to check the distance between the current index and the stored index for the mod in the map.

```ts
function checkSubarraySum(nums: number[], k: number): boolean {
  let map: { [key: number]: number } = { 0: -1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) sum %= k;
    if (map.hasOwnProperty(sum)) {
      if (i - map[sum] > 1) return true;
    } else {
      map[sum] = i;
    }
  }
  return false;
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));  // Output: true
```

## Fast & Slow Pointers

This is a pointer manipulation strategy that uses two pointers moving through the array (or list) at different speeds. This approach is quite efficient when dealing with cyclic linked lists or arrays. This is used for cyclic linked lists or arrays. The idea is to have two pointers, one that moves faster (usually two steps at a time) and one that moves slower. If there's a cycle, the fast pointer will eventually meet the slow pointer.

* Example: In this example, we create a linked list and define a function to detect if there's a cycle in it using the fast and slow pointers pattern.

```ts
class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true; // cycle detected
    }
  }
  return false; // no cycle
}
```

## Graph Traversal

Graph traversal involves visiting every vertex and edge of a graph in a systematic order. Common methods for graph traversal include depth-first search (DFS) and breadth-first search (BFS).

* Example: Involves visiting every vertex and edge of a graph in a systematic order. Depth-first search (DFS) and breadth-first search (BFS) are common methods for graph traversal. Here is an example of BFS. In this example, we define a Graph class and a method for Breadth-First Search (BFS) traversal. BFS starts traversal from the root (starting) node and visits nodes in a level by level manner.

```ts
class Graph {
  vertices: number;
  adjList: Map<number, number[]>;

  constructor(noOfVertices: number) {
    this.vertices = noOfVertices;
    this.adjList = new Map();
  }

  addEdge(v: number, w: number) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
    this.adjList.get(v)!.push(w);
  }

  bfs(startingNode: number) {
    let visited = Array(this.vertices).fill(false);
    let q: number[] = [];

    visited[startingNode] = true;
    q.push(startingNode);

    while (q.length !== 0) {
      let currentVertex = q.pop()!;
      console.log(currentVertex);

      let list = this.adjList.get(currentVertex);
      for (let i in list!) {
        let neighbor = list![i];

        if (!visited[neighbor]) {
          q.unshift(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
}

let g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);
g.bfs(0);
```

## In-place Traversal of Linked List (LL)

In this technique, you manipulate the nodes of a linked list without using any extra space. This technique is useful for problems that require reversing a linked list, detecting a cycle, or finding the middle of a linked list.

* Example: This is when you manipulate the nodes of a linked list without using any extra space. This technique is useful for problems that require reversing a linked list, detecting a cycle, or finding the middle of a linked list.  In the previous example, we create a linked list and then define a function to reverse the linked list in place. We use three pointers: prev, current, and nextTemp. We traverse the list and reverse the links while moving forward.

```ts
class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  while (current != null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}
```

## K-way Merge

This pattern involves merging K sorted lists into one. A priority queue (min-heap or max-heap) is often used to facilitate this.

Example: This is an algorithm to merge arrays or lists sorted in ascending order into one large combined sorted list. It can be used in problems involving merging sorted arrays/lists. Here is an example of merging K sorted lists using a priority queue. JavaScript/TypeScript doesn't natively support a priority queue, so for simplicity, we use the sort method to simulate a priority queue.

```ts
class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let merged: ListNode[] = [];

  for (let node of lists) {
    while (node !== null) {
      merged.push(node);
      node = node.next;
    }
  }

  merged.sort((a, b) => a.value - b.value);

  for (let i = 0; i < merged.length - 1; i++) {
    merged[i].next = merged[i + 1];
  }

  if (merged.length > 0) {
    merged[merged.length - 1].next = null;
    return merged[0];
  } else {
    return null;
  }
}
```

## Merge Intervals

This pattern is often used to solve interval problems which involve overlapping intervals.

* Example: In this example, we have a list of intervals, and we want to merge all overlapping intervals. We start by sorting the intervals by their start time. Then, we keep track of the previous interval, and for every current interval, if it overlaps with the previous one (i.e., its start time is less than or equal to the end time of the previous interval), we merge them by updating the end time of the previous interval.

```ts
function merge(intervals: number[][]): number[][] {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let res = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // Output: [[1,6],[8,10],[15,18]]
```

## Modified Binary Search

A typical binary search assumes that the array is sorted and the items are uniform. A modified binary search can handle more complex conditions.

* Example: This technique is used when the problem involves sorted arrays or lists. The array may be rotated, or there may be duplicates. In this example, we're performing a binary search in a sorted array. If the number at the mid index is equal to the target, we return the mid index. If the number is less than the target, we look in the right half of the array, else we look in the left half.

```ts
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(search([-1,0,3,5,9,12], 9));  // Output: 4
```

## Sliding Window

The sliding window pattern involves maintaining a set of elements in a 'window' that moves through the given array or list. This pattern can be used to solve array-related problems efficiently.

* Example: This technique involves creating a 'window' of elements, typically in an array or a list and then moving that window through the data to examine different subsets of it. In this example, we're finding the maximum length of a contiguous subarray whose sum equals 'k'. We maintain a sliding window of elements and a running sum. If the running sum equals 'k', we update the max length. We also keep track of sums and their indices in a map.

```ts
function maxSubArrayLen(nums: number[], k: number): number {
  let maxLen = 0;
  let sum = 0;
  let map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      maxLen = i + 1;
    } else if (map.hasOwnProperty(sum - k)) {
      maxLen = Math.max(maxLen, i - map[sum - k]);
    }
    if (!map.hasOwnProperty(sum)) {
      map[sum] = i;
    }
  }
  return maxLen;
}

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));  // Output: 4
```

## Top K Elements

This pattern involves finding the top/smallest K elements from a set. It often involves using a priority queue (max-heap or min-heap).

* Example: This pattern is used for problems where you're asked to find the top, bottom, smallest, largest or most frequent 'k' elements of a collection. In the previous example, we're finding the 'k' most frequent elements. We first create a frequency map, then a bucket array where the index is the frequency and the value at that index is an array of numbers with that frequency. We then iterate from the end of the bucket array and keep adding numbers to the result array until we have 'k' elements.

```ts
function topKFrequent(nums: number[], k: number): number[] {
  let freqMap: { [key: number]: number } = {};
  let bucket: number[][] = Array(nums.length + 1).fill([]);
  let result: number[] = [];

  for (let num of nums) {
    freqMap[num] = ~~freqMap[num] + 1;
  }

  for (let num in freqMap) {
    bucket[freqMap[num]] = [...bucket[freqMap[num]], +num];
  }

  for (let i = bucket.length - 1; i >= 0 && k > 0; i--) {
    while (bucket[i].length && k > 0) {
      result.push(bucket[i].shift()!);
      k--;
    }
  }

  return result;
}

console.log(topKFrequent([1,1,1,2,2,3], 2));  // Output: [1, 2]
```

## Topological Sorting

This is used to linearly order the vertices of a directed acyclic graph (DAG). This order ensures that for every directed edge from vertex A to vertex B, A comes before B in the ordering.

* Example: This is used for directed graphs and a way of linear ordering of the vertices such that for every directed edge (U, V), vertex U comes before V in the ordering. It's often used to schedule a sequence of tasks and deciding on the order of courses to take. In this example, we are doing a topological sort of vertices based on the directed edges. We keep track of the in-degree of each vertex, build the graph, and then keep adding vertices with in-degree 0 to the result array. For each vertex added to the result, we decrease the in-degree of all its child vertices. If a child vertex's in-degree becomes 0, we add it to the result array.

```ts
function topologicalSort(vertices: number, edges: number[][]): number[] {
  let sortedOrder: number[] = [];

  if (vertices <= 0) {
    return sortedOrder;
  }

  let inDegree: number[] = Array(vertices).fill(0);
  let graph: Map<number, number[]> = new Map();

  edges.forEach((edge) => {
    let parent = edge[0],
      child = edge[1];
    if (!graph.has(parent)) {
      graph.set(parent, []);
    }
    graph.get(parent)!.push(child);
    inDegree[child]++;
  });

  let sources: number[] = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  while (sources.length) {
    let vertex = sources.shift()!;
    sortedOrder.push(vertex);
    (graph.get(vertex) || []).forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
}

console.log(topologicalSort(4, [
  [3, 2],
  [3, 0],
  [2, 0],
  [2, 1],
]));  // Output: [3, 2, 0, 1]
```

## Tree BFS (Breadth-First Search)

This pattern involves traversing a tree in a breadthward motion and uses a queue to achieve this.

* Example: This technique involves traversing a tree in a breadth-first manner. This is done level by level, starting from the root.  In this example, we define a TreeNode class and a bfs function. We traverse the tree using a queue to perform a breadth-first search (BFS), adding the value of each node to the result array.

```ts
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bfs(root: TreeNode | null): number[] {
  let result = [];
  if (root === null) {
    return result;
  }
  
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift()!;
      currentLevel.push(currentNode.value);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}
```

## Tree DFS (Depth-First Search)

This pattern is an algorithm for traversing a tree depthward motion. This uses a stack to achieve this.

* Example: This technique involves traversing a tree in a depth-first manner. It explores as far as possible along each branch before backtracking. In this example, we define a TreeNode class and a dfs function. We traverse the tree using a recursive function traverse to perform a depth-first search (DFS), adding the value of each node to the result array.

```ts
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function dfs(root: TreeNode | null): number[] {
  let result: number[] = [];
  traverse(root, result);
  return result;
}

function traverse(node: TreeNode | null, result: number[]) {
  if (node === null) {
    return;
  }
  result.push(node.value);
  traverse(node.left, result);
  traverse(node.right, result);
}
```

## Two Pointers

The two-pointer technique is a technique where two pointers start from different points and move towards each other. It is a useful technique for searching pairs in a sorted array, linked list problems, etc.

* Example: This pattern is typically used for sorted arrays or linked lists and it's extremely useful for solving problems in linear time when brute force would take quadratic time. In this example, we're trying to find a pair of numbers in a sorted array that add up to a given target sum. We use two pointers, one starting from the start of the array and one from the end. If the sum of the numbers at the pointer indices is equal to the target, we return the indices. If the sum of the numbers at the pointer indices is less than the target, we move the left pointer one step to the right, making the sum larger. If the sum is larger than the target, we move the right pointer one step to the left, making the sum smaller. We keep doing this until we find the target sum or the pointers meet. This strategy ensures that we do not miss any pairs that could possibly sum up to the target, while also ensuring an efficient linear time complexity, since each element is visited at most twice.

```ts
function pairWithTargetSum(arr: number[], targetSum: number): [number, number] | [] {
  let left = 0,
      right = arr.length - 1;
  
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }

    if (targetSum > currentSum) {
      left += 1; 
    } else {
      right -= 1; 
    }
  }
  
  return [];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));  // Output: [1, 3]
```