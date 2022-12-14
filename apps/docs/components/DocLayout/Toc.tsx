import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";
import { ScrollArea } from "../ScrollArea";

interface TocProps {
  toc: Array<{}>;
}

const listDepth: { [key: number]: string } = {
  1: "pl-3",
  2: "pl-5",
  3: "pl-6",
  4: "pl-7",
  5: "pl-8",
};

const Toc = ({ toc }: TocProps) => {
  const [activeAnchor, setActiveAnchor] = useState("");
  const router = useRouter();

  useEffect(() => {
    const initialAnchor = window.location.hash.substring(1);
    setActiveAnchor(initialAnchor);

    const handleHashChange = (url: string) => {
      const anchor = url.split("#")[1];
      setActiveAnchor(anchor);
    };

    router.events.on("hashChangeStart", handleHashChange);

    return () => {
      router.events.off("hashChangeStart", handleHashChange);
    };
  }, [router.events]);

  const renderToc = (items: any, depth: number, isRoot?: boolean) => {
    const d = depth + 1;
    return (
      items.length > 0 && (
        <ul
          className={cx({
            "border-l border-gray-30": isRoot,
          })}
        >
          {items.map((i: any) => (
            <li key={i.id}>
              <Link
                href={`#${i.id}`}
                className={cx("flex relative text-label-1 p-3", listDepth[d], {
                  "text-gray-60 hover:text-gray-90": activeAnchor !== i.id,
                  "text-black bg-blue-20 before:content-[''] before:w-[1px] before:h-full before:absolute before:-left-[1px] before:bg-black before:top-0":
                    activeAnchor === i.id,
                })}
              >
                {i.title}
              </Link>
              {renderToc(i.children, depth++)}
            </li>
          ))}
        </ul>
      )
    );
  };

  return (
    <div className="w-[16.5rem]">
      <ScrollArea>
        <div className="px-6 py-9">
          <h5 className="text-heading-1 text-gray-90 mb-4">On this page</h5>
          {renderToc(toc, 1, true)}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Toc;
