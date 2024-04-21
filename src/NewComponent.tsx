import React from 'react';

type NewComponentPropsType = {
	topCars: Array<CarsType>
}

type CarsType = {
	manufacturer: string
	model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
			return (
					<table>
						<tbody>
						{props.topCars.map((cars, index) => (
								<tr key={cars.manufacturer + cars.model}>
									<td>{index + 1}</td>
									<td>{cars.manufacturer}</td>
									<td>{cars.model}</td>
								</tr>
						))}
						</tbody>
					</table>
			)
					;
		}
;