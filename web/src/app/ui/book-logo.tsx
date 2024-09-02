import { BookOpenIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function BookLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BookOpenIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[40px]">Read Us</p>
    </div>
  );
}