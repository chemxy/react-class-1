import './App.css';

/*
1. currently the button text is displayed in <button> inside <MyButton> component,
try to move the text to <App> component and pass it down to <MyButton> component
 */
function MyButton() {

    return (
        <div>
            <button>click me</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <MyButton/>
        </div>
    );
}

export default App;
