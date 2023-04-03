import Item from "./Item";

//Appの引数
const List = ({ todos }) => {
  return (
    //.mapでtodosを展開、展開したものを引数todoとし、
    //todosのインデックス数だけItemコンポーネントを呼び出し、配置する。
    <ul>
      {todos.map((todo) => {
        return <Item content={todo.content} />;
      })}
    </ul>
  );
};

export default List;
