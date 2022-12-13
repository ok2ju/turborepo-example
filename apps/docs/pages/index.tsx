import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, BUTTON_SIZE, BUTTON_TYPE } from "@te/core";

export default function Docs() {
  const router = useRouter();

  const redirectToDocs = () => {
    router.push("/overview/introduction");
  };

  return (
    <Fragment>
      <Head>
        <title>IDS</title>
        <meta name="description" content="IDS main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-20">
        <div className="flex flex-col items-center max-w-5xl">
          <h1 className="text-8xl font-medium mb-3">IDS</h1>
          <p className="text-base text-center text-gray-60 mb-5">
            IDS is X open source design system for products and digital
            experiences. With the X Design Language as its foundation, the
            system consists of ready-to-use react ui components library, design
            tools and resources and human interface guidelines.
          </p>
          <Button
            title="Get started"
            size={BUTTON_SIZE.default}
            type={BUTTON_TYPE.primary}
            onClick={redirectToDocs}
          />
        </div>
      </div>
    </Fragment>
  );
}
