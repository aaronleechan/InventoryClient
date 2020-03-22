import ReactTable from 'react-table'
import React,{useState,useEffect} from 'react'
import "react-table/react-table.css";

const React_Table = (props) =>{
    const {columns,data} = props

    return(
        <ReactTable
            data={data}
            columns={columns}
            className="-striped -highlight"
            style={{color: 'white', fontSize: '50px', opacity: 1.5, backgroundColor: '#1d1d1d',textAlign: 'center', borderRadius: '2px'}}
        />
    )
}

export default React_Table