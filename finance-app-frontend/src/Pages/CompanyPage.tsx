import { CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyProfie } from "../api";
import { CompanyProfile } from "../dtos";
import Sidebar from "../Components/Sidebar/Sidebar";
import CompanyDashboard from "../Components/CompanyDashboard/CompanyDashboard";

const CompanyPage : React.FC = (): JSX.Element => {
  const { symbol } = useParams();
  const [ company, setCompany]=useState<CompanyProfile[]>([]);
  const [ activeSection, setActiveSection]= useState('profile')

  useEffect(() => {
   const getCompanyInfo = async () =>{
    const response=await getCompanyProfie(symbol!)
    setCompany(response!)
   }
   getCompanyInfo()
  }, []);

  


  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Sidebar onSectionChange={setActiveSection}/>
      {company.length===0 ? <CircularProgress color="success" /> : <CompanyDashboard activeSection={activeSection} company={company}/>}
    </Container>
  );
};

export default CompanyPage ;
