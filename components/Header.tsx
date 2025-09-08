"use client"
import {Database} from "lucide-react"


const Header = () => {
  return (
    <header className="w-full h-16 bg-blue-600 flex items-center px-4 text-white shadow-md">
      <Database size={35} className="mr-2" />
      <div>
        <h1 className="text-xl font-bold">BIGDATA PBN3</h1><span>สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเพชรบูรณ์ เขต 3</span>
      </div>
      
    </header>
  )
}

export default Header