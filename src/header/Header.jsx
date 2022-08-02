import React from "react";
import styled from "styled-components";

const Header = () => {

    return (
        <HeaderBox>
        <div className="mytodolist">
            <div>My Todo List</div>
            <div>React</div>
        </div>
        </HeaderBox>
    );
  }

  export {Header};

const HeaderBox = styled.div`
    display: flex;
    justify-content : space-between
`