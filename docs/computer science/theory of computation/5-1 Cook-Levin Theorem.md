# 5.1 Cook-Levin Theorem

## P and NP

A deterministic TM has time constraints T(n) if for every input w with \(|w| \leq n\), the TM halts (whether or not it accepts w) in no more than T(n) steps.

$$\text{The class }P = \{L |\text{ L is a language accepted by some TM with polynomial time complexity}\}$$

We say nondeterministic TM has time complexity T(n) if for every input w with \(|w| \leq n\), the TM can halt on w in an accept state, if TM accepts w in no more than T(n) steps.

$$\text{The class }NP = \{L |\text{ L is a language accepted by some non-deterministic TM with polynomial time complexity}\}$$

Let L be a language in NP. We say L is **NP-Complete** if for every language A in NP there is a polynomial time reduction of A to L in the sense that we can convert any string w in polynomial time to a string w' so that w is in A if and only if w' is in L. A polynomial-time decider for L then gives us a polynomial-time decider for every language in NP.

If L is NP-Complete and in P, then every problem that can be verified in polynomial-time could be solved in polynomial time.

Also, L is **NP-Hard** if every language A in NP could reduces to L in polynomial time. So a **NP-complete ** language must be both in NP and NP-Hard.

## Cook's Theorem

SAT is the language of satisfiable Boolean expressions. (Satisfiable means **some** set of variable values could let this Boolean function be true.)

SAT is NP-Complete. (Every NP languages reduces in polynomial time to SAT.)