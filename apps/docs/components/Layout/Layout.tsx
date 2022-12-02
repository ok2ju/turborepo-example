import { ReactNode } from "react";
import Link from "next/link";
import { NavItem, MenuSection } from "../../constants/routes";

interface LayoutProps {
  nav: Array<NavItem>;
  menu: Array<MenuSection>;
  children: ReactNode;
}

const Layout = ({ nav, menu, children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="mx-auto max-w-7xl px-4 border-b-[1px] border-gray-20 w-full">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center justify-start">
            <span className="sr-only">Your Company</span>
            <p>Logo here</p>
            <span className="ml-3">Example</span>
          </Link>
          <nav className="flex space-x-8 ml-4">
            {nav.map((item) => (
              <Link
                key={item.key}
                href={item.slug}
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[250px] overflow-y-auto px-6 py-6">
          {menu.map((item) => (
            <div key={item.key} className="flex flex-col mb-4">
              <h4 className="text-base font-medium mb-1">{item.section}</h4>
              {item.pages.map((page) => (
                <Link
                  key={page.key}
                  href={page.slug}
                  className="text-sm font-light py-2"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto px-16 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
