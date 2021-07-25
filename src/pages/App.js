import "../styles/styles.scss"
import Header from "../components/header"
import Banner from "../components/main"
import Pagina1 from "../components/cookiezi";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>

    <Header/>

    <Switch>
      
      <Route path="/pagina1">
        <Pagina1 peticion="cupcakes"/>
      </Route>
    
      <Route path="/">
        <Banner/>
      </Route>

    </Switch>
  </Router>
);

export default App;
