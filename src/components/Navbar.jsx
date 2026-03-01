import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full bg-[#202124] border-b border-gray-700  py-4 flex items-center">
      
      <Link to="/" className="text-6xl font-bold select-none">
        <span className="text-[#4285F4]">H</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">p</span>
        <span className="text-[#34A853]">g</span>
        <span className="text-[#EA4335]">l</span>
        <span className="text-[#4285F4]">e</span>
      </Link>

    </nav>
  )
}

export default Navbar