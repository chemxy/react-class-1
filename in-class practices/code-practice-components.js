import './App.css';

/*
1. extract the list of users in <App> to a custom component called <UsersList> (create a component folder under /src)
2. extract each user from the list into another new component called <UserN> (create a component folder under /src)
 */
function App() {
    return (
        <div>
            <ul>
                <li>
                    <h1>user 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                    <h1>user 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
                <li>
                    <h1>user 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </li>
            </ul>
        </div>
    );
}

export default App;
