import React, { Children } from "react";
import styled from "styled-components";

function Ratings({ children, className }) {
  const Button = styled.button`
    background-color: green;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 10px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  `;
  return (
    <div>
      <Button className={className}>{children}</Button>
    </div>
  );
}

export default Ratings;
