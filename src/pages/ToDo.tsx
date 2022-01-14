import React from "react";
import styled from "styled-components";
import GlobalStyles from "../global";
import Button from "../components/Button";
import axios from "axios";

function ToDo() {
  const [todoObj, setTodoObj] = React.useState([]);
  React.useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    axios.get(url).then((resp) => {
      setTodoObj(resp.data);
    });
  }, [todoObj]);

  console.log(todoObj);

  function clicked() {
    console.log("this is click");
  }

  return (
    <>
      <ToDoFull>
        <Container>
          <Wrapper>
            <Input type="text" placeholder="" />
            <Button text="Add ToDo" func={clicked} />
          </Wrapper>
        </Container>
      </ToDoFull>
      {todoObj.map((value) => {
        return (
          //@ts-ignore
          <div>{value.id} {value.title}</div>
        )
      })}
      <GlobalStyles />
    </>
  );
}

export default ToDo;

const ToDoFull = styled.div`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 300px;
  height: 61.6px;

  border-radius: 4px;
  border: 2px solid black;

  padding-left: 15px;
  font-size: 24px;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1400px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--grey);
`;
