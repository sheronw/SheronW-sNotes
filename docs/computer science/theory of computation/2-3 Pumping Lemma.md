# 2.3 Pumping Lemma for CFL

## Definition of Pumping Lemma

Let \(L\) be a context-free language. Then there is a constant \(p\) so that if \(z \in L\) and \(|z| \geq p\) then \(z\) can be decomposed into 5 parts: \(z = uvwxy\). so that:

- \(|vwx| \leq p\)
- \(vx \not = \\varepsilon\)
- \(\forall i, uviwx^i y \in L\)

## An non-CFL to prove that cannot be pumped

$$L = \{0^n 1^n 2^n | n \geq 0\}$$

Suppose it is context free. Let p be its pumping constant. Let \(z = 0^p1^p 2^p\) be a string longer than p and in the language. Suppose we have a decomposition \(uvwxy\), where

## An non-CFL that can be pumped

