public class Array<T> implements Iterable<T> {
    private T[] arr;
    private int len = 0;
    private int capacity = 0;

    public Array() {
        this(16);
    }

    public Array(int capacity) {
        if (capacity < 0)  throw new IllegalArgumentException("Illegal capacity: " + capacity;)
        this.capacity = capacity;
        arr = (T[]) new Object[capacity];
    }

    public int size() {
        return this.len;
    }

    public boolean isEmpty() {
        return this.size() == 0;
    }

    public T get(int index) {
        if (index < 0 || index > this.size()) {
            throw new IllegalArgumentException("Array index out of bounds.")
        }
        return this.arr[index];
    }

    public void set(int index, T val) {
        if (index < 0 || index > this.size()) {
            throw new IllegalArgumentException("Array index out of bounds.")
        }
        this.arr[index] = val;
    }

    public void clear() {
        for (int i = 0; i < this.capacity; i++) {
            this.arr[i] = null;
        }
        len = 0;
    }

    public void add(T val) {
        if (len + 1 > capacity) {
            if (capacity == 0)
                capacity = 1;
            else
                capacity *= 2;
            T[] new_arr = (T[]) new Object[capacity];
            for (int i = 0; i < len; i++) {
                new_arr[i] = arr[i];
            }
            arr = new_arr;
        }
        arr[len++] = val;
    }

    public T removeAt(int index) {
        if (index < 0 || index > size())
            throw new IndexOutOfBoundsException("Array index out of bounds.");
        if (index == size())
            arr[index] = null;
        T rm_elem = arr[index];
        T[] new_arr = (T[]) new Object[len - 1];
        for (int i = 0, j = 0; i < size(); i++, j++) {
            if (i == index)
                j--;
            new_arr[j] = arr[i];
        }
        arr = new_arr;
        capacity = --len;
        return rm_elem;
    }

    public boolean remove(Object obj) {
        for (int i = 0; i < size(); i++) {
            if (arr[i].equals(obj)) {
                removeAt(i);
                return true;
            }
        }
        return false;
    }

    public int indexOf(Object obj) {
        for (int i=0; i < size(); i++) {
            if (arr[i].equals(obj)) return i;
        }
        return -1;
    }

    public boolean contains(Object obj) {
        return indexOf(obj) != -1;
    }

    @Override public java.util.Iterator<T> iterator() {
        return new java.util.Iterator <T> () {
            int index = 0;
            public boolean hasNext() {return index < len;}
            public T next() {return arr[index++];}
        }
    }

    @Override public String toString() {
        if (len == 0) return "[]";
        else {
            StringBuilder sb = new StringBuilder(len).append("[");
            for (int i = 0; i < len-1; i++) {
                sb.append(arr[i] + ", ")
            }
            return sb.append(arr[len-1] + "]").toString();
        }
    }


}

public static void main(String[] args) {
    Array<Integer> arr = new Array<Integer>();
}