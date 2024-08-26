import { Card } from "../ui/dashboard/cards";
import { lusitana } from "../ui/fonts";

export default function Page(){
  // To-Do: mock-data
  const mockData = {
    numberOfInvoices: 1000,
    numberOfCustomers: 1000,
    totalPaidInvoices: 1000,
    totalPendingInvoices: 1000,
    revenue: 1000
  };
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`} >
        DashBoard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={mockData.totalPaidInvoices} type="collected" />
        <Card title="Pending" value={mockData.totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={mockData.numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={mockData.numberOfCustomers} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        customer
      </div>
    </main>
  );
}