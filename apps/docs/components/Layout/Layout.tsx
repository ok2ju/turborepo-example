import { ReactNode } from "react";
import Link from "next/link";
import { NavItem, MenuSection } from "../../constants/routes";
import ActiveLink from "../ActiveLink";

interface LayoutProps {
  nav: Array<NavItem>;
  menu: Array<MenuSection>;
  children: ReactNode;
}

const Layout = ({ nav, menu, children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="mx-auto max-w-7xl px-4 border-b-[1px] border-gray-30 w-full">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center justify-start">
            <span className="sr-only">Your Company</span>
            <p className="ml-3 font-medium">Design System</p>
          </Link>
          <nav className="flex space-x-8 ml-4">
            {nav.map((item) => (
              <ActiveLink
                key={item.key}
                href={item.slug}
                activeClassName="active"
                className="text-sm text-gray-50 hover:text-gray-90 [&.active]:text-gray-90"
              >
                {item.title}
              </ActiveLink>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[250px] overflow-y-auto px-2 py-6">
          {menu.map((item) => (
            <div key={item.key} className="flex flex-col mb-5">
              <h4 className="text-base font-medium text-gray-100 px-4 py-2">
                {item.section}
              </h4>
              {item.pages.map((page) => (
                <ActiveLink
                  key={page.key}
                  href={page.slug}
                  activeClassName="active"
                  className="text-sm font-light px-4 py-2 text-gray-100 hover:bg-blue-10 rounded-md [&.active]:bg-blue-20"
                >
                  {page.title}
                </ActiveLink>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl px-6 py-16 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
