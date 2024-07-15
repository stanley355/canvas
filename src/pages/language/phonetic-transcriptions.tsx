import { GetStaticProps } from "next"
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getPhoneticTranscriptionsStaticProps } from "@/modules/phonetic-transcriptions/lib/getPhoneticTranscriptionsStaticProps"

export const getStaticProps: GetStaticProps = getPhoneticTranscriptionsStaticProps;

interface PhoneticTranscriptionsProps {
  datoCmsData: NextHeadProps;
}

const PhoneticTranscriptions = ({ datoCmsData }: PhoneticTranscriptionsProps) => {
  return (
    <div className="container mx-auto mt-16 lg:mt-0 text-sm pb-8 min-h-screen">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
    </div>
  )
}

export default PhoneticTranscriptions
