# 2.5 Decision Algorithms

## Given CFL L and string w, check if w in L

convert L to CNF. We know binary tree of height n has at least n+1 leaves. Find all parse tree with height |w|, then we will find all strings in L such that with length less or equal to |w|. Go through all these strings and check if w belongs to them.

## Decide if a given CFL is empty or infinite

Mark all nullable symbols, if S is marked then CFL is empty.

Convert L to CNF. If CFL is finite, there should not be any repeated symbols along a path of any parse tree of any string. So just check find all parse tree with height from l to 2l where l is the number of non-terminal symbols in grammar. If we could find at least one, then this CFL is infinite.

## Problems that are not decidable

- two CFL is the same
- intersection of 2 CFL is empty
- a CFL \(\Sigma ^*\)
- a given grammar unbiguous
- a given language inheritantly unbiguous(all possible parse tree unbigous)

