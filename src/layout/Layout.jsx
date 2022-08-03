import React from "react";
import styled from "styled-components";
import { List } from "../list/List";
import { Form } from "../form/Form"; 
import { Header } from "../header/Header";


const Layout = () => {

    return (

      <Box>
        <Header />
        <Form />
        <List />
      </Box>      
    
    );
  };
  
  export default Layout;

  const Box = styled.section`
  max-width: 1200px;
  min-width: 800;
  height: 100vh;
  margin: 0 auto;
`
