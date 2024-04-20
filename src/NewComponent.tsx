import React from 'react'
//
// type NewComponentPropsType = {
// 	students: Array<StudentType>
// 	/*или так*/
// 	// students: StudentType[]
// }
//
// type StudentType = {
// 	id: number,
// 	name: string,
// 	age: number
// }
//
// export const NewComponent = (props: NewComponentPropsType) => {
// 	return (
// 			<ul>
// 				{props.students.map((objectFromStudentArray, index) => {
// 					return (
// 							<li key={objectFromStudentArray.id}>
// 								<span>{objectFromStudentArray.name}</span>
// 								<span> age: {objectFromStudentArray.age}</span>
// 							</li>
// 					)
// 				})}
// 			</ul>
// 	)
// }
//


type NewComponentPropsType = {
	topCars: Array<TopCarsType>
	/*или так*/
	// students: StudentType[]
}

type TopCarsType = {
	manufacturer: string,
	model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
	return (
			<table>
				<tr>
					{props.topCars.map((objectFromTopCarsArray, index) => {
						return (
								<td key={objectFromTopCarsArray.model}>{index + 1}</td>
						)
					})}
				</tr>
				<tr>
					{props.topCars.map((objectFromTopCarsArray, index) => {
						return (
								<td key={objectFromTopCarsArray.model}>{objectFromTopCarsArray.manufacturer}</td>
						)
					})}
				</tr>
				<tr>
					{props.topCars.map((objectFromTopCarsArray, index) => {
						return (
								<td key={objectFromTopCarsArray.model}>{objectFromTopCarsArray.model}</td>
						)
					})}
				</tr>
			</table>
	)

}