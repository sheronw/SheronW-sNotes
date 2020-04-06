# 3 Transactions

## Fundamental Properties of Transcactions

### Atomicity

A transcation is the smallest dividable part in the operation. It cannot be performed partially.

````mysql
begin transaction;

if(failure)
	rollback transaction; // aborts
	
commit transaction; // success
````

### Consistency

Transaction can only read or write an element that:

- got granted a lock on the element
- has not yet released the lock

All elements got locked must be later unlocked.

### Isolation

Concurrently happened transactions have to run in isolation. They are always serializable.

### Durability

Values written or modified by committed transactions will remain committed, even in the face of system crashes or power outages.

## Level of Isolation in SQL

- read uncommitted (totally happens at the same time)
- read committed (will read anything that commited instead of treate current transaction atomically)
- repeatable read (could treat single values but cannot treat large data such as a table)
- serialization (default)

## Transaction

- the default mode in SQL
- Starts with `start transaction` statement
- Ends with `commit` or `rollback` statement
- When user exits, transaction got committed.
- `set autocommit on;` lets every operation treated as separate transaction and committed when completed
- `set [global | session] transaction isolation level level`
- `start transaction read only;`

