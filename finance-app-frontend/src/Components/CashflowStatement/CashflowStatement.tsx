import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCashFlow } from "../../api";
import { CompanyCashFlow } from "../../dtos";
import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TenKFinder from "../TenKFinder/TenKFinder";

const CashflowStatement: React.FC = (): JSX.Element => {
  const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[] | undefined>([]);
  const { symbol } = useParams();

  useEffect(() => {
    const getCashFlowData = async () => {
      const data = await getCashFlow(symbol!);
      setCashFlowData(data);
    };
    getCashFlowData();
  }, []);

  if (!cashFlowData || cashFlowData.length === 0) {
    return <CircularProgress color="success" />;
  }

  return (
    <Box>
      <TenKFinder/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(cashFlowData![0]).map((key) => (
                <TableCell key={key}><b>{key}</b></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cashFlowData.map((el) => {
              return (
                <TableRow key={el.link}>
                  {Object.values(el).map((value, index) => (
                    <TableCell key={index}>{String(value)}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CashflowStatement;
