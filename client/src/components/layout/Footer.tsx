import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <img 
                src="/Logo_webna.svg" 
                alt="Webna" 
                className="h-8 w-auto"
                style={{ height: '2.5rem' }}
              />
            </Link>
            <p className="mt-4 text-gray-600">
              Providing innovative IT solutions and digital transformation services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">IT Solutions</li>
              <li className="text-gray-600">AI Development</li>
              <li className="text-gray-600">Automation</li>
              <li className="text-gray-600">Data Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@webna.co</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Webna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;