import { GetStaticProps } from 'next';
import { getTranslateAudioPageStaticProps } from '@/modules/translate-audio/lib/getTranslateAudioStaticProps';
import NextHead, { NextHeadProps } from '@/common/components/NextHead';
import TranslateAudioHeader from '@/modules/translate-audio/components/TranslateAudioHeader';
import TranslateAudioProvider from '@/modules/translate-audio/components/TranslateAudioProvider';

export const getStaticProps: GetStaticProps = getTranslateAudioPageStaticProps;

interface ITranslateAudioProps {
  datoCmsData: NextHeadProps;
}

const TranslateAudio = ({ datoCmsData }: ITranslateAudioProps) => {

  return (
    <div className="mt-16 container lg:mx-auto lg:mt-0 lg:text-sm pb-4">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <TranslateAudioProvider>
        <TranslateAudioHeader />
      </TranslateAudioProvider>
    </div>
  )
}

export default TranslateAudio; 