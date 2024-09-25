import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Offers from './components/Pages/Offers'
import Landing from './components/Pages/Landing'
import AdminDashboard from './components/Pages/AdminDashboard'
import Cart from "./components/Pages/Cart";

// import { component } from "react";

function App() {
  return (
    <div>
      <Router>
        <Layout>
            <Switch>
            <Route path={'/admin/dashboard'} component={AdminDashboard} />
              <Route path={'/offers'} component={Offers} />
              <Route path={'/cart'} component={Cart} />
              <Route path={'/'} component={Landing} />
            </Switch>
        </Layout>
      </Router>
    </div>
    
  );
}

export default App;
