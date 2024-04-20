import { Container } from '@mui/material'
import RatioList from '../RatioList/RatioList'
import Table from '../Table/Table'
import React, { useEffect, useState } from 'react'
import { CompanyIncomeStatement, CompanyProfile } from "../../dtos";
import { useParams } from 'react-router-dom';
import { getIncomeStatement } from '../../api';

type Props = {
  data: CompanyProfile
};

const IncomeStatement: React.FC<Props> = ({data}):JSX.Element => {
  const {symbol}=useParams()
  const [incomeStatement, setIncomeStatement]=useState<CompanyIncomeStatement[]>()
  
  useEffect(()=>{
    const getIncomeStatementInfo = async()=>{
     const response = await getIncomeStatement(symbol!)
     setIncomeStatement(response)
    }
    getIncomeStatementInfo()
  },[])

  return (
    <Container maxWidth='lg'>
      <RatioList data={data}/>
      <Table incomeStatement={incomeStatement}/>
    </Container>
  )
}

export default IncomeStatement