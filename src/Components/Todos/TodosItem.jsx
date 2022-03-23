import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import MultilevelDropdownDigitalClass from "../ReusableComponents/NavbarDigitalClass/MultilevelDropdownDigitalClass/MultilevelDropdownDigitalClass";

function TodosItem() {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getTodos = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/" + id)
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          setTodos(data);
        });
    };
    getTodos();
  }, [id]);
  return (
    <>
      <MultilevelDropdownDigitalClass />
      <Container>
        <h1 style={{ margin: "2em 0 1em 0 " }}>This is a single todo</h1>
        <ul key={todos.id} style={{ margin: "0 0 5em 0 " }}>
          <li>{todos.title}</li>
        </ul>
      </Container>
      <Footer />
    </>
  );
}

export default TodosItem;
