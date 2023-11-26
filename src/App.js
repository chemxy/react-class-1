import './App.css';


function MyButton() {
    function handleClick(data) {
        console.log(data);
    }

    return (
        <div>
            <button onClick={() => handleClick('hello Lorem')}>Lorem</button>
            <button onClick={() => handleClick('hello ipsum')}>ipsum</button>
            <button onClick={() => handleClick('hello dolor')}>dolor</button>
            <button onClick={() => handleClick('hello sit amet')}>sit amet</button>
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
