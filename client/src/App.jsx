import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [id, setId] = useState()

  return (
		<>
			{id}
			<Login setId={setId}></Login>
		</>
	);
}

export default App
