# 4.1 Undecidability

Divide TM into two catagories:

- TMs that halts whether or not it accepts its input
- TMs that may run forever on inputs they don't accept

So we have to show some problems to be undecidable.

i.e. Does this TM accept this input?

## A language that's not recursively enumerable

A language L is recursively enumerable if \(L=L(M)\) for some TM \(M\).

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

Then we could construct a table that could represend the characteristic vectors of each languages. Each row means a language and each column is a string, if accept then this cell is 1 and 0 otherwise.

In order to construct \(L_d\), we are using the same trick in discrete math. We could find the diagonal value of this table and flip them. For example, if in the table \(M_i\) accepts \(w_i\) then \(w_i\) is not in \(L_d\) .

### \(L_d\) is not recursively enumerable

No TM could accepts \(L_d\).

Still the same trick in discrete math.

Suppose \(L_d = L(M)\) for some TM \(M\). Then M should be some \(M_i\).

If \(w_i \in L_d\), then \(M_i\) should accepts \(w_i\), but according to the def of \(L_d\), \(w_i\) is not in \(L_d\). Contradiction.

If \(w_i \notin L_d\), then \(M_i\) should not accepts \(w_i\), but according to the def of \(L_d\), \(w_i\) is in \(L_d\). Contradiction.

So M not exists. \(L_d\) is not recursively enumerable.