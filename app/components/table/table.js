import React from 'react';
import { Link,useHistory } from "react-router-dom";


function Table ({data}){
	const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/details/${row.id}`);
  }  

  function sortTable(e){
  	console.log('sort table called',e.target.innerText);
  	// if I am using my own sorting then I should use usememo for better performance
  }

	return(
		<div style={{margin:'auto'}}>
				<table style={{ border: '1 solid #dddddd'}}>
				<thead>
				 <tr>
			    <th onClick={sortTable}>Title</th>
			    <th onClick={sortTable}>Maginitude</th>
			    <th onClick={sortTable}>Time</th>
			   </tr>
			   </thead>
			   <tbody>
				{
					data.data.features.map( (row) => (
						<tr key={row.id} onClick={()=> handleRowClick(row)}>
							<td> {row.properties.title} </td>
							<td>{row.properties.mag} </td>
							<td>{row.properties.time}</td>
						</tr>
					))
				}
				</tbody>
			 </table>
		</div>
	)
}
export default Table;