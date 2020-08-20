import React, { useState} from 'react';
import './MultiColsList.css';
/*
props={header:[],
       items:{id: id,
			  cols:[{key:key1,value:value1},
				  {key:key2,value:value2}]
	   }
}
*/
const MultiColsList = (props)=>{
	const [selectedItem, setSelectedItem] = useState(null);
	
	const handleItemClick = (id) =>{
		setSelectedItem (id);
		};
	
	
	
	const headerCols = () =>{
		return props.header.map(col=><span className={col} key={col.toString()}>{col}</span>);
	};
	const ListHeader = () =>{
		return (
			<div className="list-header">
			{headerCols()}
			</div>
			)
		
	}

	const itemCols = (cols) =>{
		return cols.map(col=><span className={col.key} key={col.key}>{col.value}</span>);
	}
	
	
	const ListItems = () =>{
		
		return props.items.map(item=>{
			return(
			<div className={item.id === selectedItem ? "list-item list-item-selected" : "list-item"} key = {item.id} data-id={item.id} onClick ={()=>handleItemClick(item.id)} >
			{itemCols(item.cols)}
			</div>)
		});
	}

return (
	 <div className="list" data-selectedid={selectedItem}>
		 <ListHeader/>
		 <ListItems/>
	 </div>
	 )
}


export default MultiColsList;
 