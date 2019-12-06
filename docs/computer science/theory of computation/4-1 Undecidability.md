# 4.1 Undecidability

Divide TM into two catagories:

- TMs that halts whether or not it accepts its input
- TMs that may run forever on inputs they don't accept

So we have to show some problems to be undecidable.

i.e. Does this TM accept this input?

## Recursive & Recursively Enumerable

A language L is **recursive** if L=L(M) for some Turing machine M such that:

- If w is in L, then M accepts and halts.
- If w is not in L, then M eventually halts, although it never enters an accepting state.

If the language is **recursive** then it is accepted by a TM that always halts.(**Decider**)

A language L is **recursively enumerable** if \(L=L(M)\) for some TM \(M\), but necessary halts for all input. (**Recognizer**)

Not RE > RE > R

If a language is recursive, then its complement is also recursive.

If a language and its complement are both recursively enumerable, then the langauge is recursive.

## A language that's not recursively enumerable

### present TM as a binary string

1.  Represent state \(q_i\) with \(0^i\)
2. Number the tape symbols \(X_1 \cdots X_n\) and represent \(X_i\) with \(0^i\)
3. Encode the directions L as 01 and R as 02
4. Encode the transition \(\delta(q_i,X_j)=(q_k,X_l,D_m)\) as \(0^i10^j10^k10^l10^m\)
5. Encode the complete transition function as \(t_111t_211 \cdots 11t_n\)
   where the \(t_i\) are the encodings of the individual transitions
6. Encode the TM with final state \(t_n\) as \(T1110^n\) where T is the encoding of the transition function

### diagonalization language

The language \(L_d\), the diagonalization language, is the set of strings \(w_i\) such that \(w_i\) is not in \(L(M_i)\).

Because we could write every TM as binary string and binary string is countable, so we could list all TMs as \(M_1 \cdots M_i \cdots \) whose code is \(w_1 \cdots w_i \cdots \).

Not all binary string could represent valid TM, of course. So we could consider them as TMs that accept no string including empty string.

Then we could construct a table that could represented the characteristic vectors of each languages. Each row means a language and each column is a string, if accept then this cell is 1 and 0 otherwise.

In order to construct \(L_d\), we are using the same trick in discrete math. We could find the diagonal value of this table and flip them. For example, if in the table \(M_i\) accepts \(w_i\) then \(w_i\) is not in \(L_d\) .

### \(L_d\) is not recursively enumerable

No TM could accepts \(L_d\).

Still the same trick in discrete math.

Suppose \(L_d = L(M)\) for some TM \(M\). Then M should be some \(M_i\).

If \(w_i \in L_d\), then \(M_i\) should accepts \(w_i\), but according to the def of \(L_d\), \(w_i\) is not in \(L_d\). Contradiction.

If \(w_i \notin L_d\), then \(M_i\) should not accepts \(w_i\), but according to the def of \(L_d\), \(w_i\) is in \(L_d\). Contradiction.

So M not exists. \(L_d\) is not recursively enumerable.

## A language that's RE but not Recursive

The universal language \(L_u\) is {m1111w | m is the encoding of a TM M and w is an input string and M accepts w}.

### Universal Language is RE

We need to build a TM for it. This TM has 3 tapes.

- 1st tape: the string content m1111w
- 2nd tape: one track for the current string w, the other track is the pointer of the current tape symbol(this tape is to simulate the TM m)
- 3rd tape: to record the current state of TM m

For the given string m1111w, first put it to 1st tape, then copy w to the 2nd tape and put the pointer to the start of the string. Then go back to 1st tape and read the start state then write to 3rd tape.

Then, we check the current state on 3rd tape and check the next symbol on 2nd tape, then go back to 1st tape part m to see what should do next. We could go to a final state and halt if m accepts w.

### Universal Language is not Recursive

We will prove it by proving that the complement of universal language is not recursive enumerable.

Suppose the complement of universal language is recursive enumerable, then we could build a Turing Machine T for it. We then make a new TM T'(w) = T(w1111w) such that T' accepts w when T cannot accept w1111w.

Then T' should accept w when w is in diagonal language. But diagonal language is not RE, so there should be no T' or T. 

## Rice's Theorem: Nothing Decidable

**Version 1**

Let Q be any non-trivial property of recursively enumerable languages. Then Q is undecidable.

We identify a **property** of a language with the set of TMs that accept the languages with this property. A non-trivial property is one that applies to some but not all languages.

**Version 2**

Let a be any set of TM. Let \(\textbf{a*} = \{M |\text{ M is a TM that accepts the same languages as some TM in a }\}\)

Then if \(a^*\) is neither empty nor the set of all TM, then \(a^*\) must be undecidable.

**Proof**

Let Grumpy be the TM that doesn't accept any string.

First assume \(a^*\) doesn't include Grumpy. It is clear that \(a^*\) isn't empty.

Let \(M^*\) be any particular TM in \(a^*\). We will use the decider of \(a^*\) to build a decider for \(L_u\), as follows:

Given any pair (M, w), build a new TM M', such that:

$$ M'(x) = \begin{cases}
  M^*(x) &\text{if M accepts w}\\
  M(x) &\text{if M doesn't accept w}
\end{cases}$$

1. If M cannot accept w, then \(M'(w) = M(w)\), both M and M' cannot recognize and accept w. M' cannot accept any string that cannot accepted by M, so M' is equivalent to Grumpy and not in \(a^*\). However, we assumed that \(a^*\) doesn't include Grumpy. Contradiction.
2. If M does accept w, then \(M'(w) = M^*(w)\), that is, M' could accept the same string as some \(M^*\) in \(a^*\). So M' is in \(a^*\).

Then, a decider for \(a^*\) M' could only be \(M*(x)\), which will decide if M accepts w. So it will decide universal language. So the decider of \(a^*\) is not exist and \(a^*\) is undecidable.