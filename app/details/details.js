import React,{ useState,useEffect } from 'react';
import Card from '../components/card/card'; 
import { useParams } from "react-router-dom";
import './details.css';

function Details( props ){

	let { ID } = useParams();
	let allowList = ['Title','Magnitude','Time','Status','Tsunami','Type']
	const [ tableData,setTableData] = useState({});
	 useEffect((data) => {
    let rows = props.data.features;
    let dt = rows.filter( row => {
    	if(row.id === ID) return row;
    })[0];
    
    setTableData({
    	Title:dt.properties.title,
    	Magnitude:dt.properties.mag,
    	Time:dt.properties.time,
    	Status:dt.properties.status,
    	Tsunami:dt.properties.tsunami,
    	Type:dt.properties.type
    });
    
  },[]);
	return(
		
		<div className='details'>
		
			{ 
				(tableData.hasOwnProperty('Time'))
				? <><h1>{tableData.Title}</h1> <Card data={tableData} allowList={allowList}/></>
				:<div>Table data not set</div>
			}
		 
		</div>
	)
}

export default Details;
