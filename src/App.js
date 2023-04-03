import "./styles.css";
import Form from "./Form";
import List from "./List";

const App = () => {
  const todos = [
    { content: "料理" },
    { content: "洗濯" },
    { content: "洗い物" }
  ];
  return (
    <>
      <h1>ToDo</h1>
      <Form />
      <List todos={todos} />
    </>
  );
};

export default App;
