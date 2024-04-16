import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKeyMetrics } from "../../api";
import { CompanyKeyMetrics } from "../../dtos";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InfoIcon from "@mui/icons-material/Info";
import PaidIcon from '@mui/icons-material/Paid';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ScoreIcon from '@mui/icons-material/Score';
import DiamondIcon from '@mui/icons-material/Diamond';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const CompanyProfile = () => {
  const { symbol } = useParams();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics[]>();

  useEffect(() => {
    const getKeyMetricsInfo = async () => {
      const response = await getKeyMetrics(symbol!);
      setCompanyData(response);
    };
    getKeyMetricsInfo();
  }, []);

  console.log(companyData);

  return (
    <Accordion sx={{ margin: 4 }}>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content"id="panel1-header">
        <Typography fontWeight={"bold"}>{symbol} Stats:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Market Cap: {companyData ? companyData[0].marketCapTTM : <CircularProgress color="success" />}
          <Tooltip title="Total value of all a company's shares of stock" placement="right" sx={{marginLeft:2}}>
            <PaidIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
          Current Ratio: {companyData ? companyData[0].currentRatioTTM : <CircularProgress color="success" />}          
          <Tooltip title="Measures the companies ability to pay short term debt obligations" placement="right" sx={{marginLeft:2}}>
            <PriceChangeIcon  />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Return On Equity: {companyData ? companyData[0].roeTTM : <CircularProgress color="success" />}          
          <Tooltip title="Return on equity is the measure of a company's net income divided by its shareholder's equity" placement="right" sx={{marginLeft:2}}>
            <RequestQuoteIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Return On Assets: {companyData ? companyData[0].returnOnTangibleAssetsTTM : <CircularProgress color="success" />}          
          <Tooltip title="Return on assets is the measure of how effective a company is using its assets" placement="right" sx={{marginLeft:2}}>
            <InfoIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Free Cashflow Per Share: {companyData ? companyData[0].freeCashFlowPerShareTTM : <CircularProgress color="success" />}          
          <Tooltip title="Return on assets is the measure of how effective a company is using its assets" placement="right" sx={{marginLeft:2}}>
            <AssuredWorkloadIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Book Value Per Share TTM: {companyData ? companyData[0].bookValuePerShareTTM : <CircularProgress color="success" />}          
          <Tooltip title="Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis" placement="right" sx={{marginLeft:2}}>
            <ScoreIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Divdend Yield TTM: {companyData ? companyData[0].dividendYieldTTM : <CircularProgress color="success" />}          
          <Tooltip title="Shows how much a company pays each year relative to stock price" placement="right" sx={{marginLeft:2}}>
            <DiamondIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Capex Per Share TTM: {companyData ? companyData[0].capexPerShareTTM : <CircularProgress color="success" />}          
          <Tooltip title="Capex is used by a company to aquire, upgrade, and maintain physical assets" placement="right" sx={{marginLeft:2}}>
            <LeaderboardIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         Graham Number: {companyData ? companyData[0].grahamNumberTTM : <CircularProgress color="success" />}          
          <Tooltip title="This is the upperbouind of the price range that a defensive investor should pay for a stock" placement="right" sx={{marginLeft:2}}>
            <DiamondIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
         PE Ratio: {companyData ? companyData[0].peRatioTTM : <CircularProgress color="success" />}          
          <Tooltip title="This is the upperbouind of the price range that a defensive investor should pay for a stock" placement="right" sx={{marginLeft:2}}>
            <ShowChartIcon />
          </Tooltip>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CompanyProfile;
