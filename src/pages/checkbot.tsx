import { GetStaticProps } from "next";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getCheckbotPageStaticProps } from "@/modules/checkbot/lib/getCheckbotPageStaticProps";
import CheckbotProvider from "@/modules/checkbot/components/CheckbotProvider";
import CheckbotHeader from "@/modules/checkbot/components/CheckbotHeader";
import CheckbotBody from "@/modules/checkbot/components/CheckbotBody";
import NextLink from "@/common/components/NextLink";

interface CheckbotProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getCheckbotPageStaticProps;

const Checkbot = (props: CheckbotProps) => {
  const { datoCmsData } = props;
  return (
    <div className="container mx-auto mt-14 lg:mt-0 text-sm pb-8">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <CheckbotProvider>
        <CheckbotHeader />
        <CheckbotBody />
      </CheckbotProvider>
      <div className="flex w-fit items-center gap-1 mx-auto">
        Found an error?{" "}
        <NextLink
          href="/support"
          variant="none"
          className="text-blue-800 underline"
        >
          Report
        </NextLink>{" "}
      </div>
    </div>
  );
};

export default Checkbot;
