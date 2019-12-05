# Cognitive Walkthrough Method

Users like to learn software by exploration, instead of formal training.

Evaluate a proposed interface in the context of one or more specific user tasks.

## Detailed  Description

Two phases:

- preparatory phase: define input such as tasks, action sequences, user population, interface to be analyzed
- analysis phase: real work, i.e. walk through all actions of all tasks

### Define Inputs

1. Who will be the users of the system?(specific background experience or knowledge for both **interface** and **task**)
2. What tasks will be analyzed?(should be concrete and realistic)
3. What is the correct action sequence for each task and how is it described?(how the user is expected to view the task before learning the interface + a description of the sequence of actions that should accomplish the task with the current definition of the interface)
4. How is the interface defined?(Description of prompts before every action)

### Walking Through the Actions

Examining each action and attempting to tell a credible story about why users choose that action, based on assumptions about the user's background knowledge and goals, and on an understanding of the problem-solving process that enables a user to guess the correct action.

heuristic 启发式（教学法） such as label-following

critical features: connect goal description and action; connect action and feedback

1. Will the users try to achieve the right effect?
2. Will the user notice that the correct action is available?
3. Will the user associate the correct action with the effect trying to be achieved?
4. If the correct action is performed, will the user see that progress is being made toward solution of the task?

### Capturing Critical Information During the Evaluation

User knowledge requirements, assumptions about the user population, notes about side issues and design changes, and the credible success story developed during the walkthrough.

A possible practice: Divide these information into 3 groups, one for recording key points of group story, one for classes of users(population, prerequisite, what will be learn during performing tasks), one for side issues and design challenges(in detail if possible).

### Success and Failure Stories

#### Common Features of Success

Users May Know What Effect To Achieve

- it is part of their original task
- they have experience using a system
- the system tells them to do it

User May Know An Action Is Available

- by experience
- seeing some device (button etc.)
- seeing a representation of an action (menu entry etc.)

User May Know An Action Is Appropriate For The Effect They Are Trying To Achieve

- by experience
- the interface provides a prompt or label that connects the action to what they are trying to do
- all other actions look wrong

User May Know Things Are Going OK After An Action

- by experience
- recognize a connection between a system response and what they were trying to do

#### Some Other Problems

- time limits
- physically difficult actions
- dropped **terminator** actions

## Staying on Track and General Fixes

### Staying on Track

Cognitive Walkthrough only tells success story. If any issues generated in one of the actions of the sequence, just assume that the user takes the correct action, record the problem and go to next step.

Also, users might learn new knowledge in previous actions

### General Fixes

Will the user be trying to achieve the right effect?

- eliminate the action or change it to combinations of other action
- provide a prompt about which action to perform
- change parts of the task to get a better understanding

Will the user know that the correct action is available?

- assign the action to a more obvious control

Will the user know that the correct action will achieve the desired effect?

- labor-following,  assign labels that include words that users are likely to use when describing their tasks

If the correct action is taken, will the user see that things are going OK?

- feedback that indicates *what* happened is better than feedback that just indicates that *something* happened
- use term or graphics that relate to the user's description for the task