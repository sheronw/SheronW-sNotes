# Context-Free & PDA

##  The Chomsky Hierarchy 

| Grammar           | Rules             | Machine                            |
| ----------------- | ----------------- | ---------------------------------- |
| Regular           | A -> a or A -> aB | DFA                                |
| Context-free      | A -> alpha        | PDA                                |
| Context-sensitive | alpha -> beta     | Turing Machine with bounded memory |
| Arbitrary         | /                 | Turing Machine                     |

*alpha & beta means combinations of both terminal and non-terminal symbols*

## Ambiguity

 A grammar is called **ambiguous** if it produces two different parse trees for the same string. 

 We can use such hierarchies to disambiguate grammars. 

 The problem of determining whether a given grammar is ambiguous is undecidable. 

## PDA

\(\epsilon - NFA\)+stack

###  Transition Notation

| Notation          | Means                                                        |
| ----------------- | ------------------------------------------------------------ |
| a,b\|cb           | on input a with b on top of the stack, push c (on top of b)  |
| a,b\|c            | on input a with b on top of the stack, pop the stack and push c |
| a,b\|\(\epsilon\) | on input a with b on top of the stack, pop the stack         |

ID Analysis: (State, remained input, stuffs on the stack)

from top of the stack to the bottom: from left to right

## PDA <=> Context-Free Grammar

### Context-Free Grammar => PDA

construct a PDA that has only one state Q accepted by empty stack

- begin: \(\epsilon, \epsilon | S\)
- for \(A = A_1 \cdots A_k\): \(\epsilon, A | A_1 \cdots A_k\)
- for terminal symbol a: \(a,a | \epsilon\)

this PDA just use epsilon to push the rule to the stack, cancel out corresponding chars and do it over and over again until both the stack and the string are empty

### PDA => Context-Free Grammar

 Chomsky is a f**king genius.

construct a huge grammar between any possible states

[Handout](http://cs.oberlin.edu/~bob/cs383/Class%20Notes/October/October%2018/Chomsky%20contruction%20notes.pdf)