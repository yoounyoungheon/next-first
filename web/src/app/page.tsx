import Image from "next/image";
import PuzuLogo from "./ui/puzu-logo";
import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col p-6">
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <PuzuLogo />
    </div> <br/>
    <p className={`${lusitana.className} text-2xl text-gray-800 md:text-3xl md:leading-normal`}>
      <strong>Welcome to <a href ="/dashboard" className="text-blue-500">Puzu ! Check your dashboard.</a> </strong>
    </p>
  </main>
  );
}
