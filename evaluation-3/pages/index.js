import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Intro from "../components/intro";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="white">
          <Intro data={data} />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </>
  );
}

export async function getServerSideProps() {
  let response = await axios.get("https://api.github.com/users/puja2795");
  let data = response.data;

  return {
    props: {
      data: data,
    },
  };
}
