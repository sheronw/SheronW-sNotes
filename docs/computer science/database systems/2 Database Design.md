# 2 Database Design

## Functional Dependencies

### definition

Let \(A_1, A_2, \cdots, A_k\) and \(B\) be attributes of a relation \(R\).

B is **functionally dependent** on \(\{A_1, A_2, \cdots, A_k\}\)  if and only if whenever two tuples t and u agree on \(A_1, A_2, \cdots, A_k\) , they must also agree on B.

Any attribute in R is functionally dependent on its superkey.

For example, in relation Course(<u>DeptCode</u>, <u>CourseNumber</u>, Title, Description):

Both Title and Description is functionally dependent on {DeptCode, CourseNumber}.

### properties

- Reflexivity. An attribute is always functionally dependent on itself.
- Augmentation. That is, if B is functionally dependent on A, B is functionally dependent on any superset of A.
- Transitivity. If B is functionally dependent on A and C is functionally dependent on B, then C is functionally dependent on A.
- Splitting rule. If a set of attributes A is functionally dependent on another set of attributes B. Then every element in A is functionally dependent on B.
- Combining rule. The opposite of Splitting rule.

### closure

Suppose \(A=A_1, A_2, \cdots, A_m\) is aset of attributes in a relation.

S is a set of functional dependencies.

The **closure** of A, A+ or \(\{A_1, A_2, \cdots, A_m\}+\) as the smallest superset of A, which includes all attributes which are functionally determined by the ones in A.

## Normalization

> Functional dependencies in a relation are removed by decomposing it into several smaller relations.

### why we need normalization

relation anomalies because of different forms of redundancy in relations

redundancy, update anomaly, deletion anomaly

### first normal form (1NF)

1NF has no multivalued attributes, that is, it is a flat file.

All relations as we have defined them are in 1NF.

### second normal form (2NF)

2NF possesses **key completeness**, that is, every non-prime attribute(an attribute which is not part of a candidate key) depends on the entire primary key(not on a proper subset of it).

### third normal form (3NF)

For each nontrivial(Y is not a subset of X) functional dependency \(X \Rightarrow Y\), either X is a superkey or Y contains no non-prime attributes.

### Boyce Codd normal form (BCNF)

For **each** nontribial functional dependency \(X \Rightarrow Y\), X is a superkey.

Every BCNF is also 2NF and 3NF.

### normalization procedure

1. let R(A) be a relation and A be its set of attributes
2. Suppose R has a functional dependency \(X \Rightarrow Y\), where X is not super key.
3. Decompose R into two relationships: \(R_1(X+)\) and \(R_2(X \cap (A-X+))\).
4. Then apply this recursively to both \(R_1\) and \(R_2\).

### chase test

(example in lecture 11)

general procedure for determining whether or not a given decomposition is lossless

If we can reduce a row in the tableau to the original tuple, then the join is lossless.

### forth normal form (4NF)

**multivaluted dependency**: occurs when a relation has more than one independent, multivaluted attribute (A determines B and C, but B and C are independent)

A 4NF relation means it is in BCNF and no multivalued dependencies.

You could normalize a BCNF form R(A) with a multivalued dependency \(X \Rightarrow Y\) by decomposing R into \(R_1(R-Y)\) and \(R_2(X\cap Y)\).