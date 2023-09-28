import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

//TODO: fix footer error when no search results are available

export default function Footer() {
  return (
    <footer className="bg-zinc-800 mt-10 flex py-16 bottom-[100vh] w-full">
      <Image
        src={logo}
        alt="deal image"
        className="ml-20 bg-zinc-800 object-cover bg-inherit rounded-full"
        width={100}
        height={100}
      />

      <div className="flex flex-1 gap-4 justify-center items-center">
        <Link href={"/"}>Acerca de Volve</Link> |
        <Link href={"/"}>Steamworks</Link> |<Link href={"/"}>Empleo</Link> |
        <Link href={"/"}>Distribucion de Steam</Link> |
        <Link href={"/"}>Tarjetas de regalo</Link> |
        <Link href={"/"}>Steam</Link> |<Link href={"/"}>@steam</Link>
      </div>
    </footer>
  );
}
