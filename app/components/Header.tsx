
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";

export default function Home() {
  return (
    <header className="bg-gray-800 p-4 rounded-br-lg border-double border-4 border-red-500">
      <div className="container mx-auto flex justify-between items-center">
      <Link href="http://localhost:3000/">
        
          <div className="logo">
            <Image
              src="/formula-1.svg" 
              alt="Logo"
              width={100} 
              height={40} 
            />
          </div>
        
      </Link>
        <Nav/>
      </div>
    </header>
  )
}
