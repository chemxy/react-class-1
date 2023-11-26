import './App.css';

/*
make the code work by replacing the TODOs with proper data
 */

export const userData = {
    firstName: 'todo',
    lastName: 'todo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat, eros quis facilisis sagittis, eros turpis facilisis leo, id volutpat nulla velit a massa. Maecenas faucibus pellentesque mi et lacinia.',
};

// Edit the User component code to output the userData data
// import the img from assets
export function User() {
    return (
        <div>
            <img src="IMAGE NAME" alt="image not found if you see this text"/>
            <h1>
                TODO: FIRST NAME LAST NAME
            </h1>
            <p>TODO: DESCRIPTION</p>
        </div>
    );
}

function App() {
    return (
        <div id="app">
            <User/>
        </div>
    );
}

export default App;
