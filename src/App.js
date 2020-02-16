import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , NavLink} from "react-router-dom"
import Home from './Home';
import About from './About';
import Books from './Books';

function App() {
  return (
    <div className="App">
        <Router>
            <nav style={{ margin: 10 }}>
                    <NavLink to='/' style={{ padding: 10 }}>
                        Home
                    </NavLink>

                    <NavLink to='/about' style={{ padding: 10 }}>
                        About
                    </NavLink>
                    <NavLink to='/books' style={{ padding: 10 }}>
                        Books
                    </NavLink>
            </nav>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/books' component={Books} />
        </Router>
    </div>
  );
}

export default App;
