import './App.css';

/*============================== exercise 1 =================================*/
function PassSimpleTextWithProps() {
    const myMessage = 'Hello from Parent!';

    //TODO: make changes to the code to pass myMessage to <PassSimpleTextWithPropsChildComponent>
    return <PassSimpleTextWithPropsChildComponent/>
}

function PassSimpleTextWithPropsChildComponent() {
    return (
        <div className="code-practice-section">
            <h3>Pass Simple Text With Props</h3>
            <p> message to display: </p>
            <p>
                {/*TODO: make changes to the code to create props to receive message from parent component and display it here*/}
            </p>
        </div>
    )
};

/*============================== exercise 2 =================================*/
function PassContentWithProps() {
    return <PassContentWithPropsChildComponent>
        <p>this is an exercise</p>
        <p>of how to pass the entire content to child components with props</p>
    </PassContentWithPropsChildComponent>
}

function PassContentWithPropsChildComponent() {

    return (
        <div className="code-practice-section">
            <h3>Pass Content With Props</h3>
            <p>
                {/*TODO: make changes to the code to create props to receive the content inside <PassContentWithPropsChildComponent>*/}
            </p>
            <button>Click me!</button>
        </div>
    )
}

/*============================== main =================================*/
function App() {
    return (
        <div>
            <PassSimpleTextWithProps/>
            <PassContentWithProps/>
        </div>
    );
}

export default App;
