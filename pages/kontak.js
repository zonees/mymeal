import Link from 'next/link';

export default function Kontak() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Hubungi Kami</h1>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Nama" className="w-full p-3 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <textarea rows="4" placeholder="Pesan" className="w-full p-3 border rounded" required></textarea>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80 transition">
          Kirim
        </button>
      </form>
      <div className="mt-8">
        <Link href="/produk" className="text-gray-700 hover:opacity-80 transition">
          Produk
        </Link>
      </div>
    </div>
  )
}
