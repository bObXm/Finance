import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { testIncomeStatementData } from './testData';

const Table = () => {
   let data= testIncomeStatementData.map((el, index)=>{
   return {id:index,
        ...el
    }
   })

   console.log(data);
   
    
    const columns: GridColDef[] = [
      { field: 'id', headerName: 'ID', width:10},
      { field: 'symbol', headerName: 'Symbol', type: 'number', flex: 1 },
      { field: 'revenue', headerName: 'Revenue', type: 'number', flex: 1 },
      { field: 'grossProfit', headerName: 'Gross Profit', type: 'number', flex: 1},
      { field: 'eps', headerName: 'EPS', type: 'number', flex: 1},
    ];
      
      

  return (
    <div style={{ height: 400, width: '100%',  display:'flex'}}>
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  </div>
  )
}

export default Table
