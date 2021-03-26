import React from 'react';
import { Link,useHistory } from "react-router-dom";


function Table ({data}){
	const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/details/${row.id}`);
  }  

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
						<tr onClick={()=> handleRowClick(row)}>
							<td key={row.id}> {row.properties.title} </td>
							<td key={row.updated}>{row.properties.mag} </td>
							<td key={row.time}>{row.properties.time}</td>
						</tr>
					))
				}
			 </table>
		</div>
	)
}
export default Table;