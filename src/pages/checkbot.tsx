import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import GrammarCheckContainer from "@/modules/grammar-check/components/GrammarCheckContainer";
import GrammarCheckProvider from "@/modules/grammar-check/components/GrammarCheckProvider";
import { getGrammarCheckStaticProps } from "@/modules/grammar-check/lib/getGrammarCheckStaticProps";
import { GetStaticProps } from "next";

interface IGrammarCheckProps {
  datoCmsData: IMetaHead;
}

const Checkbot = (props: IGrammarCheckProps) => {
  const { datoCmsData } = props;
  return (
    <GrammarCheckProvider>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <GrammarCheckContainer />
    </GrammarCheckProvider>
  );
};

export default Checkbot;
export const getStaticProps: GetStaticProps = getGrammarCheckStaticProps;
