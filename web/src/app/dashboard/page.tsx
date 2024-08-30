import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";
import { mockData } from "../lib/mock-data";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { instance } from "../lib/http";
import * as process from 'process';

export default async function Page(){
  const {totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers, revenue} = mockData;
  const response = await instance.get(`${process.env.API_PATH}/mock-data/latest-invoice`);
  const latestInvoices = response.data;

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`} >
        DashBoard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}/>
        <LatestInvoices latestInvoices={latestInvoices}></LatestInvoices>
      </div>
    </main>
  );
}