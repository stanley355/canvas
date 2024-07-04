import { GetStaticProps } from "next";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getCheckbotPageStaticProps } from "@/modules/checkbot/lib/getCheckbotPageStaticProps";

interface CheckbotProps {
  datoCmsData: NextHeadProps;
}
export const getStaticProps: GetStaticProps = getCheckbotPageStaticProps;

const Checkbot = (props: CheckbotProps) => {
  const { datoCmsData } = props;
  return (
    <>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
    </>
  );
};

export default Checkbot;
