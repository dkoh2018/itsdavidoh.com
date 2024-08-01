"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Ethos", path: "/work" },
    // { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/posts" },
    { name: "GuestBook", path: "/guestbook" },
  ];

  return (
    <nav className="w-full max-w-4xl mx-auto mt-4 mb-2 px-4">
      <div className="flex justify-end space-x-3 md:space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === item.path
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
