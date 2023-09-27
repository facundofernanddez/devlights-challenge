import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 mt-10 flex py-20">
      <div className="ml-20">
        <div>Logo</div>
      </div>

      <div className="flex flex-1 gap-4 justify-center">
        <Link href={"/"}>Acerca de Volve</Link> |
        <Link href={"/"}>Steamworks</Link> |<Link href={"/"}>Empleo</Link> |
        <Link href={"/"}>Distribucion de Steam</Link> |
        <Link href={"/"}>Tarjetas de regalo</Link> |
        <Link href={"/"}>Steam</Link> |<Link href={"/"}>@steam</Link>
      </div>
    </footer>
  );
}
