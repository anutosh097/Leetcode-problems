/*
Assume your programming language only supports fixed-size arrays. Implement a dynamic array data structure that supports the following:

Dynamic Array API:

append(x): adds element x to the end of the array
get(i): returns the element at index i
set(i, x): updates the preexisting element at index i to be x
size(): returns the number of elements in the array
pop_back(): removes the last element
You should only declare arrays of a fixed size and not use built-in append() methods or equivalent.


Example 1:
d = DynamicArray()
d.append(1)
d.append(2)
d.get(0)  # returns 1
d.get(1)  # returns 2
d.size()  # returns 2

Example 2:
d = DynamicArray()
d.append(1)
d.set(0, 10)
d.get(0)  # returns 10

Example 3:
d = DynamicArray()
d.append(1)
d.append(2)
d.pop_back()
d.size()  # returns 1
d.get(0)  # returns 1
Constraints:

If you are coding in a strongly typed language, you can either assume all elements are integers, or define a generic dynamic array type.
All operations should work with arrays of up to 10^6 elements
See Solution
Problem 25.1 - Implement Dynamic Array: Solution
Java
The key insight is that we can't grow a fixed-size array, but we can create a new, bigger array and copy all the elements over. We call this process dynamic resizing. The implementation needs to balance between not resizing too often (which would be slow) and not wasting too much space.

Implement Dynamic Array Solution 1Implement Dynamic Array Solution 2
For the initial implementation, we start with a capacity of 10 slots. We maintain two key properties:

capacity: the total number of slots in our underlying fixed array
size: the number of elements actually stored
When checking if an index is within bounds, we compare it against the size, not the capacity. For instance, even if our capacity is 10, if we've only stored 3 elements, we don't let someone read or write index 7.

For append(), we double the capacity whenever we run out of space. This means that after a resize, we have plenty of room to grow before needing another resize. The amortized analysis shows why this is efficient:

Consider n consecutive appends starting from an empty array
The last resize copies at most n elements
The one before that copies at most n/2
The one before that copies at most n/4, and so on
Total copies = n + n/2 + n/4 + ... < 2n (this is a famous inequality)
Therefore, n appends take O(2n) = O(n) total time, or O(1) amortized per append
For pop_back(), we need a strategy for when to shrink the array. There are three options:

Never shrink - bad because it wastes space
Shrink the capacity in half when the array goes below 50% full - bad because the array would be at full capacity after shrinking, meaning that an append may trigger another resize immediately
Shrink the capacity in half when the array goes below 25% full - good because after shrinking we're at 50% capacity, far from both resize trigger points
The exact number is not critical -- we just want to be careful not to bounce back between expanding and shrinking too often.

The space complexity is O(n), where n is the number of elements. In the worst case (just after shrinking), we use 4n space, but this is still O(n).

Here is the implementation:
*/

public class IplementDynamicArrayInJava {
  private int[] fixedArray;
  private int capacity;
  private int _size;

  public IplementDynamicArrayInJava() {
    capacity = 10;
    _size = 0;
    fixedArray = new int[capacity]; // Java arrays are initialized to 0 by
                                    // default
  }

  public int get(int i) {
    if (i < 0 || i >= _size) {
      throw new IndexOutOfBoundsException("Index out of bounds");
    }
    return fixedArray[i];
  }

  public void set(int i, int x) {
    if (i < 0 || i >= _size) {
      throw new IndexOutOfBoundsException("Index out of bounds");
    }
    fixedArray[i] = x;
  }

  public int size() {
    return _size;
  }

  public void append(int x) {
    if (_size == capacity) {
      resize(capacity * 2);
    }
    fixedArray[_size] = x;
    _size++;
  }

  private void resize(int newCapacity) {
    int[] newFixedSizeArr = new int[newCapacity];
    for (int i = 0; i < _size; i++) {
      newFixedSizeArr[i] = fixedArray[i];
    }
    fixedArray = newFixedSizeArr;
    capacity = newCapacity;
  }

  public void popBack() {
    if (_size == 0) {
      throw new IndexOutOfBoundsException("Pop from empty array");
    }
    _size--;
    if (_size * 4 < capacity && capacity > 10) {
      resize(capacity / 2);
    }
  }

  // Added for testing
  public int getCapacity() {
    return capacity;
  }
}

