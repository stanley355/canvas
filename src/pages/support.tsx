import Image from "next/image";
import { GetStaticProps } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";

interface ITTSProps {
  datoCmsData: IMetaHead;
}

const Support = (props: ITTSProps) => {
  const { datoCmsData } = props;

  const link =
    "mailto:winatastanley355@gmail.com?subject=I%20found%20a%20bug%20on%20LanguageAi";
  return (
    <div className="container h-screen px-4 mt-16 lg:mt-8">
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="text-3xl font-bold lg:text-4xl">Support</div>
      <div className="mt-16 ">
        <div className="mb-16">
          <div className="mb-4 text-3xl text-center lg:text-left">
            Found an Issue ???
          </div>
          <div className="text-center lg:text-left">
            Email me at{" "}
            <a className="text-blue-500 border-b border-b-blue-500" href={link}>
              winatastanley355@gmail.com
            </a>{" "}
          </div>
        </div>
        <Image
          src={"/images/support_hero.jpg"}
          alt="LanguageAi"
          width={300}
          height={300}
          className="mx-auto lg:mx-0 "
        />
      </div>
    </div>
  );
};

export default Support;
export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "support",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
