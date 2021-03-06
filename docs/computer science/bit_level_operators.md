# 编程语言中的操作符

### Java

- `<<` left shift
- `>>` signed right shift (filled with sign bits)
- `>>>` unsigned right shift (filled with 0s)
- `&` bitwise and
- `|` bitwise or
- `^` bitwise exclusive or

### C

大致与 Java 相同，只是没有 unsigned right shift，具体会怎么 shift 取决于数据型本身。

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

## 1 的个数

当初我第一次看到这道题的时候，因为用的是 Java，所以首先想到的是 unsigned right shift 然后再 left shift 回来的结果如果相同的话说明这一位为 0，不同则为 1，然后用同样的方法判断下一位直到数字本身为 0。假设数字一共有 n 比特，那么时间复杂度为 O(n)，最好情况是 O(1)。

但事实上如果用 mask 的话有更快一点的方案。我们知道 `x & 1`可以推断出最右位是 1 还是零，那么只要执行一个 n 次的循环，然后将数字不断向左 shift 判断每一位直到数字本身为 0 即可，这样的话时间复杂度也为 O(n)，但从执行一右一左 shift 变成了只需要执行一次 AND 操作。

更高阶的解法需要一些对位运算的了解。为方便演示，这里以`10101000`这个八位的数字为例：

- 将数字减一，最末位的 1 变成 0，并且在最末位后的 0 全部变成 1，比如`10101000 - 1 = 10100111`
- 将新数字与原数字相 AND 得到的数字，除最末位的 1 变成 0 之外，都与一开始的原数字相同，比如`10100111 & 10101000 = 10100000`，至此我们跳过了所有末尾 0，只执行了一次操作就判断出了一个 1
- 同理，继续进行运算：`10100000 - 1 = 10011111 `， `10011111 & 10100000 = 10000000`，又判断出了一次 1
- 继续运算：`10000000 - 1 = 01111111`，`01111111 & 10000000 = 0`，又判断出了一次 1
- 数字为 0 停止判断，一共有 3 个 1

假设数字中有 m 个 1，那么时间复杂度为 O(m)，所以要优于之前的解法。

```javascript
function count1(n) {
  let count = 0;
  while (n != 0) {
    n = (n - 1) & n;
    count++;
  }
  return count;
}
```

O(logn)的解法：population count。

## 不使用其他变量将两个整数交换

如果`x=a^b`，那么：

- `x^a=b`
- `x^b=a`

因此可以得出交换函数：

```python
def swap(a: int, b: int) -> None:
  a = a^b
  b = a^b # becomes a
  a = a^b # becomes b

```
