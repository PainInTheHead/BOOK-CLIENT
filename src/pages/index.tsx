import Head from "next/head";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "./../components/layout/Layout";

import HomePage from "@/components/Home/HomePage";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>BOOK ROOM</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
