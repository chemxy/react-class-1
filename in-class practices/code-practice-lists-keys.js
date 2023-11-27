import './App.css';

/*============================== exercise 1 =================================*/
function StudentList() {
    const students = ['Alice', 'Bob', 'Charlie', 'David'];

    //TODO: make changes to the code to display students in an unordered list
    return (
        <div className="code-practice-section">
            <h3>Student List</h3>
            TODO_LIST_STUDENTS
        </div>
    );
};

/*============================== exercise 2 =================================*/

/*
TODO:
    1. Create a parent component called TodoList and a child component called TodoItem.
    2. Pass an array of items as a prop to TodoList and render each item using the TodoItem component in <div>
 */
function TodoList() {
    const todoItems = ['Learn React', 'Practice React', 'Profit!'];

    return (
        <div className="code-practice-section">
            <h3>Todo List</h3>
            <div>
                TODO_LIST
            </div>
        </div>
    );
}

function TodoItem() {

    //TODO: make changes to the code to receive data from <TodoList> and display them below
    return (
        <div>
            <p>
                TODO_ITEM
            </p>
        </div>
    )
};

/*============================== exercise 3 =================================*/
/*
TODO:
    1. Create a parent component called ObjectList and a child component called StudentItem.
    2. Pass a list of students as a prop to StudentItem and render each item using the TodoItem component in an unordered list
 */
function ObjectList() {
    const students = [
        {studentId: 1, name: 'Alice'},
        {studentId: 2, name: 'Bob'},
        {studentId: 3, name: 'David'},
    ];

    return (
        <div className="code-practice-section">
            <h3>Student Object List</h3>
            <ul>
               TODO_STUDENT_LIST
            </ul>
        </div>
    );
};

function StudentItem() {

    //TODO: make changes to the code to receive data from <ObjectList> and display them below
    return (
        <div>
            <p>
                TODO_STUDENT
            </p>
        </div>
    )
};

/*============================== main =================================*/
function App() {
    return (
        <div>
            <StudentList/>
            <TodoList/>
            <ObjectList/>
        </div>
    );
}


export default App;
