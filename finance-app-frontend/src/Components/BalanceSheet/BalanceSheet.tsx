import React, { useEffect, useState } from 'react'
import { getBalanceSheet } from '../../api'
import { useParams } from 'react-router-dom'
import { CompanyBalanceSheet } from '../../dtos'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { CircularProgress, Container} from '@mui/material'

const BalanceSheet : React.FC = ():JSX.Element => {
  const[companyData, setCompanyData]=useState<CompanyBalanceSheet[]>([])
  const {symbol}=useParams()
    
  useEffect(()=>{
      const getBalanceSheetData = async() =>{
        const response= await getBalanceSheet(symbol!)
        setCompanyData(response)
      }
      getBalanceSheetData()
  },[])  

  if (!companyData || companyData.length === 0) {
    return <CircularProgress color='success'/>;
  }

  const data = Object.entries(companyData![0]).map(([key, value], index) => ({
    id: index,
    key: key,
    value: value,
  }));

  const columns: GridColDef[] = [
    { field: 'key', headerName: 'Type', flex: 2 },
    { field: 'value', headerName: 'Value', flex: 2 }, 
  ];
      
    
  return (
    <Container>
      <div style={{ height: "55vh", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSizeOptions={[10, 20]}
          initialState={{pagination: {paginationModel: { pageSize: 10 } }}}
          />
      </div>
    </Container>
  );
}

export default BalanceSheet