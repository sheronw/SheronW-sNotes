# 1.2 nondeterminism

- Determinism(DFA) is a subset of nondeterminism(NFA).
- For each letter in DFA, it could only be on only one arrow.
- NFA may have \(\varepsilon\) on the arrow，means one or many arrows may exit from this state(zero).
- If a string in a branch is accepted, then NFA accepts the input string.

## Formal Def of NFA
A nondeterministic finite automation is a 5-tuple(\(Q, \Sigma, \delta, q_0, F\)), where:

- \(Q\) is a Finite set of states
- \(\Sigma\) is a finite alphabet
- \(\delta : Q \times \Sigma_{\varepsilon} \rightarrow P(Q)\) is the transition function
- \(q_0 \in Q\) is the start state
- \(F \subseteq Q\) is the set of accept states

Formal Def of **computation** for an NFA:

Let N=(\(Q, \Sigma, \delta, q_0, F\)) be an NFA and \(w\) a string over the alphabet \(\Sigma\). Then we say that N asscepts \(w\) if we can write \(w\) as \(w=y_1 y_2 \cdots y_m\), where each \(y_i\) is a member of \(\Sigma_{\varepsilon}\) and a sequence of states \(r_0, r_1, \cdots, r_m\) exists in \(Q\) with the following three conditions:

- \(r_0 = q_0\)
- \(r_{i+1} \in \delta (r_i, y_{i+1}) \text{ , for } i=0, \cdots, m-1\)
- \(r_m \in F\)

## Equivalence of NFAs & DFAs
Two machines are equivalent if they recognize the same language.

Every nondeterministic finite automation has an equivalent deterministic finite automation.

### Convert NFA to DFA

From start state.

For each state and each alphabet *a*, create a new state(the combination of all possible state using this character), and make *a* transition from this state to the new state.

For the combination state, if any of the state inside of it has the certain transition, then it counts for the transition.



## \(\varepsilon-NFA\)

### Convert \(\varepsilon-NFA\) to DFA

First find the \(\varepsilon\) closure of start state.

For each state, find the next state using the same method as NFA to DFA. But this state should be the combination of all states' \(\varepsilon\) closure.

