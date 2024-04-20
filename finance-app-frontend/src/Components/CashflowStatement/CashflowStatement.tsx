import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCashFlow } from "../../api";
import { CompanyCashFlow } from "../../dtos";
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const CashflowStatement: React.FC = (): JSX.Element => {
  const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>([]);
  const { symbol } = useParams();

  useEffect(() => {
    const getCashFlowData = async () => {
      const data = await getCashFlow(symbol!);
      setCashFlowData(data);
    };
    getCashFlowData();
  }, []);

  console.log(cashFlowData);

  if (!cashFlowData || cashFlowData.length === 0) {
    return <CircularProgress color="success" />;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(cashFlowData![0]).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cashFlowData.map((el) => {
            return (
              <TableRow>
                {Object.values(el).map((value, index) => (
                  <TableCell key={index}>{String(value)}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CashflowStatement;
