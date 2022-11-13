import "./App.css";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swoop</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="CS151 Final Project - Swoop application"
        />
      </Helmet>
      <AppContainer>
        <AccountBox />
      </AppContainer>
    </div>
  );
}

export default App;
