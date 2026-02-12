import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
      <div className="flex justify-around items-center h-14">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link to="/testpage1" className="text-gray-700 hover:text-blue-500">
          testpage1
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-500">
          Services
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue-500">
          Blog
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">
          Contact
        </Link>
      </div>
    </nav>
  );
}
