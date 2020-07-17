# Concurrency

## Basic Concepts

### Threads

The fundamental unit of execution within an application. Each thread has its own stack and runs independently from other threads (but they share resources by default).

 **data corruption**: a side effect when two threads write data to memory at the same time

Implementation:

- **native/kernel-level threads**: threads managed by OS
- **green threads**: threads implemented by software layers such as VM

**preemptive threading**: OS switches from thread to thread, giving each thread short time to run

**context switch**: suspend one thread to let another thread run

### System Threads vs User Threads

System thread is the thread created and managed by the system, and it is the first and the main thread of the application. Usually application will stop when system thread stops. User Thread is created by application to do other tasks such as handling network or user interface then sending events to main thread.

### Monitors and Semaphores

Two **threads synchronization** mechanisms.

**monitor**: set of routines protected by a mutual exclusion lock

A thread could execute only when it has a lock and only one thread could have the lock at the same time. A thread that has the lock could waiting for some events and suspend using this routine, and the other waiting thread could do their job at that time. When event occurs, the previous thread could could back.

**semaphore**: a lock that protects a shared resource, have to acquire and release the lock manually, so it is a simpler construct with more complex usage

- mutex semaphore: one thread acquire the lock and other wait until unblocked then enter
- counting semaphores: maximum of n threads at a given time
- event semaphores: notify other threads when an event occurred

System will usually report error or timeout if cannot acquire the resource in a certain time.

Also, it will be slower when using thread-free features so many library will provide to versions for better performance or safety need.

### Dead Locks

<del>陷 入 僵 局</del>

Means each thread got permanently stalled when each cannot run to the point of releasing the lock that the other needs. Similar thing happens in SQL transaction.

How to: when needs to acquire several locks, always acquire the locks in the same order and release them in the same reverse order. This will be hard to implement in big projects, though.

### Node.js

- cluster mode: distribute processes to different cores
- worker threads: a new thread that could communicate with main thread (using Promise, for example) and handle some time consuming jobs

Here're [two easy examples](https://tsh.io/blog/simple-guide-concurrency-node-js/) (the second one did not handle thread re-use):

<script src="https://gist.github.com/tsh-code/84cc0ccdd4261aaa5b041ef92e49699d.js"></script>
<script src="https://gist.github.com/tsh-code/623bee22bb3b0cd032845336dc032855.js"></script>
## Busy Waiting

**Busy waiting** means a thread create another thread to do work, continue active but do nothing but using processor cycles, just to wait for the other thread finish the job. We could use monitor or semaphore to avoid it. For example, lock the previous process until the second one ends and notify it. However, if it takes more time to acquire a lock than finish the task, it is more efficient to use a spinlock that busy waiting for a little bit of time. Another possibility is one thread per core, and the first core need to receive data from the second core to do works next. However, this circumstance is rare in high-level languages.

## Producer/Consumer

> Two threads share a fixed-size buffer and index to access buffer. The producer thread place number into the buffer and the consumer thread remove the number from the buffer.

It is pretty easy to write a non-concurrent version of it, just create two threads that add numbers and remove numbers respectively while true.  However, `while true` leads to busy waiting, and if they are using the common index without concurrency control, one thread might update index and does nothing then another thread using the wrong index.

What about changing add or remove function to synchronized function in Java (for example)? When the buffer is empty and remove got called, the producer thread have to busy waiting it end forever. And it is the same when the buffer is full and add got called. Even for the other cases, another thread have to busy waiting for another thread to do the add or remove job then enter.

So we need to add this condition to the code, when buffer is full during add or empty during remove, we should lock this thread until the buffer is not full or empty. Also, after each remove or add procedure finished successfully,  the thread should notify the other one.

### The Dining Philosophers

> Five silent philosophers sit at a round table with bowls of spaghetti. Forks are placed between each pair of adjacent philosophers.
>
> Each philosopher must alternately think and eat. However, a philosopher can only eat spaghetti when they have both left and right forks. Each fork can be held by only one philosopher and so a philosopher can use the fork only if it is not being used by another philosopher. After an individual philosopher finishes eating, they need to put down both forks so that the forks become available to others. A philosopher can only take the fork on their right or the one on their left as they become available and they cannot start eating before getting both forks.
>
> Eating is not limited by the remaining amounts of spaghetti or stomach space; an infinite supply and an infinite demand are assumed.
>
> [Dining philosophers problem, Wikipedia](https://en.wikipedia.org/wiki/Dining_philosophers_problem)

First of all, just as the last problem, we could figure out one algorithm without considering concurrency, that is, for each philosopher:

- wait for the left fork available
- wait for the right fork for available
- eat for a while
- put both forks down and repeat all above

However, this algorithm might leads to a deadlock: for example, all philosophers get the left for available, and they are all waiting for the right fork. As there are only five forks in total this situation will last forever.

The easiest way to prevent them stay hungry forever is to add a timeout mechanism. If one philosopher hold the left fork and wait for a certain amount of time, then he or she could just put the left fork down. However, even this will work, but it cannot prevent philosophers from reaching the deadlock state.

Let's see what else we could do. If we mimic the process of picking left fork one by one, the deadlock will happen when the fifth philosopher picks the left fork. So what we could do is to let the last philosopher to pick up the right fork first, which means, if we order the forks from 0 to 4, each philosopher must pick up the available forks that has a smaller order. But in the real world, it is not that practical as we cannot know all details of the huge data we are processing. Also, we could set up a condition that only 4 philosophers could hold the fork(s) at one time, and the result is similar.

But the method benefits the philosopher in the middle a lot more than others. We could change the rule a little bit, instead of letting all philosophers wait for the left fork then right fork, we could let the odd user pick up left then right while let the even user pick up right then left, which means, if we order the forks from 0 to 4, always force philosophers pick odd forks first. Then we could find that the "competition" for forks got separated into groups in stead of a long line for the whole table.

Or also, we could introduce a waiter to force the philosopher to pick up the two forks at the same time or just pick up nothing. As there is only one waiter, there could be only one philosopher that gets the permission to pick up both forks at one time.