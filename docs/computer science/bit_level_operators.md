# 编程语言中的操作符

### Java
- << left shift
- \>\> signed right shift (filled with sign bits)
- \>\>\> unsigned right shift (filled with 0s)
- & bitwise and
- | bitwise or
- ^ bitwise exclusive or


### C
大致与Java相同，只是没有unsigned right shift，具体会怎么shift取决于数据型本身。

## 一些用法

### set bits to 0
x&0=0

x&1=x

### set bits to 1
x|0=x

x|1=1

### invert bits
x^0=x

x^1=!x

## 应用……？
刚刚看到了[这么一道题](https://blog.coca.moe/post/er-jin-zhi-mei-ju)，发现和当初学离散数学的时候遇到的那个小朋友分饼干的题型有点像，都是二进制的应用，就当是位运算的一个实例放在这里了。