import Link from 'next/link';

interface NavbarProps {
    setSection: (section: number) => void; // Define the type of the setSection prop
  }

const Navbar: React.FC<NavbarProps> = ({ setSection }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-gray-30 mx-auto gap-12 font-standard text-2xl font-bold">
            
            <div className="hover:text-white">
                <a href="#" onClick={() => setSection(0)}>Home</a>
            </div>
            <div className=" hover:text-white">
                <a href="#about" onClick={() => setSection(1)} >About</a>
            </div>
            <div className=" hover:text-white">
                <a href="#contact" onClick={() => setSection(2)}>Contact</a>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar;
