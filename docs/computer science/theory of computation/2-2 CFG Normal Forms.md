# 2.1 Normal Forms for CFG

A grammar is said to be in **Chomsky Normal Form (CNF)** if all of its grammar rules follow one of the two patterns:

- X => YZ (exactly 2 non-terminals on the right side)
- X => a (exactly 1 terminal on the right side)

So the parse tree is a binary tree!

## CFG to CNF

### Step 1: Deal with nullable symbols.

First we have to find nullable symbols. Simple. Using a stack, go from all of \(\varepsilon\), for each symbols X goes by, if there is a rule such that all of the symbols on the right hand side are nullable, then this symbol X is nullable.

To Deal with nullable symbols in the grammar:

- remove all nullable symbols
- if there is a rule that has only 1 nullable symbol on the right, then change this rule into *original rule | rule without this symbol*(X => aYb, if Y is nullable then change it to X=> aYb | ab)
- similarly, if there is a rule that has m nullable symbols, replace this rule into conbination of\( 2^m\) possible rules(exist or not exist)

### Step 2: Eliminate unit rules.

(A, C) is a unit pair if A=>B, B=>C. This kind of forms is not allowed in CNF.

To find any unit pairs, first we mark all nonterminal Symbol(A,A). If (A, B) is marked and A=>C, then we mark(C,B). Continue this procedure until no more pair could be marked.

To deal with unit rules in the grammar G:

- create a new empty grammar G'
- for each unit pair (A, B), if B=>a in G, then add A=>a to G'

### Step 3: Eliminate all symbols that aren't generating.

Using a stack, go from terminal symbols only to S, mark any symbol meets, then delete unmarked symbols.

### Step 4: Eliminate all symbols that aren't reachable.

Similarly, using a stack, go from S to terminal symbols, mark any symbol meets, then delete unmarked symbols.

The sequence of 3 and 4 matters, if we remove unreachable then ungenerating, we will have some rules that has some symbol X on the left hand side that start state cannot go to(two states that has no connections). Because we could go to this X before we move all ungenerating rules, so it is left.

### Step 5: Substitute terminal symbols.

For any grammar \(A = X_1\cdots X_i\cdots X_n\) where n>1, if \(X_i\) is a terminal symbol, then we substitue \(X_i\) using \(A_i\) and add a new rule \(A_i \Rightarrow X_i\).

### Step 6: Split long rules.

For any grammar \(A = X_1\cdots X_n\) where n>2, make a new set of rules:

$$A \Rightarrow X_1B_1$$

$$B_1 \Rightarrow X_2B_2$$

$$\cdots$$

$$B_{n-3} \Rightarrow X_{n-2}B_{n-2}$$

$$B_{n-2}\Rightarrow X_{n-1}X_n$$

Where \(B_i\) are new nonterminal symbols.

So every context-free language has a CNF grammar that derives all of the language except {\(\varepsilon\)}.