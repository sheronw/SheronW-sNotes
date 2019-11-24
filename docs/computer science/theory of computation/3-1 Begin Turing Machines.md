# 3.1 Begin Turing Machines

## Definition

### Verbal Def

A Turing Machine has a finite state controller and a tape that is infinite in both directions. The tape is initially blank except for the input. The controller starts at the beginning of the input and reads one tape symbol at a time. A move consists of:

1. read the current tape symbol
2. change the state of the controller
3. write a new symbol over the one we read
4. move left or right one symbol on the tape

A Turing Machine accepts input if it ever moves into a final state. (Don't need to go over all input characters.)

### Formal Def

a Turing Machine is \((Q,\Sigma,\Gamma,\delta,s,B,F)​\), where:

- \(Q\) is the set of states
- \(\Sigma\) is the alphabet of input symbols
- \(\Gamma\) is the tape alphabet \(\Sigma<\Gamma\)
- \(\delta\) is the transition function \(\sigma(q,a)=(r, b,R)\):if you are in state q and a is the current take symbol, then switch to state r and change the symbol to b and move right.
- \(s\) is the start state
- \(B\) is the blank symbol in the tape (which is blank on the tape)
- \(F\) is the set of final states



### Example

$$L = \{0^n 1^n | n>0\}$$

\(q_0\) : if see 0, overwrite it with X and move R, go into \(q_1\). If see Y, go into \(q_3\).

\(q_1\) : if wee Y or 0, moving R until we find 1 (overwrite with Y and move L, go into \(q_2\). If we see anything other than that, we fail.

\(q_2\): Move L over 0s and Ys. When we get to X move R to \(q_0\)

\(q_3\): move R over Ys, if we get to a B then accept.

## Features

Configuration (write all current symbols on the stack and put the state symbol before the position of current head)

We say that a L accepted by a TM is **recursively enumerable** (know result only when halts), halts in a input is **recursive**(yes/no decider).

## Variances

We can think of a TM with k synchonized tracks by using ordered tuples (symbol of first track, symbol of second track, etc.). Usually the first track contains the input and the others initially blank.

We could also have multiple independent tapes. To achieve that, we have to use one taple and one head to simulate all those independent tapes.

Also, any deterministic TM could simulate non-deterministic TMs.

We can use TM to simulate multi-stack PDA, and we can use 2-stack PDA to simulate TM.