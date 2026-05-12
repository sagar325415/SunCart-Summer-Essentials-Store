"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router=useRouter();

  const { data: session, isPending } = authClient.useSession()
  const userr = session?.user;
  const handleSignOut=async()=>{

    await authClient.signOut();
    router.push('/login')
  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  px-4 sm:px-6 flex-wrap gap-3  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.webp"}
            alt="logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto rounded-full"
          />
          <h3 className="font-black  text-lg text-base sm:text-lg"> Summer Ecommerce platform</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

        {
          isPending ? <div className="flex flex-col items-center gap-2">
            <Spinner color="danger" />
            <span className="text-xs text-muted">Danger</span>
          </div>:userr ? <div className="flex gap-4 items-center">
          <h2>{userr?.name}</h2>
          <Avatar>
            <Avatar.Image alt={userr?.name} src={userr?.image}
             referrerPolicy="no-referrer" />
            <Avatar.Fallback>{userr?.name[0]}</Avatar.Fallback>
          </Avatar>
          <Button onClick={handleSignOut} variant="danger">Log Out</Button>
        </div> : (<div className="flex gap-4">
          <ul className="flex items-center text-sm">
            <li className="mr-4">
              <Link href={"/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </div>)
        }
      </nav>
    </div>
  );
};

export default Navbar;