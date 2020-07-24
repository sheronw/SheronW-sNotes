# 5 Database in Interview

### Relational Databases

Databases that stored in tables, with columns (attributes) and rows (tuples). Schema is the definition of the table, such as column name and data type. Usually we consider the rows are unsorted.

Keys are set of columns that could uniquely identify the row. Usually there will be a single **primary key** could do that job. If there is no primary key, the database will assign an ID for each row.

A table could link to another table using a foreign key, which is a column in other table, usually the primary key. When each foreign key exists as a key in the other table the database will have **referential integrity**. So when attempting to delete a row with a key that exists in another table as a foreign key there will be constraints.

### SQL

Aka Structured query language.

For this part, go through the database lab 6 for table creation and basic usage.

- A WHERE clause is used is filter records from a result.  The filter occurs before any groupings are made.
- A HAVING clause is used to filter values from a group.

Left outer join retains all rows from the first table but only matching rows from the second; right outer join retains all rows from the second table but only matching rows from the first.

#### Ternary Logic

SQL use a three-valued logic, which are `TRUE`, `FALSE` and `UNKNOWN`. `UNKNOWN` usually happens when the data is not founded or mining so that we cannot calculate the logic value. It generally works like `FALSE` but has a lower weight than  `FALSE`. For example, `FALSE AND UNKNOWN` will return `FALSE` while `FALSE OR UNKNOWN` will return `UNKNOWN`.

As a result, you cannot check `NULL` in SQL using `=`, which will return `UNKNOWN` for all null and not null values. The correct way to do it is using `IS NULL`.

### NoSQL

Aka any database that does not conform to the relational model embodied by SQL. Such as Firebase (object databases) and Cassandra (hybrid key-value/column databases).

#### Object Databases

- consistent with the object model used in OOP
- when selected a specfic nodes the data fetching will be fast
- however when the hierachy becomes complicated it is difficult to fetch the data

#### Hybrid Key-Value/Column Databases

Reason why we need this: the traditional relational database has the flexibility to join, but limits the performance and is not needed in most cases. For example, the status of users of social media requires high read/write volumes but rarely needs associate with more than one user.

- requires duplication and need more storagfe space
- better performance than SQL
- for example, add the updated status to both the users' table and the table of groups that users belong to

### Database Transactions

See notes 3.

### Distributed Databases

Aka data stored at multiple locations across anetwork.

CAP Theorem:

- consistency: every read returns the most recent write
- accessibility: every request receives a response, even it might be the most recent write
- partitionability: the system could partitioned into nodes and the system continue working even when some of the nodes go down

 It is impossible to achieve all three aspects, so you have to choose what you really want. Or: in order to have both consistency and accessibility, the system cannot be partitioned.
