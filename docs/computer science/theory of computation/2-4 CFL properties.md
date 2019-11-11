# 2.4 CFL Properties

**If \(L_1\) and \(L_2\) are context-free languages, then so are:**

- \(L_1 \cup L_2\)
- \(L_1 L_2\)
- \((L_1)*\)

You could genertate new Grammars to prove them easily.

**But the intersection of two CFL are not necessary Context-free.**

Because a stack cannot record the actions of pop and push from two CF languages at the same time.

Example:

$$L_1 = \{0^n 1^n 2^j | n \geq 0, j \geq 0\}$$

$$L_2 = \{0^j 1^n 2^n | j \geq 0, n \geq 0\}$$

$$L_1 \cap L_2 = \{0^n 1^n 2^n | n \geq 0\}$$, which is not CF

**If \(L\) is CF, \(R\) is regular. Then \(L \cap R\) is CF, \(L \backslash R\) is CF.

Why?

$$L \backslash R = L \cap R^c$$

**If L is Context-free, then \(L^{rev}\) is also context free.**

You could just convert L into CNF, then switch the sequence.