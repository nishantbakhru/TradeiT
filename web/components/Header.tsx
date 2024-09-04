// components/Header.tsx

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-blue-300">
            TradeIT
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tournaments" className="hover:text-blue-300">
              Tournaments
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/wallet" className="hover:text-blue-300">
              Wallet
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
