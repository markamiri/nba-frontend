import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!query.trim()) return
    navigate("/results", { state: { query } })
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-[#202124] text-white flex flex-col items-center justify-center">

      <h1 className="text-7xl font-bold mb-10 tracking-tight select-none">
        <span className="text-[#4285F4]">H</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">p</span>
        <span className="text-[#34A853]">g</span>
        <span className="text-[#EA4335]">l</span>
        <span className="text-[#4285F4]">e</span>
      </h1>

      <div className="w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search NBA stats..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-8 py-4 pr-10 rounded-full bg-[#303134] border border-[#5f6368] focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
      </div>

      <div className="mt-8">
        <button
          onClick={handleSearch}
          className="bg-[#303134] hover:border hover:border-gray-500 px-6 py-2 rounded text-sm"
        >
          Hoopgle Search
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-8">
        Hoopgle offered in: <span className="text-blue-400">English</span>
      </p>
    </div>
  )
}

export default Home