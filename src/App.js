import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PredictiveAnalysis from './components/pages/PredictiveAnalysis';
import HealthMonitoring from './components/pages/HealthMonitoring';

import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Cards from './components/Cards';
import BasicForm1 from './components/BasicForm1';
import BasicForm2 from './components/BasicForm2';
function App() {
  return (
    <>
    
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
    
        <Switch>
          <Route path='/cleandata' component={() => {
            window.location.href = 'https://share.streamlit.io/maansiii/datacleaning/main/app.py'; 
            return null;}}/>
          <Route path='/predictiveanalysis' component={() => {
            window.location.href = 'https://share.streamlit.io/woahvidhi/dataprediction/main/predict.py'; 
            return null;}}/>
          <Route path='/healthmonitoring' component={HealthMonitoring} />
          <Route path='/userreport' component={() => {
            window.location.href = 'https://share.streamlit.io/maansiii/datavisualization/main/new_app.py'; 
            return null;}}/>

        </Switch>
        <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path= '/signup' component={BasicForm2}/>
        <Route path= '/signup' component={BasicForm1}/>
        </Switch>
        <Switch>
          <Route path='/cards__container' component={Cards} />
          <Route path='/footer-container' component={Footer} />
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
