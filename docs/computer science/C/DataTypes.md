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
