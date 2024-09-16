import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center m-10 gap-10">
      <h1 className="text-5xl uppercase font-black">Simple Games</h1>
      <div className="flex flex-wrap">
        <div>
          <Link
            href="/shifumi"
            className='flex flex-col p-4 bg-blue-600 w-60 h-52 rounded-xl'
          >
            <p className='text-xl font-bold'>Shifumi</p>
          </Link>
        </div>
      </div>
    </div>
  );
}