import { Inter } from "@next/font/google";
import Link from "next/Link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <a>
      <Link href="/blog/my-first-article">click here</Link>
    </a>
  );
}
