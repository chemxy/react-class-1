import './App.css';

/*============================== exercise 1 =================================*/
function BindFunctionWithButtonClick() {
    function handleClick() {
        alert("hello! button clicked.");
    }

    // TODO: make changes to the code to bind the function handleClick() with the button click
    return (
        <div className="code-practice-section">
            <h3>Bind Function With Button Click</h3>
            <button>click me</button>
        </div>
    )
}

/*============================== exercise 2 =================================*/

/*
 TODO: make changes to the code so that:
   1. when click the first button, it prints "button 1 is clicked"
   2. when click the second button, it prints "button 2 is clicked"
 */
function BindFunctionParametersWithButtonClick() {
    function printText() {
        alert();
    }

    return (
        <div className="code-practice-section">
            <h3>Bind and Pass Function Parameters With Button Click</h3>
            <button>button 1</button>
            <button>button 1</button>
        </div>
    )
}

/*============================== exercise 3 =================================*/
function PassFunctionsWithProps() {
    const handleButtonClick = () => {
        alert('Button clicked in Parent!');
    };

    //TODO: make changes to the code to pass the function handleButtonClick() to <PassFunctionsWithPropsChildComponent>
    return <PassFunctionsWithPropsChildComponent/>;
};

function PassFunctionsWithPropsChildComponent() {
    // TODO: make changes to the code to create props and receive the function from parent component and bind with the button click

    return (
        <div className="code-practice-section">
            <h3>Pass Functions With Props</h3>
            <button>Click me</button>
        </div>
    );
};

/*============================== main =================================*/
function App() {
    return (
        <div>
            <BindFunctionWithButtonClick/>
            <BindFunctionParametersWithButtonClick/>
            <PassFunctionsWithProps/>
        </div>
    );
}

export default App;
