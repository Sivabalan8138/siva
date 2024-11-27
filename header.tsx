import Link from 'next/link'
import { Search, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-[#333545] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">BookMyShow</Link>
        <div className="relative flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="w-full py-2 px-4 rounded-md text-black"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/movies">Movies</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/plays">Plays</Link></li>
            <li><Link href="/sports">Sports</Link></li>
          </ul>
        </nav>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

