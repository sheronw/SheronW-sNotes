# Basic UNIX process

## fork

In C, use `fork()` to fork the program into two process (i.e. copy the whole stack, heap, memory, etc.), one is parent and the other is child.

For parent, `fork()` will return the pid of the child.

For child, `fork()` will return 0.

Return type: `pid_t`

## waitpid

wait until the process with a specific pid ends

## execl

run an external program other than c

## UNIX access

For example:

    -rw-r--r--

index 0: file type
index 1-3: owner
index 4-6: group
index 7-9: other

read write execute (rwx)
