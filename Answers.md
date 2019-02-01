<<------I answered the first one before Caitlin told us not to so im just gonna leave it here------->>

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- 3 of them would be, Array.Map because it returns a new array. Then there is Array.Filter which also creates and
  returns a new array. Lastly one for an object could Object.Assign which creates and returns a new object and
  you can change some of the values in the new object before you return it.
- The method we use to create a new object while extending the properties of another would be Object.Assign but a
  much easier method would be to use empty curly braces signifying a new object and then use the spread operator
  to spread in all of the key value pairs from the old object and then below that modify or add whataver properties
  you want.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Action Creators are functions that return objects aka actions, and those contain a type and can contain a payload
  These actions that are created by the action creators are sent through any middleware if there is any and then they go to the reducers which use a switch statement to look at the type property of the action coming in and depending on that the reducer will execute some logic to update the store. The store is what holds all of the state in the application, it is the single source of truth for the application because that data in the store
  is the same throughout the application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is state that can be accessed anywhere in the application so if all you components need to access that state at some point its probably better that you have that data in application state. Component state is state that only the component that has the state and its children can access, this kinda state is better if you have something like controlled inputs for a component. It's likely that no other component will need to keep track of changes to the values in a controlled input so you use component state to keep track of the changes as they happen and then pass the value to application state once the user is done entering whatever data needed to go into the inputs.

4.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux thunk is a middleware for redux and what it allows us to do is pass functions from our action creators. It also allows us to get access to the dispatch function. This means we can dispatch actions asynchronously for example. We can dispatch an action when we begin fetching data then use a promise to say, okay when we get the data, return here and either dispatch a success action to the reducer or send a failure action to the reducer.
