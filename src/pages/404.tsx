import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import { Button } from "@/common/components/ui/button";
import { fetchDatoCms } from "@/common/lib/api/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";

interface INotFoundProps {
  datoCmsData: IMetaHead;
}

const NotFound = (props: INotFoundProps) => {
  const { datoCmsData } = props;
  const router = useRouter();

  return (
    <div className="container flex flex-col items-center min-h-screen mx-auto my-16">
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <Image
        src={"/images/404.webp"}
        alt="LanguageAi"
        width={75}
        height={100}
        className="w-full h-auto lg:w-1/6"
      />

      <Button onClick={() => router.back()}>Go Back</Button>
    </div>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "not-found",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
