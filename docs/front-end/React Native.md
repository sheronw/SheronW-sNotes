# React Native

## Path Convention

src(components, screens)

assets(images etc.)

## Style Sheet

flexDirection: 'row'
justifyContent: 'space-between'
alignItems: 'center'

child fill the parent: ...StyleSheet.absoluteFillObject

### Box Object Model

margin border padding

### Flex Box

children's layout in a parent

### Position

a child's layout in order to override the above two

position: 'absolute' could ignore all siblings

## React Navigation

`npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack@1.10.3`

For App.js:

```javascript
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import screen;
const navigator = createStackNavigtor({screens},{other});
export default createAppContainer(navigator);
```



## State

guaranteed update:

```javascript
const addGoalHandler = () =>{
	setGoals(currentGoals => [...currentGoals, enteredGoal]);
};
```
### Reducer

```javascript
const [state, runReducer(dispatch)] = useReducer(reducer, {default})
```

reducer: (state, action)

some conventions for action object: type for string that describe the operation, payload for the amount or data

useState(function,[value]), will render only for the first time or the value(s) changed

## Component

### in a single file

1. import libraries
2. create a function that returns some JSX
3. create stylesheet object
4. export the component

(it is better to save all components into a folder called components or src)

```javascript
const GoalInput = props => {
    return ();
}

export default GoalInput;
```

you could return an empty tag <></>

views will fill the whole android screen hidden behind the bottom bar, so you have to set view flex:1

### Touchable

(TouchableOpacity or without feedback) you need to wrap everything in it like view

ScrollView

### FlatList

it optimizes scrolling by only rendering what's required than ScrollView

data: a list of objects with property key(or id)

renderItem: a function, input is the object

you could also use keyExtractor to get a key for each item

If the key is not provided RN have to regenerate the whole list if anything got deleted.

#### some props

horizontal(true or false)

showsHorizontalScrollIndicator(show scroll bar or not)

### TextInput

be careful of props: 

autoCapitalize("none"), autoCorrect(false)

onEndEditing

### Modal

float

## Debugging

toggle inspector

remote debugging(in expo)

react native debugger