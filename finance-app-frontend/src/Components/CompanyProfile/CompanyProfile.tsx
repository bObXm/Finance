import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKeyMetrics } from "../../api";
import { CompanyKeyMetrics } from "../../dtos";
import { Accordion, AccordionSummary,Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InfoIcon from "@mui/icons-material/Info";
import PaidIcon from '@mui/icons-material/Paid';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ScoreIcon from '@mui/icons-material/Score';
import DiamondIcon from '@mui/icons-material/Diamond';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import Metric from "../Metric/Metric";


const CompanyProfile: React.FC = ():JSX.Element => {
  const { symbol } = useParams();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics[]>();

  useEffect(() => {
    const getKeyMetricsInfo = async () => {
      const response = await getKeyMetrics(symbol!);
      setCompanyData(response);
    };
    getKeyMetricsInfo();
  }, []);

  let data = companyData ? companyData[0] : undefined

  return (
    <Accordion sx={{ margin: 4 }}>
      <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
        <Typography fontWeight={"bold"}>{symbol} Stats:</Typography>
      </AccordionSummary>
    {
      data ? 
      <div>
        <Metric title={'Market Cap'}  description={"Total value of all a company's shares of stock"} value={data.marketCapTTM} Icon ={DiamondIcon}/>
        <Metric title={'Current Ratio'}  description={"Measures the companies ability to pay short term debt obligations"} value={data.currentRatioTTM} Icon ={StackedBarChartIcon}/>
        <Metric title={'Return On Equity'}  description={"Return on equity is the measure of a company's net income divided by its shareholder's equity"} value={data.roeTTM} Icon ={RequestQuoteIcon}/>
        <Metric title={'Return On Assets'}  description={"ROA indicates the efficiency of asset use to generate profit"} value={data.returnOnTangibleAssetsTTM} Icon ={InfoIcon}/>
        <Metric title={'Free Cashflow Per Share'}  description={"Rndicates the cash a company generates per share, after subtracting capital expenditures."} value={data.freeCashFlowPerShareTTM} Icon ={AssuredWorkloadIcon}/>
        <Metric title={'Book Value Per Share TTM'}  description={"Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis"} value={data.bookValuePerShareTTM} Icon ={ScoreIcon}/>
        <Metric title={'Divdend Yield TTM'}  description={"Shows how much a company pays each year relative to stock price"} value={data.dividendYieldTTM} Icon ={PaidIcon}/>
        <Metric title={'Capex Per Share TTM'}  description={"Capex is used by a company to aquire, upgrade, and maintain physical assets"} value={data.capexPerShareTTM} Icon ={LeaderboardIcon}/>
        <Metric title={'Graham Number'}  description={"Estimates the maximum fair price for a stock based on its earnings and book value"} value={data.grahamNumberTTM} Icon ={CandlestickChartIcon}/>
        <Metric title={'PE Ratio'}  description={"This is the upperbouind of the price range that a defensive investor should pay for a stock"} value={data.peRatioTTM} Icon ={DataThresholdingIcon}/>
      </div> 
      : <Typography component="div" sx={{ padding: 2 }}>No data available</Typography>
    }
    </Accordion>
  );
};

export default CompanyProfile;