import React from 'react';


function Table ({data}){
	return(
		<div style={{margin:'auto'}}>
				<table style={{ border: '1 solid #dddddd'}}>
				<tr>
			    <th>Title</th>
			    <th>Maginitude</th>
			    <th>Time</th>
			  </tr>
				{
					data.data.features.map( (row) => (
						<tr>
							<td key={row.id}>{row.properties.title}</td>
							<td key={row.updated}>{row.properties.mag}</td>
							<td key={row.time}>{row.properties.time}</td>
						</tr>
					))
				}
			 </table>
		</div>
	)
}
export default Table;