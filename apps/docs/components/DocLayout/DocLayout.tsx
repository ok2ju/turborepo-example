import { ReactNode } from "react";
import Link from "next/link";
import { NavItem, MenuSection } from "../../constants/routes";
import ActiveLink from "../ActiveLink";
import Toc from "./Toc";

interface LayoutProps {
  nav: Array<NavItem>;
  menu: Array<MenuSection>;
  toc?: Array<{}>;
  children: ReactNode;
}

const Layout = ({ nav, menu, toc, children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="mx-auto max-w-7xl px-5 border-b border-gray-30 w-full">
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="flex items-center justify-start">
            <span className="sr-only">Your Company</span>
            <p className="ml-4 font-medium">Design System</p>
          </Link>
          <nav className="flex space-x-7 ml-5">
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
        <div className="w-[19.5rem] overflow-y-auto px-3 py-6">
          {menu.map((item) => (
            <div key={item.key} className="flex flex-col mb-5">
              <h4 className="text-base font-medium text-gray-100 px-5 py-3">
                {item.section}
              </h4>
              {item.pages.map((page) => (
                <ActiveLink
                  key={page.key}
                  href={page.slug}
                  activeClassName="active"
                  className="text-sm font-light px-5 py-3 text-gray-100 hover:bg-blue-10 rounded-md [&.active]:bg-blue-20"
                >
                  {page.title}
                </ActiveLink>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl px-6 py-10 mx-auto">{children}</div>
        </div>
        {toc && toc.length > 0 && <Toc toc={toc} />}
      </div>
    </div>
  );
};

export default Layout;
