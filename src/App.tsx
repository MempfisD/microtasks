import React, {useState} from 'react'
import {NewComponent} from './NewComponent'

function App() {
	const [topCars, setCars] = useState([
		{manufacturer: 'BMW', model: 'm5cs'},
		{manufacturer: 'Mercedes', model: 'e63s'},
		{manufacturer: 'Audi', model: 'rs6'}
	])
	return <NewComponent topCars={topCars}/>
}

export default App


