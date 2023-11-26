import './App.css';

/*
1. pass img source and text using props
2. create a list of examples and extract the data to the list. access data from the list and pass to child component using props.
 */

export const examples = [];

function Example() {
    return (
        <li>
            <img src="sample.png" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <ul>
                <Example />
                <Example />
                <Example />
            </ul>
        </div>
    );
}

export default App;