/*
Time & Space Analysis
n: the number of elements in the array
Per Operation:

append(x): O(1) amortized - Doubling strategy ensures total cost of n appends is O(n)
get(i): O(1) - Direct array access
set(i, x): O(1) - Direct array assignment
size(): O(1) - Return stored size
pop_back(): O(1) amortized - Shrinking when 25% full prevents thrashing
Space: O(n) - At most 4n capacity after shrinking, which is still O(n)

Operations take constant time assuming that we don't need to make copies of elements that take more than O(1) space, such as large objects that can't be stored by reference.

Tests
Here are some test cases to verify the solution:

class TestGetSet {
  public void runTests() {
    DynamicArray d = new DynamicArray();
    // Setup array with [0,1,2,3,4]
    for (int i = 0; i < 5; i++) {
      d.append(i);
    }

    // Test get
    if (d.get(0) != 0) {
      throw new RuntimeException("get(0) should return 0");
    }
    if (d.get(4) != 4) {
      throw new RuntimeException("get(4) should return 4");
    }

    // Test set
    d.set(0, 10);
    if (d.get(0) != 10) {
      throw new RuntimeException("After set(0,10), get(0) should return 10");
    }

    // Test error cases
    try {
      d.get(-1);
      throw new RuntimeException(
          "get(-1) should throw IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      // Expected
    }

    try {
      d.get(5);
      throw new RuntimeException(
          "get(5) should throw IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      // Expected
    }

    try {
      d.set(-1, 0);
      throw new RuntimeException(
          "set(-1,0) should throw IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      // Expected
    }

    try {
      d.set(5, 0);
      throw new RuntimeException(
          "set(5,0) should throw IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      // Expected
    }
  }
}

class TestAppend {
  public void runTests() {
    DynamicArray d = new DynamicArray();
    // Test append to empty array
    d.append(1);
    if (d.size() != 1) {
      throw new RuntimeException("Size should be 1 after append");
    }
    if (d.get(0) != 1) {
      throw new RuntimeException("Element at 0 should be 1");
    }

    // Test multiple appends
    d.append(2);
    d.append(3);
    if (d.size() != 3) {
      throw new RuntimeException("Size should be 3 after appends");
    }
    if (d.get(1) != 2) {
      throw new RuntimeException("Element at 1 should be 2");
    }
    if (d.get(2) != 3) {
      throw new RuntimeException("Element at 2 should be 3");
    }
  }
}

class TestPopBack {
  public void runTests() {
    DynamicArray d = new DynamicArray();
    // Test pop from empty array
    try {
      d.popBack();
      throw new RuntimeException(
          "popBack() on empty array should throw IndexOutOfBoundsException");
    } catch (IndexOutOfBoundsException e) {
      // Expected
    }

    // Setup array with [1,2,3]
    d.append(1);
    d.append(2);
    d.append(3);

    // Test pop_back
    d.popBack();
    if (d.size() != 2) {
      throw new RuntimeException("Size should be 2 after popBack");
    }
    try {
      d.get(2);
      throw new RuntimeException(
          "get(2) should throw IndexOutOfBoundsException after popBack");
    } catch (IndexOutOfBoundsException e) {
      // Expected
    }
  }
}

class TestResize {
  public void runTests() {
    DynamicArray d = new DynamicArray();
    // Test initial capacity
    if (d.getCapacity() != 10) {
      throw new RuntimeException("Initial capacity should be 10");
    }

    // Test grow capacity
    for (int i = 0; i < 11; i++) {
      d.append(i);
    }
    if (d.getCapacity() != 20) {
      throw new RuntimeException("Capacity should double to 20");
    }

    // Test shrink capacity
    for (int i = 0; i < 8; i++) {
      d.popBack();
    }
    if (d.getCapacity() != 10) {
      throw new RuntimeException("Capacity should shrink back to 10");
    }
  }
}

class RunTests {
  public void runTests() {
    TestGetSet testGetSet = new TestGetSet();
    TestAppend testAppend = new TestAppend();
    TestPopBack testPopBack = new TestPopBack();
    TestResize testResize = new TestResize();

    try {
      testGetSet.runTests();

      testAppend.runTests();

      testPopBack.runTests();

      testResize.runTests();

    } catch (RuntimeException e) {
      System.out.println("Test failed: " + e.getMessage());
      throw e;
    }
  }
}
  

public class Solution {
  public static void main(String[] args) {
    new RunTests().runTests();
  }
}

*/