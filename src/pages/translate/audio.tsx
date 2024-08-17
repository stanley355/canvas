import { GetStaticProps } from "next";
import Link from "next/link";
import { getTranslateAudioPageStaticProps } from "@/modules/translate-audio/lib/getTranslateAudioStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import TranslateAudioProvider from "@/modules/translate-audio/components/TranslateAudioProvider";
import TranslateAudioForm from "@/modules/translate-audio/components/TranslateAudioForm";
import TranslateAudioResult from "@/modules/translate-audio/components/TranslateAudioResult";

export const getStaticProps: GetStaticProps = getTranslateAudioPageStaticProps;

interface ITranslateAudioProps {
  datoCmsData: NextHeadProps;
}

const TranslateAudio = ({ datoCmsData }: ITranslateAudioProps) => {
  return (
    <TranslateAudioProvider>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="p-2 pb-4 lg:px-0">
        <div className="container mx-auto">
          <h1 className="p-4 font-semibold border rounded-t-md">
            Translate Audio
          </h1>
          <TranslateAudioForm />          
          <TranslateAudioResult />

          <div className="flex items-center gap-1 mx-auto mt-4 w-fit">
            Found an error?
            <Link href="/support" className="underline text-brand-primary">
              Report
            </Link>{" "}
          </div>
        </div>
      </div>
    </TranslateAudioProvider>
  );
};

export default TranslateAudio;
