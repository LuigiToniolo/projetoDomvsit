//import React, { useEffect } from 'react';
import Home from './pages/home';
import Carreiras from './pages/carreiras';
import Cases from './pages/cases';
import Vagas from './pages/vagas';
import Error from './components/Error';
import TagManager from 'react-gtm-module';
import { BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { initializeGoogleAnalytics } from './components/googleAnalitics';

initializeGoogleAnalytics()

const tagManagerArgs = { 
  gtmId: 'GTM-TTHR7L9' 
} 

TagManager.initialize(tagManagerArgs);

TagManager.dataLayer({
  dataLayer:{
    event:"pageview",
  }
})
function App() {
  
  window.dataLayer.push({ 
    event: 'pageview' 
  }); 

  return (
    // <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/cases" exact component={Cases}/>
          <Route path="/carreiras" exact component={Carreiras}/>
          <Route path="/carreiras/:id" exact component={Vagas}/>
          <Route path="/error/404" exact component={Error}/> 
        </Switch>
      </div>
    // </Router>
  );
}

export default withRouter(App);
