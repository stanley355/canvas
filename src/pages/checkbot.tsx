import { GetServerSideProps } from "next";

// Permament redirect, GrammarCheck was Checkbot before
const CheckBot = () => {
  return <></>;
};

export default CheckBot;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: "/grammar-check/",
    },
  };
};
