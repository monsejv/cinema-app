import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { createBrowserHistory as createHistory } from "history"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import Home from './views/Home';
import Nosotros from './views/Nosotros'
import Proyects from './views/Proyects'
import Borderless from './views/Borderless'
import Movies from './views/Movies'
import Legal from './views/Legal'
import DemoReel from './views/DemoReel'
import Veintiuno from './views/Veintiuno'

const history = createHistory();

function App() {
  const textLegal = `Cinema226 no puede ni aceptará o considerará cualquier material, 
                    idea o sugerencia de cualquier naturaleza, que no sea expresamente solicitada.  
                    No obstante, lo anterior, si usted envía cualquier material, idea o sugerencia que no sea expresamente solicitada por Cinema226,
                   usted reconoce que dicho envío puede contener ideas que sean iguales o similares a ideas que ya hayan sido desarrolladas, 
                   estén en desarrollo o sean desarrolladas en un futuro por Cinema226 o cualquier tercero, 
                   sin que se haya hecho uso de sus materiales, ideas o sugerencias. <br/><br/>
                   Es política de Cinema226 no leer ni visualizar cualquier material que no sea solicitado, mismo que en su caso, 
                   será devuelto a usted de ser posible, o destruido por completo. Cinema226 no conservará el material o copia alguna del mismo.`

  return (
    <ParallaxProvider >
    <Router history={history}>
      <Switch>  
        <Route
          path='/'
          component={Home}
          exact
        />
        <Route
          path='/nosotros'
          component={Nosotros}
          exact
        />
        <Route
          path='/proyectos'
          component={Proyects}
          exact
        />
        <Route
          path='/borderless'
          component={Borderless}
          exact
        />
        <Route
          path='/movies'
          component={Movies}
          exact
        />
        <Route
          path='/disclaimer'
          render={() => <Legal title='DISCLAIMER'
          text={textLegal} />}
          exact
        />
        <Route
          path='/demo-reel'
          component={DemoReel}
          exact
        />
        <Route
          path='/veintiuno+-'
          component={Veintiuno}
          exact
        />
      </Switch>
    </Router>
    </ParallaxProvider>
  );
}

export default App;
