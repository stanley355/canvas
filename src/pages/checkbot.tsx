import { GetStaticProps } from "next";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getCheckbotPageStaticProps } from "@/modules/checkbot/lib/getCheckbotPageStaticProps";
import CheckbotProvider from "@/modules/checkbot/components/CheckbotProvider";

interface CheckbotProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getCheckbotPageStaticProps;

const Checkbot = (props: CheckbotProps) => {
  const { datoCmsData } = props;
  return (
    <div className="container mx-auto mt-14 border p-4">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <CheckbotProvider>
        woi
      </CheckbotProvider>
    </div>
  );
};

export default Checkbot;
