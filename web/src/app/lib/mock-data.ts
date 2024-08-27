export const mockData = {
    numberOfInvoices: 1000,
    numberOfCustomers: 24,
    totalPaidInvoices: 30,
    totalPendingInvoices: 550,
    revenue: [
      {month: '1', revenue: 300},
      {month: '2', revenue: 400},
      {month: '3', revenue: 700},
      {month: '4', revenue: 500},
      {month: '5', revenue: 600},
      {month: '6', revenue: 800},
      {month: '7', revenue: 900},
      {month: '8', revenue: 500},
      {month: '9', revenue: 1200},
      {month: '10', revenue: 1000},
      {month: '11', revenue: 800},
    ],
    latestInvoices: [
      {id:'123', name: '영헌1', image_url: 'web/public/vercel.svg', email: '@google.com', amount: '1000'},
      {id:'124', name: '영헌2', image_url: 'web/public/vercel.svg', email: '@google.com', amount: '1000'},
      {id:'125', name: '영헌3', image_url: 'web/public/vercel.svg', email: '@google.com', amount: '1000'},
      {id:'126', name: '영헌4', image_url: 'web/public/vercel.svg', email: '@google.com', amount: '1000'},
      ]
  };

  export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
  };