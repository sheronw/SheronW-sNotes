# 4.2 More Undecidability Problems

## How to?

Similar to NP-Complete and NP-Hard problems.

First of all we need to find a problems \(P_1\) that is not RE or Recursive.

Then, we reduce \(P_1\) to another problem \(P_2\), such that the decider or recognizer of \(P_2\) could decide or recognize \(P_1\).

(P_2\) should also be non-RE or non-Recursive.

## Some Additional Languages

$$L_e = \{w |\text{ w is the encoding of a TM that accepts no strings }\}$$

$$L_{ne} = \{w |\text{ w is the encoding of a TM that accepts at least one string }\}$$

(L_{ne}) is recursively enumerable but not recursive.
\(L_e\) is not even recursively enumerable.

