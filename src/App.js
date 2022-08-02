import React from "react";
import styled from "styled-components";

import { Form } from "./form/Form"; 
import { Header } from "./header/Header";
import List from "./list/List";




const App = () => {
  return (
    <>
    <Header />
    <Form />
    <List />
    </>
  );
};

export default App;

