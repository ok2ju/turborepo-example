import { ReactNode } from "react";
import Link from "next/link";
import { NavItem, MenuSection } from "../../constants/routes";
import ActiveLink from "../ActiveLink";
import { ScrollArea } from "../ScrollArea";
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
      <div className="mx-auto max-w-7xl px-6 border-b border-border w-full">
        <div className="flex justify-between items-center py-6">
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
                className="text-heading-1 text-secondary hover:text-gray-90 [&.active]:text-primary"
              >
                {item.title}
              </ActiveLink>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[15rem]">
          <ScrollArea>
            <div className="p-6">
              {menu.map((item) => (
                <div key={item.key} className="flex flex-col mb-5">
                  <h4 className="text-heading-1 text-primary py-3">
                    {item.section}
                  </h4>
                  {item.pages.map((page) => (
                    <ActiveLink
                      key={page.key}
                      href={page.slug}
                      activeClassName="active"
                      className="text-body1-short px-5 py-3 text-secondary hover:bg-background-hover rounded-sm [&.active]:bg-background-selected"
                    >
                      {page.title}
                    </ActiveLink>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="flex-1">
          <ScrollArea>
            <div className="max-w-3xl px-11 pt-9 mx-auto">
              {children}
              <div className="py-6 mt-10 border-t border-border flex justify-between">
                <div>Logo here</div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="text-label-1 text-secondary px-3">
                      GitHub
                    </span>
                    <span className="text-label-1 text-secondary px-3">
                      Contact us
                    </span>
                  </div>
                  <span className="text-label-1 text-secondary pl-3">
                    Copyright © 2022 - All Rights reserved
                  </span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        {toc && toc.length > 0 && <Toc toc={toc} />}
      </div>
    </div>
  );
};

export default Layout;
