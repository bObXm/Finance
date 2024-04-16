import { Container } from '@mui/material'
import RatioList from '../RatioList/RatioList'
import Table from '../Table/Table'


const IncomeStatement = () => {
  return (
    <Container maxWidth='lg'>
      <RatioList/>
      <Table/>
    </Container>
  )
}

export default IncomeStatement