import { GetStaticProps } from 'next';
import { getTranslateAudioPageStaticProps } from '@/modules/translate-audio/lib/getTranslateAudioStaticProps';
import NextHead, { NextHeadProps } from '@/common/components/NextHead';

export const getStaticProps: GetStaticProps = getTranslateAudioPageStaticProps;

interface ITranslateAudioProps {
  datoCmsData: NextHeadProps;
}

const TranslateAudio = ({ datoCmsData }: ITranslateAudioProps) => {

  return (
    <div>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
    </div>
  )
}

export default TranslateAudio; 