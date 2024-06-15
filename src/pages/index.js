import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleonClick = () => {
    router.push("/shop/[id]");
  };

  return (
    <div>
      <div>
        <Link href="/profile">Profile</Link>;
        <Link href="/shop/sepatu-lari">Shop</Link>
      </div>
      <div>
        <button onClick={handleonClick}>mau bayar</button>
      </div>
    </div>
  );
}
