# 5.1 Cook-Levin Theorem

## P and NP

A deterministic TM has time constraints T(n) if for every input w with \(|w| \leq n\), the TM halts (whether or not it accepts w) in no more than T(n) steps.

$$\text{The class }P = \{L |\text{ L is a language accepted by some TM with polynomial time complexity}\}$$

We say nondeterministic TM has time complexity T(n) if for every input w with \(|w| \leq n\), the TM can halt on w in an accept state, if TM accepts w in no more than T(n) steps.

$$\text{The class }NP = \{L |\text{ L is a language accepted by some non-deterministic TM with polynomial time complexity}\}$$

