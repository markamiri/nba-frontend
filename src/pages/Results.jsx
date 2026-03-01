import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function Results() {
  const location = useLocation()
  const query = location.state?.query

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })
        })

        const result = await response.json()
        setData(result)
      } catch (err) {
        console.error(err)
      }

      setLoading(false)
    }

    fetchData()
  }, [query])

  return (
    <div className="min-h-screen bg-[#202124] text-white p-10">
      <Navbar />

      <h1 className="text-3xl font-bold mb-6"></h1>

      <p className="text-xl font-semibold mb-2 pb-3.5">
        <strong>{query}</strong>
      </p>

      {loading && <p>Loading...</p>}

      {data && (
        <>
          <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Generated SQL:</h2>
        <pre className="bg-gray-800 p-4 rounded overflow-auto">
          {data.sql}
        </pre>
      </div>

          {data.results && data.results.length > 0 && (
            <div className="overflow-x-auto pb-3.5">
              <table className="min-w-full border border-gray-700 text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    {Object.keys(data.results[0]).map((key) => (
                      <th
                        key={key}
                        className="px-4 py-2 border border-gray-700 text-left"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {data.results.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-800 transition"
                    >
                      {Object.values(row).map((value, i) => (
                        <td
                          key={i}
                          className="px-4 py-2 border border-gray-700"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      
    </div>
  )
}

export default Results