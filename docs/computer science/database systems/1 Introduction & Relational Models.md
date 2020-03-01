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