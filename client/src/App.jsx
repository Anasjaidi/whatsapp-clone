import { useState } from 'react'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './components/dashboard';
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';



function App() {
  const [id, setId] = useLocalStorage("id", "")

  return (
		<>
			<Route path="/" exact component={Home} />
			<Route path="/chat" exact component={Chat} />
		</>
	);
}

export default App
