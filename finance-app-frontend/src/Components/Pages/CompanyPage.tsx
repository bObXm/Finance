import { CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyProfie } from "../../api";
import { CompanyProfile } from "../../dtos";
import Sidebar from "../Sidebar/Sidebar";

const Company: React.FC = (): JSX.Element => {
  const { symbol } = useParams();
  const [ company, setCompany]=useState<CompanyProfile[]>([]);
 

  useEffect(() => {
   const getCompanyInfo=async()=>{
    const response=await getCompanyProfie(symbol!)
    setCompany(response!)
   }
   getCompanyInfo()
  }, []);


  return (
    <Container
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Sidebar/>
      {company.length===0 ? <CircularProgress color="success" /> : company[0].ceo}
      
    </Container>
  );
};

export default Company;
