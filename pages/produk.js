export default function Produk() {
  const produkList = [
    { nama: "Mie Ayam Pedas" },
    { nama: "Nasi Goreng Instan" },
    { nama: "Bubur Ayam Instan" }
  ];
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Produk Kami</h1>
      <ul className="space-y-6">
        {produkList.map((produk, idx) => (
          <li key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <span>{produk.nama}</span>
            <a
              href={`https://wa.me/6285868547827?text=Halo%20saya%20mau%20pesan%20${encodeURIComponent(produk.nama)}`}
              className="px-4 py-2 border border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
              target="_blank"
              rel="noopener"
            >
              Pesan via WhatsApp
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
