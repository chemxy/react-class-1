import './App.css';

/*============================== exercise 1 =================================*/
function PassSimpleTextWithProps() {
    const myMessage = 'Hello from Parent!';

    //TODO: make changes to the code to pass myMessage to <PassSimpleTextWithPropsChildComponent>
    return <PassSimpleTextWithPropsChildComponent/>
}

function PassSimpleTextWithPropsChildComponent() {
    // TODO: make changes to the code to create props and receive message from parent component and display it below

    return (
        <div className="code-practice-section">
            <h3>Pass Simple Text With Props</h3>
            <p> message to display: </p>
            <p>
                TODO_MESSAGE
            </p>
        </div>
    )
};

/*============================== exercise 2 =================================*/
function PassObjectsWithProps() {
    const userData = {
        name: 'Alice',
        age: 25,
        city: 'New York',
    };

    //TODO: make changes to the code to pass userData to <PassObjectsWithPropsChildComponent>
    return <PassObjectsWithPropsChildComponent/>;
};

function PassObjectsWithPropsChildComponent() {
    // TODO: make changes to the code to create props and receive data from parent component and display them below

    return (
        <div className="code-practice-section">
            <h3>Pass Objects With Props</h3>
            <p>name: TODO_NAME</p>
            <p>age: TODO_AGE</p>
            <p>city: TODO_CITY</p>
        </div>
    );
}


/*============================== exercise 3 =================================*/
function PassContentWithProps() {
    return <PassContentWithPropsChildComponent>
        <p>this is an exercise</p>
        <p>of how to pass the entire content to child components with props</p>
    </PassContentWithPropsChildComponent>
}

function PassContentWithPropsChildComponent() {
    // TODO: make changes to the code to create props and receive the content inside <PassContentWithPropsChildComponent>

    return (
        <div className="code-practice-section">
            <h3>Pass Content With Props</h3>
            <p>
                TODO_CONTENT
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
            <PassObjectsWithProps/>
        </div>
    );
}

export default App;
