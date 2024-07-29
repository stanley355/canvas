import { GetStaticProps } from 'next';
import { getTranslateAudioPageStaticProps } from '@/modules/translate-audio/lib/getTranslateAudioStaticProps';
import NextHead, { NextHeadProps } from '@/common/components/NextHead';
import TranslateAudioHeader from '@/modules/translate-audio/components/TranslateAudioHeader';

export const getStaticProps: GetStaticProps = getTranslateAudioPageStaticProps;

interface ITranslateAudioProps {
  datoCmsData: NextHeadProps;
}

const TranslateAudio = ({ datoCmsData }: ITranslateAudioProps) => {

  return (
    <div className="mt-16 container lg:mx-auto lg:mt-0 lg:text-sm pb-4">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
    <TranslateAudioHeader />
    </div>
  )
}

export default TranslateAudio; 