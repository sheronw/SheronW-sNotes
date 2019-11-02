# 1.3 regular expressions

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


