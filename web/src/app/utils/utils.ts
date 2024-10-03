import { Revenue } from "./type-definition";

export const formatCurrency = (amount: number) => {
  return (amount/100).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

export const generateYAxis= (revenue: Revenue[]) => {
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month)=>month.revenue));
  const topLabel = Math.ceil(highestRecord/1000)*1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }
  return { yAxisLabels, topLabel };
}