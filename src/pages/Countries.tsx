import React from "react";
import styled from "styled-components";
import GlobalStyles from "../global";
import Button from "../components/Button";
import axios from "axios";

interface ICountry {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
}

function Countries() {
  const [country, setCountry] = React.useState<ICountry[]>([]);
  const [value, setValue] = React.useState("");

  const filteredCountry = country.filter((coun) => {
    return coun.name.common.toLowerCase().includes(value.toLowerCase());
  });

  React.useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    axios.get(url).then((resp) => {
      console.log(resp.data);
      setCountry(resp.data);
    });
  }, []);

  return (
    <>
      <ToDoFull>
        <Container>
          <Wrapper>
            <Input
              type="text"
              placeholder=""
              onChange={(event) => setValue(event.target.value)}
            />
            <Button text="Add ToDo" />
          </Wrapper>
        </Container>
      </ToDoFull>
      <Grid>
        {filteredCountry.map((item, index) => {
          const { flags, name } = item;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={flags.png} alt="" style={{ width: "300px" }} />
              <h1>{name.common}</h1>
            </div>
          );
        })}
      </Grid>
      <GlobalStyles />
    </>
  );
}

export default Countries;

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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
