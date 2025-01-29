import { Link } from 'next-view-transitions'



export default function Navbar(){
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray p-6">
        <div className="flex items-center flex-shrink-0 mx-auto gap-24 font-standard text-2xl font-medium">
            
            <div className="hover:text-white">
                <Link href='/'>Home</Link>
            </div>
            <div className=" hover:text-white">
                <Link href="/About">About</Link>
            </div>
            <div className=" hover:text-white">
                <Link href="/Contact">Contact</Link>
            </div>
            
        </div>
    </nav>
  )
}


