import { Box } from "@mui/material";
import DownloadUSDZ from "components/DownloadUSDZ";
import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <>
      <Head>
        <title>Download USDZ File</title>
      </Head>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <DownloadUSDZ />
      </Box>
    </>
  );
};

export default Index;
