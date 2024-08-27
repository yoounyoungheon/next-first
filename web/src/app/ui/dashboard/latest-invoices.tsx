import { LatestInvoice } from "@/app/lib/type-definition";
import { lusitana } from "../fonts";
import clsx from "clsx";
import Image from 'next/image';
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default async function LatestInvoices({latestInvoices}:{latestInvoices:LatestInvoice[]}){
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        LatestInvoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestInvoices.map((info, i)=>{
            return(
            <div key={info.id} className={clsx('flex flex-row items-center justify-between py-4', {'border-t': i !==0})}>
              <div className="flex items-center">
                <Image 
                src ={info.image_url}
                alt={`${info.name}'s profile`}
                className = "mr-4 rounded-full"
                width={32} height = {32}/>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {info.name}
                  </p>
                  <p>
                    {info.email}
                  </p>
                </div>
              </div>
              <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                {info.amount}
              </p>
            </div>)
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
            <ArrowPathIcon className="h-5 w-5 text-gray-500"/>
            <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}