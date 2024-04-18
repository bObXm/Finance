import { Container } from '@mui/material'
import RatioList from '../RatioList/RatioList'
import Table from '../Table/Table'
import React from 'react'
import { CompanyProfile } from "../../dtos";

type Props = {
  data: CompanyProfile
};

const IncomeStatement: React.FC<Props> = ({data}):JSX.Element => {

  console.log(data);
  

  return (
    <Container maxWidth='lg'>
      <RatioList data={data}/>
      <Table/>
    </Container>
  )
}

export default IncomeStatement