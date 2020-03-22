import React from 'react';

export const getColumn = (props) =>{
    return([
        {Header: '#', Cell: (row)=>{return <div>{row.index+1}</div>}, minWidth: 20},
        {Header: 'Name', accessor: 'name', minWidth: 100},
        {Header: 'Amount', accessor: 'amount', minWidth: 100},
        {Header: 'Purchase', accessor: 'purchase', minWidth: 100},
        {Header: 'Sale', accessor: 'sale', minWidth: 100},
        {Header: 'Lasted Modified', accessor: 'updatedAt', minWidth: 100}
    ])
}