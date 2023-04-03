import React, { useState } from "react";

const Item = ({ content }) => {
  //Listの引数{content}
  const [isDone, setisDone] = useState(false);

  //checkboxをクリックした時のアクション
  const handleSubmit = () => {
    //isDoneの値をtrue or false逆にする。
    //ReactDOM.render関数が再実行され、再描写が行われる。
    setisDone(!isDone);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleSubmit} />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
    </li>
  );
};

export default Item;
