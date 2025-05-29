import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyMeal</title>
        <meta name="description" content="MyMeal - Makanan sehat, fresh, dan berkualitas" />
      </Head>
      {/* Navbar ala Apple */}
      <nav className="flex justify-center items-center py-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-12">
          <span className="text-lg font-semibold tracking-tight">MyMeal</span>
          <Link href="/produk" className="text-gray-700 hover:opacity-80 transition">
            Produk
          </Link>
          <Link href="/testimoni" className="text-gray-700 hover:text-black transition">Testimoni</Link>
          <Link href="/kontak" className="text-gray-700 hover:text-black transition">Kontak</Link>
        </div>
      </nav>
      {/* Hero ala Apple */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] bg-white">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-24 mb-4 text-center leading-tight">
          Makanan Sehat, Fresh,<br />dan Berkualitas
        </h1>
        <p className="text-lg text-gray-500 mb-10 text-center max-w-xl">
          Nikmati makanan sehat dengan bahan pilihan terbaik, diantar langsung ke rumah Anda.
        </p>
        <Link href="/produk" className="px-8 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition">
          Lihat Menu
        </Link>
        <div className="mt-16 w-full flex justify-center">
          <img
            src="/images/hero.jpg"
            alt="Makanan sehat"
            className="rounded-2xl max-w-2xl w-full object-cover"
            style={{ aspectRatio: '16/7' }}
          />
        </div>
      </main>
      {/* Footer minimalis */}
      <footer className="text-center text-gray-400 text-sm py-8 border-t border-gray-100 bg-white">
        &copy; {new Date().getFullYear()} MyMeal. All rights reserved.
      </footer>
    </>
  )
}
