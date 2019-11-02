# 1.1 finite automata

## finite automata = finite state machine
computational model: idealized computer

### e.x. 自动门
需要1bit来存储state
- state: 开启/关闭
- condition: 前面有人后面没人、前面没人后面没人……

### e.x. Markov chains
patterns of data
## Formal Def of a Finite Automation
A finite automation is a 5-tuple(\(Q, \Sigma , \delta , q_0 ,F\)),where:

- Q is a finite set called the states
- \(\Sigma\) is a finite set called the alphabet
- \(\delta : Q \times \Sigma \rightarrow Q\) is the transition function
- \(q_0 \in Q\) is the start state
- \(F \subseteq Q\) is the set of accept states

**language of machine M: L(M)=A**

If \(A=\{w|M accepts w\}\), then M recognizes A

## Formal Def of Computation
Let M=(\(Q, \Sigma , \delta , q_0 , F\)) be a finite automation and \(w=w_1 w_2 \cdots w_n\) be a string over alphabet \(\Sigma\). Then M accepts w if a sequence of states \(r_0 r_1 \cdots r_n\) exists in Q with the following three conditions:

- \(r_0 = q_0\)
- \(\delta (r_i , w_{i+1}) = r_{i+1}\), for \(i = 0, \cdots , n-1\)
- \(r_n \in F\)

A language is called a **regular language** if some finite automation recognizes it.

## Designing Finite Automata
收集作出决策（每读入一个字母时）所必要的最精简信息，然后决定用几个状态来储存这些信息，并寻找他们之间的逻辑，最后确定start state和set of accept states。

另外还可以分类讨论每一个input

## The Regular Operations
i.e. the properties of finite automata & regular languages
**Let A and B be languages.**
Define regular operations as follows:

- Union: \(A \cup B = \{x | x \in A \text{ or } x \in B\}\)
- Concatenation: \(A \circ B = \{xy | x \in A \text{ and } y \in B \}\)
- Star: \(A^* = \{ x_1 x_2 \cdots x_k | k \geq 0 \text{ and each } x_i \in A\}\)

The class of regular languages is closed under these operation.
(It will be easier for us to prove after learning nondeterminism.)
