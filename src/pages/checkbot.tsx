import { GetStaticProps } from "next";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getCheckbotPageStaticProps } from "@/modules/checkbot/lib/getCheckbotPageStaticProps";
import CheckbotProvider from "@/modules/checkbot/components/CheckbotProvider";
import CheckbotHeader from "@/modules/checkbot/components/CheckbotHeader";
import CheckbotBody from "@/modules/checkbot/components/CheckbotBody";

interface CheckbotProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getCheckbotPageStaticProps;

const Checkbot = (props: CheckbotProps) => {
  const { datoCmsData } = props;
  return (
    <div className="container mx-auto mt-14 lg:mt-0">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <CheckbotProvider>
        <CheckbotHeader />
        <CheckbotBody />
      </CheckbotProvider>
    </div>
  );
};

export default Checkbot;
