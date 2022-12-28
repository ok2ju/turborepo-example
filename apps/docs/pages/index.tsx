import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/overview/introduction");
  }, [router]);

  return <></>;
}
