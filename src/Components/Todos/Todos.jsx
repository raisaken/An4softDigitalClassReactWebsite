import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import MultilevelDropdownDigitalClass from "../ReusableComponents/NavbarDigitalClass/MultilevelDropdownDigitalClass/MultilevelDropdownDigitalClass";
import { Link } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = () => {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        console.log(res);
        const data = res.data;
        setTodos(data);
      });
    };
    getTodos();
  }, []);
  return (
    <>
      <MultilevelDropdownDigitalClass />
      <Container>
        <h1>These are all todos</h1>

        {todos.map((todo) => (
          <ul key={todo.id}>
            <Link to={`${todo.id}`}>
              <li>{todo.title}</li>
            </Link>
          </ul>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Todos;
