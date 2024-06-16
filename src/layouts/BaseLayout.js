import Link from "next/link";
export default function BaseLayout({ children }) {
  return (
    <div className="">
      <nav className="flex items-center justify-between w-full p-10 text-white bg-green-800">
        <Link href="/">
          <h1 className="text-xl font-bold uppercase">Dibimbing Resto</h1>
        </Link>
        <Link href="/create">
          <h1 className="text-xl font-bold uppercase">Create</h1>
        </Link>
      </nav>
      <div className="h-screen min-h-screen p-8 bg-gray-500">{children}</div>
    </div>
  );
}
