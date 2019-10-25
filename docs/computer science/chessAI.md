# Chess AI

This note is for those kinds of **zero-sum** games of perfect information, i.e.: we could know that 1 gamer must win and the other must lose, or in a tie; and could predict all variables(i.e. all movements in chess game).

If the environment is really complicated, it could be called **economies** instead of games.

## Max & Min

- \(S_0\): initial state
- player(s): which player has the move
- action(s): a set of legal moves
- result(s,a): transition model, result of a move
- terminal test(s): T when game is over
- utility(s,p): the score at the end of the game(e.g. 0 for lose,1 for win,0.5 for tie)

Game tree:

- node: state
- edge: move

Max first, then min, until the terminal state(has utility)

## Optimal Decisions in Games

### ply

Half move, which means one player move one piece on the board

### minimax value(n)

the utility for MAX of being in the corresponding state, assuming that both players play optimally from there to the end of the game

MAX tends to choice states with bigger value while MIN is the opposite

MINIMAX(s) = 

- utility(s), if terminal test(s)
- \(max_{a \in Actions(s)}\) MINIMAX(result(s,a)), if players(s)=MAX
- \(min_{a \in Actions(s)}\) MINIMAX(result(s,a)), if players(s)=MIN

It is clear that it will be really slow to use recursion to do the calculation.

## Alpha-Beta Pruning

consider a node n in tree such that player has a choice of moving to that node, if player has a better choice m either at parent node or further up, then n will never be reached

Alpha = the value of the best(i.e. highest) choice we found so far at any point along the path for MAX

Beta = the value of the best(i.e. lowest) choice we found so far at any point along the path for MIN

## Move Ordering

If the first move to be examined is optimal, then the other moves can be eliminated to save time.

For example, search for one layer down, record the best move, then use this order to search one more layer down.

## Imperfect Real-Time Decisions

It is possible to search the whole tree, so we introduced evaluation function:

H-Minimax(s,d) = 

- Eval(s), if cutoff-test(s,d)
- \(max_{a \in Actions(s)}\) H-MINIMAX(result(s,a),d+1), if players(s)=MAX
- \(min_{a \in Actions(s)}\) H-MINIMAX(result(s,a),d+1), if players(s)=MIN

When cutoof-test(s,d), we could use evaluation function directly.

## Evaluation Function

We could design the evaluation function according to the experience of all human being in the history of chess. We could count the number of pieces, types of pieces or some certain piece in some certain position, etc.

We could also use machine learning to calculate the coeffecient of the function.

## Cutting off Search

If the depth is greater than a certain value, or reached the terminal state, cutoff-test(state, depth) should be T.

The depth should depends on your speed of the AI.

Or: iterative deepening

## Forward Pruning

Proburt algs(use probability to eliminate choices)

## Look up

use existed chess data