import { ReactNode } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cx from "classnames";
import { MenuSection } from "../../constants/routes";
import ActiveLink from "../ActiveLink";
import { ScrollArea } from "../ScrollArea";
import Toc from "./Toc";
import Logo from "../Icons/Logo";

interface LayoutProps {
  menu: Array<MenuSection>;
  toc?: Array<{}>;
  children: ReactNode;
}

const Layout = ({ menu, toc, children }: LayoutProps) => {
  const { t } = useTranslation("common");

  return (
    <div className="h-screen">
      <div className="fixed top-0 left-0 right-0 px-6 border-b border-base w-full bg-background z-20">
        <div className="flex justify-between items-center h-[72px]">
          <Link href="/" className="flex items-center justify-start">
            <span className="sr-only">Your Company</span>
            <svg width="34" height="36" viewBox="0 0 44 46" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.3559 16.0838L38.1846 6.99571L27.0928 13.768V0.423737H16.9072V13.768L5.80333 6.99571L0.644073 16.0838L11.9654 22.9938L0.644073 29.9162L5.81541 39.0043L16.9072 32.2195V45.5763H27.0928V32.2321L38.1846 39.0043L43.3559 29.9162L32.0225 22.9938L43.3559 16.0838Z"
                fill="#FF0000"
              />
            </svg>
            <p className="ml-3 font-medium">Design System</p>
          </Link>
        </div>
      </div>
      <div className="pt-[72px] h-full">
        <div className="fixed left-0 top-[72px] bottom-0 w-[15rem]">
          <ScrollArea>
            <div className="p-6">
              {menu.map((item) => (
                <div key={item.key} className="flex flex-col mb-5">
                  <h4 className="text-heading-1 text-primary py-3">
                    {t(`menu.${item.key}.sectionTitle`)}
                  </h4>
                  {item.pages.map((page) => (
                    <ActiveLink
                      key={page.key}
                      href={page.slug}
                      activeClassName="active"
                      className="text-body1-short px-5 py-3 text-secondary hover:bg-background-hover rounded-sm [&.active]:bg-background-selected"
                    >
                      {t(`menu.${item.key}.${page.key}`)}
                    </ActiveLink>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col h-full pl-[15rem]">
          <div
            className={cx("relative flex-1", {
              "xl:mr-[16.5rem]": toc && toc.length,
            })}
          >
            <div className="max-w-[58.75rem] mx-auto">
              <div className="px-11 pt-9">{children}</div>
            </div>
          </div>
          <div className="relative px-6 mt-10 bg-background z-10">
            <div className="border-t border-base flex justify-between py-6">
              <div>
                <Logo />
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="text-label-1 text-secondary px-3">
                    {t("footer.links.github")}
                  </span>
                  <span className="text-label-1 text-secondary px-3">
                    {t("footer.links.contact")}
                  </span>
                </div>
                <span className="text-label-1 text-secondary pl-3">
                  {t("footer.copyright")}
                </span>
              </div>
            </div>
          </div>
        </div>
        {toc && toc.length > 0 && <Toc toc={toc} />}
      </div>
    </div>
  );
};

export default Layout;
