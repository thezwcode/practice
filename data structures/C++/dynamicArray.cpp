#include <stdio.h>

template <class T>
class dynamicArray
{
private:
    int length;

public:
    std::array<T, n> array;

    dynamicArray(T n)
    {
        this.array = new std::array<T>(n);
        this.length = n;
    }

    int length
    {
        cout << "length:" + sizeof(array) / sizeof(length);

        return sizeof(array) / sizeof(T);
    }
};

int main()
{
    dynamicArray(3);

    return 0;
}
