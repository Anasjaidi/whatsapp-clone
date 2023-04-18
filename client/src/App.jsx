import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import './app.css'


function App() {
  const [id, setId] = useLocalStorage("id", "")

  return (
		<div className='App'>
			<Route path="/" exact component={Home} />
			<Route path="/chat" exact component={Chat} />
		</div>
	);
}

export default App
