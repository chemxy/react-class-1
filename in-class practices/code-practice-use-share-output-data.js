import './App.css';

function RenderNumbersAndExpressions() {
    /*
    TODO: create a variable to display the numbers and the relation b/t weeks and days
     */
    return (
        <div className="code-practice-section">
            <h3>Rendering numbers and expressions</h3>
            <p>
                1 week has 7 days
            </p>
        </div>
    )
}

function RenderTexts() {
    /*
    TODO: create a variable to display string 'Victoria'
     */
    return (
        <div className="code-practice-section">
            <h3>Rendering texts</h3>
            <p>
                we are currently at Victoria
            </p>
            <br/>
        </div>
    )
}

function RenderExternalSources() {
    /*
   TODO: replace IMAGE_NAME with the proper image path using 'import' at top of the file
    */
    return (
        <div className="code-practice-section">
            <h3>Rendering images sources</h3>
            <img src="IMAGE_NAME" alt="image not found if you see this text"/>
            <p>
                this is an image

            </p>
        </div>
    )
}

function RenderObjects() {
    /*
    TODO:
        1. pass the value of firstName in userData object to FIRST_NAME in the html code
        2. pass the value of lastName in userData object to LAST_NAME in the html code
        3. pass the value of description in userData object to DESCRIPTION in the html code
        4. optional: repalce the first name & last name & description with the content you want to display
     */
    const userData = {
        firstName: 'TODO_FIRST_NAME',
        lastName: 'TODO_LAST_NAME',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    return (
        <div className="code-practice-section">
            <h3>Rendering images sources</h3>
            <p>
                first name: FIRST_NAME
            </p>
            <p>
                last name: LAST_NAME
            </p>
            <p>short description: DESCRIPTION</p>
        </div>
    );
}

function App() {

    return (
        <div>
            <RenderNumbersAndExpressions/>
            <RenderTexts/>
            <RenderExternalSources/>
            <RenderObjects/>
        </div>

    );
}

export default App;
