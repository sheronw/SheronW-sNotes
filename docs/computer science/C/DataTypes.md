# Data Types

## Basic

**char**

range: [-128,127] or [-2<sup>7</sup>,2<sup>7</sup>-1]

**short**

range: [-32768,32767] or [-2<sup>15</sup>,2<sup>15</sup>-1]

**int**

range: [-2147483648,2147483647] or [-2<sup>31</sup>,2<sup>31</sup>-1]

**long int**

range: [-2147483648,2147483647] or [-2<sup>63</sup>,2<sup>63</sup>-1]

Usually 8-byte. But in some older systems long is 4-byte.

**long long int**

range: [-2147483648,2147483647] or [-2<sup>63</sup>,2<sup>63</sup>-1]

8-byte.

## Unsigned

Without Two's Complement.

## array

```c
int *p;
p = malloc(10*sizeof(int))
free(p);
// if init as a string you cannot use c++ to get its position
char *c = "abc"
```

## const

```c
const int BUF_SIZE = 1024
const int *p = &x; // cannot modify the value that p pointed to
int *const p = &x; // cannot modify the address that p pointed to
const int *const p = &x; // cannot modify both
```

## function

```c
// prototype
int *f2(const void *v1, const void *v2);
// variable declaration
// f1 is a pointer to a function that returns int
int (*f1)(const void *v1,const void *v2);
```

## struct

```c
struct Pt {
    double x;
    double y;
};

int main() {
    struct Pt p1 = {1.2, 3.3};
    double x1 = p1.x;
    struct Pt *p2;
    p2 = &p1;
    x1 = (*p2).x;
    x1 = p2->x;
}
```

```c
struct Node {
    struct Node *next;
    int val;
};

struct Node *creatNode(int x) {
    struct Node *node = malloc(sizeof(struct Node));
    if (!node) {
        // check if we could allocate
        return NULL;
    }
    node->val = x;
    node->next = NULL;
    return node;
}

int main() {
    struct Node *node = createNode(1);
    assert(node);
    free(node);
}
```

## arraylist

Everything in list is on stack.

In memory, stack goes downward from top while heap goes upwards from bottom.
