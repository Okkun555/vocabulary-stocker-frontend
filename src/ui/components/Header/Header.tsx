import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b flex item-center justify-between bg-violet-400 px-2">
      <h1>
        <Link href="/">
          <span className="text-white text-2xl font-semibold whitespace-nowrap font-logo">
            stocker
          </span>
        </Link>
      </h1>
      <span className="flex-1"></span>
      <button>ログイン</button>
    </header>
  );
}
