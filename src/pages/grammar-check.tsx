import { GetServerSideProps } from "next";

const GrammarCheck = () => {
  return <></>;
};

export default GrammarCheck;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: "/grammar-check/",
    },
  };
};
