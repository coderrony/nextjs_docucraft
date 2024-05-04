import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <div className=" lg:flex">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={24} priority />
      </Link>
    </div>
  );
}

export default Logo;
