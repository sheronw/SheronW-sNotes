# Non-parametric Tests

## the Wilcoxon rank-sum test(Mann-Whitney test)

**comparing two independent conditions**

compares two conditions when different participants take part in each condition and the resulting data violate any assumption of the independent t-test

### 原理

将两组数据标上标签，然后放在一起排序。最小值为rank 1，第二小的为rank 2，然后以此类推……

注意，如果有多个值相同（tied scores），那他们的rank统一为potential rank的平均值。potential rank就是假设他们不同的话应该是什么rank。

然后再把相同组内的所有值的rank求和。

为了校正，各减去mean rank of the group，公式为N(N+1)/2。

（N为每个组的人数，其实这个就是等差数列1...N的和最后除以N）

以上的计算结果为test statistic，取较小的那个值（？存疑）

然后计算associated p-value，其实可以用monte carlo method，就是从整个样本里随机抽取出来一个组，然后再次计算，看看是否符合我们的结果（其实不应该，因为这种情况下null hypothesis is true）——不过这个要反反复复取样本计算，对大的数据来说很不友好。

另外一种方法是normal approximation。

该方法并不强求数据本身是成正态分布的，而是认为我们一次一次取样本计算的上述结果应该是成正态分布的。

我们可以算出标准差，然后算z，然后算p-value。

当然对R来说，如果你用这个方法算，它默认会加上一个continuity correction，因为正态分布本身是平滑曲线，但我们的数据分成了rank所以不是平滑的，因此校正之后会把你的p-value稍微拉高一点。

### calculating effect size

r=z/sqrt(N)

在R中计算z-score的方法：qnorm(xxmodel$p.value/2)

if p-value<0.05, then the two groups are significantly different

the Wilcoxon signed-rank test
-----------------------------

**comparing two related conditions**

two set of scores, from the **same** participants, and the resulting data violate an assumption of the dependent t-test

### 原理

对所有的数据：state 2 - state 1（如果差为0，那么直接筛掉该数据）

然后根据结果的绝对值的大小对数据进行rank分配，处理tied scores的方法相同

然后把数据分为差大于零和差小于零两种，求sum of positive ranks和sum of negative ranks

最终的test statistic为这两个结果里比较小的那个

然后计算significance of the test statistic（公式见课本p668下面），注意样本总数不算差为零的那几个

mean和standard error的计算方法见p670

计算effect size见p673

if p-value<0.05, then the two groups are significantly different

Kruskal-Wallis test
-------------------

**comparing several conditions when different participants take part in each condition and the resulting data violate an assumption of one-way independent ANOVA**

和wilcoxon rank-sum类似，一开始先把各组数据放在一起排rank，然和把各组的rank求和。

各组的test statistic H有一个很复杂的公式，见p767最下面15.1

#### post hoc test

对于所有可能的两两比较，都进行一次wilcoxon rank-sum test，公式见p681的15.2

R中的方法见p683

if p-value<0.05, then the two groups are significantly different

#### the Jonckheere-Terpstra test

和Kruskal-Wallis test类似，只是包括了the order of the groups是否有意义的信息。

R中的方法见p685

Friedman's test
---------------

**differences between conditions when there are more than two conditions and the same participants have been used in all conditions(each case contributes several scores to the data)+violated an assumption of one-way repeated-measures ANOVA**

Friedman's ANOVA

首先把不同的情况下的数据放在不同的列中，然后对**每一行**（也就是说每一个participants）中的列排rank（比如condition 2最小，那么它的rank是1，第二小的是condition 1，那么它的rank就是2……以此类推）

最后，将不同condition（也就是说每一列）的rank相加。test statistics F\_r 的公式还是很复杂，见p689最上方

post hoc test的方法见p691的15.7.6.

if p-value<0.05, then the two groups are significantly different