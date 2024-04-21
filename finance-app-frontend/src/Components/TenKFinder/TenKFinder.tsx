import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../dtos";
import { getTenK } from "../../api";
import { useParams } from "react-router-dom";
import { Box, Chip, CircularProgress, Stack, Typography } from "@mui/material";

const TenKFinder: React.FC = (): JSX.Element => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  const { symbol } = useParams();

  useEffect(() => {
    const getTenKData = async () => {
      const data = await getTenK(symbol!);
      setCompanyData(data);
    };
    getTenKData();
  }, []);

  console.log(companyData);

  if(!companyData || companyData?.length === 0){
    return <CircularProgress color="success" />;
  }

  return (
    <Box marginBottom={3}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        SEC Filings (10-K)
      </Typography>

      <Stack direction="row" spacing={1}>
        {companyData.slice(0, 19).map((el)=>{
          return  <Chip label={el.fillingDate.slice(0,4)} color="success" component="a" href={companyData[0].finalLink} target="_blank" clickable key={el.cik}/>
        })}
      </Stack>
    </Box>
  );
};

export default TenKFinder;
