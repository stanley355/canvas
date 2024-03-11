import { GetStaticProps } from "next";

// Permament redirect, GrammarCheck was Checkbot before
const CheckBot = () => {
  return <></>;
};

export default CheckBot;
export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      permanent: true,
      destination: "/grammar-check/",
    },
  };
};
