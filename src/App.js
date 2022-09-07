
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import './App.css';


class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			
		<NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
		
						<NavLink to="/Students" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Students
                        </NavLink>
		
		
						<NavLink to="/Contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Contact Us
                        </NavLink>
	</div>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/Students' element={< Students />}></Route>
				<Route exact path='/Contact' element={< Contact />}></Route>
		</Routes>
		
	</Router>
);
}
}

export default App;


