import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface TocProps {
  toc: Array<{}>;
}

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

  const renderToc = (items: any, isRoot?: boolean) => {
    return (
      items.length > 0 && (
        <ul className={!isRoot ? "pl-5" : undefined}>
          {items.map((i: any) => (
            <li key={i.id}>
              <Link
                href={`#${i.id}`}
                className={`flex text-sm font-normal py-2 text-gray-60 hover:text-gray-90 ${
                  activeAnchor === i.id ? "text-blue-50" : "text-gray-60"
                }`}
              >
                {i.title}
              </Link>
              {renderToc(i.children)}
            </li>
          ))}
        </ul>
      )
    );
  };

  return (
    <div className="w-[19.5rem] overflow-y-auto p-8">
      <h5 className="text-gray-90 mb-4">On this page</h5>
      {renderToc(toc, true)}
    </div>
  );
};

export default Toc;
