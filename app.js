//PART1
// const App = () => (
//   <div>Grocery List
//     <ul>
//       <li>Coffee</li>
//       <li>More Coffee</li>
//     </ul>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));

//PART2
// const App = () => {
//   const ToDoList = () => (
//     <ul>
//       <li>Coffee</li>
//       <li>More Coffee</li>
//     </ul>
//   )
//   return (
//     <div>
//       <h2>Grocery List</h2>
//       <ToDoList />
//     </div>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("app"));

// PART3
// const ToDoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//   </ul>
// )

// const App = () => {
//   return (
//     <div>
//       <h2>Grocery List</h2>
//       <ToDoList todos={['Coffee', 'More Coffee']} />
//     </div>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("app"));

//PART4
// const ToDoListItem = (props) => (
//   <li>{props.todo}</li>
// )

// const ToDoList = (props) => (
//   <ul>
//     {props.todos.map((todo) => (
//       <ToDoListItem todo={todo} />
//     ))}
//   </ul>
// )

// const App = () => {
//   return (
//     <div>
//       <h2>Grocery List</h2>
//       <ToDoList todos={['Coffee', 'More Coffee']} />
//     </div>
//   );
// }
// ReactDOM.render(<App />, document.getElementById("app"));

//PART5
const ToDoListItem = (props) => {
  const {useState} = React;
  const [isDone, setIsDone] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    color: isHovered ? 'blue' : 'red',
    fontWeight: isHovered ? 'bold' : 'normal'
  };

  return (
    <li style={style}
      onClick={() => setIsDone(!isDone)}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}>
      {props.todo}
    </li>
  )
}

const ToDoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <ToDoListItem todo={todo} />
    ))}
  </ul>
)

const App = () => {
  return (
    <div>
      <h2>Grocery List</h2>
      <ToDoList todos={['Coffee', 'More Coffee']} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));