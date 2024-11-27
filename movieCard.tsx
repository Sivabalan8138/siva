import Image from 'next/image'
import Link from 'next/link'

interface MovieCardProps {
  id: number
  title: string
  image: string
  rating: number
  genre: string
}

export function MovieCard({ id, title, image, rating, genre }: MovieCardProps) {
  return (
    <Link href={`/movie/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform group-hover:scale-105 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 ease-in-out z-10"></div>
        <div className="relative z-20">
          <Image src={image} alt={title} width={300} height={450} className="w-full h-[450px] object-cover" />
          <div className="p-4 bg-white group-hover:bg-transparent transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
            <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">{genre}</p>
            <div className="mt-2 flex items-center">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-semibold group-hover:text-white transition-colors duration-300">{rating}/10</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

