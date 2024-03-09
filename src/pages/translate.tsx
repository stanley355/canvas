import { GetStaticProps } from "next";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import { getTranslatePageStaticProps } from "@/modules/translateV2/lib/getTranslatePageStaticProps";
import TranslateProviderV2 from "@/modules/translateV2/components/TranslateProviderV2";
import TranslateContainerV2 from "@/modules/translateV2/components/TranslateContainerV2";

interface ITranslateProps {
  datoCmsData: IMetaHead;
}

const Translate = (props: ITranslateProps) => {
  const { datoCmsData } = props;

  return (
    <TranslateProviderV2>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <TranslateContainerV2 />
    </TranslateProviderV2>
  );
};

export default Translate;
export const getStaticProps: GetStaticProps = getTranslatePageStaticProps;
