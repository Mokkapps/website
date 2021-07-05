---
title: "My Top React Interview Questions"
categories:
  - "development"
  - "career"
  - "react"
  - "frontend"
cover: "images/cover.jpg"
---

This article summarizes a list of React interview questions that I would ask candidates and that I get often asked in interviews.

## Table of Contents

* [1. What is React?](#1-what-is-react)
* [2. What are the advantages of React?](#2-what-are-the-advantages-of-react)
* [3. What are disadvantages of React?](#3-what-are-disadvantages-of-react)
* [4. What is JSX?](#4-what-is-jsx)
* [5. How to pass data between components?](#5-how-to-pass-data-between-components)
* [6. What are the differences between functional and class components?](#6-what-are-the-differences-between-functional-and-class-components)
* [7. What is the Virtual DOM?](#7-what-is-the-virtual-dom)
* [8. Is the Shadow DOM the same as the Virtual DOM?](#8-is-the-shadow-dom-the-same-as-the-virtual-dom)
* [9. What is "React Fiber"?](#9-what-is-react-fiber)
* [10. How does state differ from props?](#10-how-does-state-differ-from-props)
* [11. What are the differences between controlled and uncontrolled components?](#11-what-are-the-differences-between-controlled-and-uncontrolled-components)
* [12. What are the different lifecycle methods in React?](#12-what-are-the-different-lifecycle-methods-in-react)
* [13. How can you improve your React app's performance?](#13-how-can-you-improve-your-react-apps-performance)
* [14. What are keys in React?](#14-what-are-keys-in-react)
* [15. What are Higher Order Components?](#15-what-are-higher-order-components)
* [16. What are error boundaries?](#16-what-are-error-boundaries)
* [17. Why Hooks were introduced?](#17-why-hooks-were-introduced)
* [18. What is the purpose of useEffect hook?](#18-what-is-the-purpose-of-useeffect-hook)
* [19. What are synthetic events in React?](#19-what-are-synthetic-events-in-react)
* [20. What is the use of refs?](#20-what-is-the-use-of-refs)
* [Conclusion](#conclusion)

## 1. What is React?

[React](https://reactjs.org/) is a "JavaScript library for building user interfaces" which was developed by Facebook in 2011.

It’s the V in the MVC (Model - View -Controller), so it is rather an open-source UI library than a framework.

## 2. What are the advantages of React?

- Good performance: due to VDOM, see [#17](https://mokkapps.de/blog/my-top-react-interview-questions/#7-what-is-the-virtual-dom).
- Easy to learn: with basic JavaScript knowledge you can start building applications. Frameworks like Angular require more knowledge about other technologies and patterns like RxJS, TypeScript, and Dependency Injection.
- One-way data flow: this flow is also called "parent to child" or "top to bottom" and prevents errors and facilitates debugging.
- Reusable components: Re-using React components in other parts of the code or even in different projects can be done with little or no changes.
- Huge community: The community supplies a ton of libraries that can be used to build React applications.
- It is very popular among developers.

## 3. What are the disadvantages of React?

- As React provides only the View part of the MVC model you mostly will rely on other technologies in your projects as well. Therefore, every React project might look quite different.
- Some people think that JSX is too difficult to grasp and too complex.
- Often poor documentation for React and its libraries.

## 4. What is JSX?

JSX (JavaScript XML) allows us to write HTML inside JavaScript. The [official docs](https://reactjs.org/docs/introducing-jsx.html) describe it as "syntax extension to JavaScript".

React recommends using JSX, but it is also possible to create applications [without using JSX](https://reactjs.org/docs/react-without-jsx.html) at all.

A simple JSX example:

```javascript
const element = <h1>Hello, world!</h1>;
```

## 5. How to pass data between components?

1. Use props to pass data from parent to child.
1. Use callbacks to pass data from child to parent.
1. Use any of the following methods to pass data among siblings:
    - Integrating the methods mentioned above.
    - Using [Redux](https://redux.js.org/).
    - Utilizing [React's Context API](https://reactjs.org/docs/context.html#api).

## 6. What are the differences between functional and class components?

[Hooks](https://reactjs.org/docs/hooks-intro.html) were introduced in React 16.8. In previous versions, functional components were called stateless components and did not provide the same features as class components (e.g., accessing state). Hooks enable functional components to have the same features as class components. There are no plans to remove class components from React.

So let's take a look at the differences:

### Declaration & Props

#### Functional Component
Functional components are JavaScript functions and therefore can be declared using an arrow function or the `function` keyword. Props are simply function arguments and can be directly used inside JSX:

```javascript
const Card = (props) => {
 return(
 	<h2>Title: {props.title}</h2>
 )
}

function Card(props){
 return(
	<h2>Title: {props.title}</h2>
 )
}
```

#### Class component
Class components are declared using the ES6 `class` keyword. Props need to be accessed using the `this` keyword:

```javascript
class Card extends React.Component{
 constructor(props){
   super(props);
 }

 render(){
   return(
	<h2>Title: {this.props.title}</h2>
   )
 }
}
```

### Handling state

#### Functional components
In functional components we need to use the `useState` hook to be able to handle state:

```javascript
const Counter = (props) => {
	const [counter, setCounter] = useState(0);
	
	const increment = () => {
		setCounter(++counter);
	}
	
	return (
		<div>
			<p>Count: {counter}</p>
			<button onClick={increment}>Increment Counter</button>
		</div>
	)
}
```

#### Class components

It's not possible to use React Hooks inside class components, therefore state handling is done differently in a class component:

```javascript
class Counter extends React.Component {
	constructor(props){
    	super(props);
        this.state = {counter : 0};
        this.increment = this.increment.bind(this);
    }
	
	increment() {
		this.setState((prevState) => {
			return {counter: prevState.counter + 1};
		});
	}
	
	render() {
	return (
			<div>
			<p>Count: {this.state.counter}</p>
			<button onClick={this.increment}>Increment Counter</button>
		</div>
		)
	}
}
```

## 7. What is the Virtual DOM?

The [Virtual DOM (VDOM)](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom) is a lightweight JavaScript object and it contains a copy of the real DOM.

| Real DOM      | Virtual DOM   |
| -------------|:-------------:| 
| Slow & expensive DOM manipulation | Fast & inexpensive DOM manipulation  |
| Allows direct updates from HTML  | It cannot be used to update HTML directly      |
| Wastes too much memory | Less memory consumption |

## 8. Is the Shadow DOM the same as the Virtual DOM?

No, they are different. 

The [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) is a browser technology designed primarily for scoping variables and CSS in web components. 

The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

## 9. What is "React Fiber"?

Fiber is the new reconciliation engine in React 16.

Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

[Read more](https://github.com/acdlite/react-fiber-architecture).

## 10. How does state differ from props?

Both props and state are plain JavaScript objects.

Props (short for "properties") is an object of arbitrary inputs that are passed to a component by its parent component.

State are variables that are initialized and managed by the component and change over the lifetime of a specific instance of this component.

[This article from Kent C. Dodds](https://kentcdodds.com/blog/props-vs-state) provides a more detailed explanation.

## 11. What are the differences between controlled and uncontrolled components?

The value of an input element in a controlled React component is controlled by React.

The value of an input element in an uncontrolled React component is controlled by the DOM.

## 12. What are the different lifecycle methods in React?

React class components provide these lifecycle methods:
- `componentDidMount()`: Runs after the component output has been rendered to the DOM.
- `componentDidUpdate()`: Runs immediately after updating occurs.
- `componentWillUnmount()`: Runs before the component is unmounted from the DOM and is used to clear up the memory space.

There exist some other [rarely used](https://reactjs.org/docs/react-component.html#rarely-used-lifecycle-methods) and [legacy](https://reactjs.org/docs/react-component.html#legacy-lifecycle-methods) lifecycle methods.

Hooks are used in functional components instead of the above-mentioned lifecycle methods. The Effect Hook `useEffect` adds, for example, the ability to perform side effects and provides the same functionality as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## 13. How can you improve your React app's performance?

- Use [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) which is a base class like `React.Component` but it provides in some cases a performance boost if its `render()` function renders the same result given the same props and state.
-	Use [useMemo Hook](https://reactjs.org/docs/hooks-reference.html#usememo) to memoize functions that perform expensive calculations on every render. It will only recompute the memoized value if one of the dependencies (that are passed to the Hook) has changed.
- State colocation is a process that moves the state as close to where you need it. Some React applications have a lot of unnecessary state in their parent component which makes the code harder to maintain and leads to a lot of unnecessary re-renders. [This article](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster) provides a detailed explanation about state colocation.
- Lazy load your components to reduce the load time of your application. React [Suspense](https://reactjs.org/docs/react-api.html#suspense) can be used to lazy load components.

## 14. What are keys in React?

React needs keys to be able to identify which elements were changed, added, or removed. Each item in an array needs to have a key that provides a stable identity.

It's not recommended to use indexes for keys if the order of items may change as it can have a negative impact on the performance and may cause state issues. React will use indexes as keys if you do not assign an explicit key to list items.

Check out Robin Pokorny’s article for an [in-depth explanation of the negative impacts of using an index as a key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318). Here is another [in-depth explanation about why keys are necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children) if you’re interested in learning more.

## 15. What are Higher Order Components?

A [higher-order component (HOC)](https://reactjs.org/docs/higher-order-components.html#use-hocs-for-cross-cutting-concerns) is a function that takes a component and returns a new component.

They are an advanced technique in React for reusing component logic and they are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature:

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

## 16. What are error boundaries?

React 16 introduced a new concept of an “error boundary”.

[Error boundaries](https://reactjs.org/docs/error-boundaries.html#gatsby-focus-wrapper) are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

## 17. Why Hooks were introduced?

Hooks solve a wide variety of seemingly unconnected problems in React that were encountered by Facebook over five years of writing and maintaining tens of thousands of components:

- Hooks allow you to reuse stateful logic without changing your component hierarchy.
- Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).
- Hooks let you use more of React’s features without classes.
- It removed the complexity of dealing with the `this` keyword inside class components.

[Read more](https://reactjs.org/docs/hooks-intro.html#motivation)

## 18. What is the purpose of useEffect hook?

The [Effect hook](https://reactjs.org/docs/hooks-reference.html#useeffect) lets us perform side effects in functional components. It helps us to avoid redundant code in different lifecycle methods of a class component. It helps to group related code.

## 19. What are synthetic events in React?

[SyntheticEvent](https://reactjs.org/docs/events.html) is a cross-browser wrapper around the browser's native event. It has the same API as the browser's native event, including `stopPropagation()` and `preventDefault(), except the events work identically across all browsers.

## 20. What is the use of refs?

A [Ref](https://reactjs.org/docs/glossary.html#refs) is a special attribute that can be attached to any component. It can be an
object created by `React.createRef()`, a callback function or a string (in legacy API). 

To get direct access to a DOM element or component instance you can use ref attribute as a callback function. The function receives the underlying DOM element or class instance (depending on the type of element) as its argument.

In most cases, refs should be used sparingly.

## Conclusion

I hope this list of React interview questions will help you to get your next React position. Leave me a comment if you know any other important React interview questions.

If you liked this article, follow me on [Twitter](https://twitter.com/mokkapps) to get notified about new blog posts and more content from me.

If you are looking for more interview questions you should take a look at this [list of top 500 React interview questions & answers](https://github.com/sudheerj/reactjs-interview-questions).
