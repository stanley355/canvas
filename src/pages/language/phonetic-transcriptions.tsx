import { GetStaticProps } from "next"
import { CgTranscript } from "react-icons/cg";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getPhoneticTranscriptionsStaticProps } from "@/modules/phonetic-transcriptions/lib/getPhoneticTranscriptionsStaticProps"
import PhoneticTranscriptionsProvider from "@/modules/phonetic-transcriptions/components/PhoneticTranscriptionsProvider";
import PhoneticTranscriptionsMain from "@/modules/phonetic-transcriptions/components/PhoneticTranscriptionsMain";

export const getStaticProps: GetStaticProps = getPhoneticTranscriptionsStaticProps;

interface PhoneticTranscriptionsProps {
  datoCmsData: NextHeadProps;
}

const PhoneticTranscriptions = ({ datoCmsData }: PhoneticTranscriptionsProps) => {
  return (
    <div className="container mx-auto mt-16 lg:mt-4 text-sm pb-8 min-h-screen">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 mb-4 mx-auto lg:mx-0 w-fit">
        <CgTranscript />
        Phonetic Transcriptor
      </div>
      <PhoneticTranscriptionsProvider>
        <PhoneticTranscriptionsMain />
      </PhoneticTranscriptionsProvider>
    </div>
  )
}

export default PhoneticTranscriptions
