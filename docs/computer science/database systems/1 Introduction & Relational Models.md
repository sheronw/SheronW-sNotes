# 1 Introduction & Relational Model

## Data Models

### Hierarchical Model

- one-to-many relationships
- tree

### Network Model

- many numbers of many-to-many relationships
- introduced pointers
- acyclic directed graph
- records (vertice) and sets (edge)
- several items with the same kind of records will use linked lists

### Relational Model

- many-to-many relationships
- decomposing many-to-many relationship into two one-to-many relationships using intersection record

## Relational Model

### General Terminology

- tuple: a row in a table (usually considered to be unordered and non-identical)
- relation: a two-dimensional table of data
- attribute: a column in a table (usually considered as unordered)
- domain: the set of permissible values for a given attribute
- schema: \(R(A_1, A_2, \cdots, A_n)\) consisting of the name of the relation followed by its attributes
- component: an atomic single value of an attribute (structure NG)
- instance of a schema: the current contents of a relation

### Keys in Relational Model

- <u>primary key</u>: one key that uniquely identify tuples in the relation
- secondary key: any key whichis not primary
- superkey: any set of attributes which satisfies uniqueness condition
- key: a minimal superkey, no proper subset of the key is a superkey

## Relational Algebra

### ordinary set operations

#### set-level

- $R \cap S$
- $R \cup S$
- $R-S$
- $S-R$

#### projection

$\Pi_{A_1,A_2,\cdots,A_k}(R)$

the relation obtained by selecting attributes from the relation and remove others

#### selection

$\sigma_C(R)$

the set of tuples in R which satisfy the condition C

#### join

Let \(R(A_1, A_2, \cdots, A_m, B_1, B_2, \cdots, B_n)\) and \(S(A_1, A_2, \cdots, A_m, C_1, C_2, \cdots, C_k)\) be two relations that has some attributes in common.

Then the **natural join** of R and S \(R \Join S\) is:

$\{(A_1, A_2, \cdots,A_m, B_1, B_2, \cdots, B_n, C_1, C_2, \cdots, C_k)\text{ | }\\(A_1, A_2, \cdots, A_m, B_1, B_2, \cdots, B_n)\text{ is a number of R and }\\(A_1, A_2, \cdots, A_m, C_1, C_2, \cdots, C_k)\text{ is a number of S}\}$

The **theta join** of R and S on condition C \(R \Join_C S\) is: the set of elements of the cartesian product which satisfy the join condition C.

#### renaming

$\rho_{S(A_1,A_2,\cdots,A_n)}(R)$

rename R to S, with attributes rename to \(A_1, A_2, \cdots, A_n\).

### bags

> A bag is similar to a set, but allows multiple occurrences of an element.

#### duplicate elimination

If R is a relation then \(\delta (R)\) denotes duplicate elimination.

#### aggregation

operators: COUNT, SUM, MAX, MIN, AVG

Example: MAX(width)(Artworks)

#### grouping

If R is a relation, then an expression using grouping is:

$\gamma_{\text{grouping attributes, aggregation applied to groups} \rightarrow \text{name for created attribute}}(R)$

Example:

$\gamma_{\text{studentSSN, COUNT(CRN)} \rightarrow NumberOfCoursesTaken}(Enroll)$

#### extended projection

If R is a relation, then an expression using extended projection is:

$\pi_{\text{grouping attributes, operation applied to groups} \rightarrow \text{name for created attribute}}(R)$

Example:

$\pi_{\text{studentSSN, Score1+Score2} \rightarrow TotalScore}(Scores)$

#### sorting

$\tau_{PrimarySortKey, SecondarySortKey}(R)$

Ordered by primary sort key then secondary sort key and so on.

#### outerjoin

Sometimes there is no matching tuple for some tuples and they got disappeared in the joined relation. So outerjoin would keep themand leave the unmatched part a null value \(\perp\).

For R and S:

- in left outerjoin, only dangling tuples from R are added
- in right outerjoin, only dangling tuples from S are added

You could also define a outer theta-join using the same way as before.