import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import SearchBox from "../SearchBox";
import SearchWrapper from "../SearchWrapper";
import { Container, GlobalStyle } from "./styled";

const App: React.FC = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Header />
    <main>
      <section>
        <Container>
          <SearchBox />
          <SearchWrapper />
        </Container>
      </section>
    </main>
    <Footer />
  </>
);

export default App;
