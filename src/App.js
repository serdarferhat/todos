import React, { useState } from "react";
import { connect } from "react-redux";
import { list_add,line_through,line_delete } from "./actions";
import "./style.css";

function App(props) {
  const [text, setText] = useState("");
  console.log(props);
  return (
    <div className="container App">
      <h1>TODOS</h1>
      <div className="form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="list_add"
        />
        <button
          onClick={() =>{props.list_add(text)
          setText("")} }
          className="btn btn-sm btn-outline-secondary"
        >
          Ekle
        </button>
        <button onClick={()=>props.line_delete()} className="temizle btn btn-sm">Yapılanı Sil</button>
      </div>
      <hr />
      {props.liste.map((item) => (
        <div onClick={()=>props.line_through(item.id)} key={item.id} className={item.yapildi ? "yapildi" : ""}>
          {item.baslik}
          <hr />
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    liste: state.liste,
  };
};

export default connect(mapStateToProps, { list_add,line_through,line_delete })(App);
