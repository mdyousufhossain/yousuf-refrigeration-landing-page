export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-6">YOUSUF REFRIGERATION</h3>
          <p className="text-sm leading-relaxed">
            Leading manufacturer and supplier of commercial kitchen equipment, 
            cooling systems, and spare parts in Bangladesh.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Core Products</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-sky-400">Bakery Ovens</a></li>
            <li><a href="#" className="hover:text-sky-400">Commercial Fridges</a></li>
            <li><a href="#" className="hover:text-sky-400">Custom Food Carts</a></li>
            <li><a href="#" className="hover:text-sky-400">Restaurant Displays</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Service & Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-sky-400">AC Repair & Service</a></li>
            <li><a href="#" className="hover:text-sky-400">Spare Parts Catalog</a></li>
            <li><a href="#" className="hover:text-sky-400">Annual Maintenance</a></li>
            <li><a href="#" className="hover:text-sky-400">Installation Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Headquarters</h4>
          <p className="text-sm leading-relaxed">
            66, 70 Kazi Nazrul Islam Avenue,<br />
            Farmgate, Dhaka - 1215,<br />
            Bangladesh
          </p>
          <p className="mt-4 font-bold text-white">+880 1XX-XXXXXXX</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-xs flex justify-between">
        <p>© 2025 Yousuf Refrigeration. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}