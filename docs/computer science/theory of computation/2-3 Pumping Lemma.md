# 2.3 Pumping Lemma for CFL

## Definition of Pumping Lemma

Let \(L\) be a context-free language. Then there is a constant \(p\) so that if \(z \in L\) and \(|z| \geq p\) then \(z\) can be decomposed into 5 parts: \(z = uvwxy\). so that:

- \(|vwx| \leq p\)
- \(vx \not = \varepsilon\)
- \(\forall i, uv^i wx^i y \in L\)

## An non-CFL to prove that cannot be pumped

$$L = \{0^n 1^n 2^n | n \geq 0\}$$

Suppose it is context free. Let p be its pumping constant. Let \(z = 0^p 1^p 2^p\) be a string longer than p and in the language. Suppose we have a decomposition \(uvwxy\), where \(|vwx| \leq p\), so \(uwx\) cannot include all three letters because it is too short.

then we pumped the string to \(uv^2 wx^2 y\), which cannot be in the language. Because the letter that cannot be covered in \(uwx\) cannot get repeated then there is less numbers of it in the new string.

So \(uv^2 wx^2 y\) is not in the language, which contradicted to the pumping lemma.

## An non-CFL that can be pumped

$$L = \{a^i b^j c^k d^l| \text{if i=1 then j=k=l,} i, j, k, l \geq 0\}$$

### L is not CFL

Suppose L is context free. We know that \(ab*c*d*\) is a regular language R. Then the intersection \(L \cap R\) should also be context-free. However, \(L \cap R = \{ab^j c^j d^j | j \geq 0\}\), which is not context-free. Contradiction.

### L can be pumped

$$L = L_1 \cup L_2 \cup L_3$$

$$L_1 = \{b^j c^k d^l | i, j, k \geq 0\}$$

$$L_2 = \{ab^i c^i d^i | i \geq 0\}$$

$$L_3 = \{a^i b^j c^k d^l | i, j, k, l \geq 0\}$$

First of all, \(L_1\) and \(L_3\) are regular languages, so all strings in them can be pumped.

Let p be the pumping constant of \(L_2\), \(z = a b^p c^p d^p\), no matter what the value of \(vwx\) is, the pumped string \(uv^2 w x^w y\) can belong to \(L_3\), which is still in L. So L is pumpable.