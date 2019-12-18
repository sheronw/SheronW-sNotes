# 1.3 regular expressions

## Properties of Regular Language

Unions, intersections, differences and complements of regular languages are regular.

## Formal Def of a Regular Expression

Say that R is a regular expression if R is:
- \(a\) for some \(a\) in the alphabet \(\Sigma\)
- \(\varepsilon\)
- \(\emptyset\)
- (\(R_1 \cup R_2\))
- (\(R_1 \circ R_2\))
- (\(R_1^*\))

(\(R_1 R_2\)) are regualr expressions(inductive def)
### some conclusions
- L(R): the language of R
- concatenating the empty set to any set yields the empty set, so \(1 * \emptyset = \emptyset\)
- \(\emptyset * = \{\varepsilon\}\)
- \(R \cup \emptyset = R\)
- \(R \circ \varepsilon = R\)

## Equivalence with Finite Automata
- hint: regular language is one that is recognized by some finite automation
- a language is regular iff some regular expression describes it
- prove see textbook p67 p70
- **GNFA**: generalized nondeterministic finite automation, its transition arrows may have any regular expression as labels

## DFA to regular expression

$$R^k_{ij}=R^{k-1}_{ik}(R^{k-1}_{kk})^*R^{k-1}_{kj}$$

Write a table out.

Colum: k=0,1,...n-1

Row: all combination of two states

Base Case: when k=0, if there is a transition(including this state and itself, in this case is \(\varepsilon\)), then is the combination(or+transitions if more than one); if there is not, then it is empty.

Then fill the table using formula.

The result should be \(R^n_{start+accept}\)



## Pumping Lemma

Suppose it is regular. Let p be its pumping constant.

Consider the string w=xxx, which is a string in this language with length greater than p.

There must be a pumping decomposition of w: w=xyz, where \(|xy| \leq p\) and \(|y|>0\).

Prove this compositions variants is not in the language.

Then this violates the pumping lemma.

So it is not regular.

