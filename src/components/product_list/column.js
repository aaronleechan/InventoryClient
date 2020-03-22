import React from 'react';
import './productlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileAlt,faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export const getColumn = (props) =>{
    const {detailData,editData, deleteData} = props
    return([
        {Header: '#', Cell: (row)=>{return <div>{row.index+1}</div>}, minWidth: 20},
        {Header: 'Name', accessor: 'name', minWidth: 100},
        {Header: 'Amount', accessor: 'amount', minWidth: 100},
        {Header: 'Purchase', accessor: 'purchase', minWidth: 100},
        {Header: 'Sale', accessor: 'sale', minWidth: 100},
        {Header: 'Lasted Modified', accessor: 'updatedAt', minWidth: 100},
        {Header: 'Action', Cell: (row)=>(
                <div className="action-column">
                    <button onClick={()=>detailData(row)}><FontAwesomeIcon icon={faFileAlt} size="6x" color="white"/></button>
                    <button onClick={()=>editData(row)}><FontAwesomeIcon icon={faEdit} size="6x" color="white"/></button>
                    <button onClick={()=>deleteData(row)}><FontAwesomeIcon icon={faTrashAlt} size="6x" color="white"/></button>
                </div>
            )
        }
    ])
}