import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import Home from "./components/Home";
import People from "./components/People";


function App() {
  const[people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
    setLoading(false);
  }, [])
  return (
    <>
      <Router>
        <Navbar/>
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/people'>
                <People data={people}/>
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
