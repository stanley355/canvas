import Image from "next/image";

const HomeSponsors = () => {
  return (
    <div className="container mx-auto mb-4 lg:mt-16">
      <div className="mb-4 text-lg text-center text-gray-500">
        Trusted by more than 2000 people
      </div>

      <div className="grid grid-cols-2 place-items-center lg:grid-cols-6">
        <Image
          src={"/images/sponsors/align.svg"}
          width={100}
          height={100}
          alt="LanguageAi"
          className="w-full"
        />
        <Image
          src={"/images/sponsors/atlassian.svg"}
          width={100}
          height={100}
          alt="LanguageAi"
          className="w-full"
        />
        <Image
          src={"/images/sponsors/databricks.svg"}
          width={100}
          height={100}
          alt="LanguageAi"
          className="w-full"
        />
        <Image
          src={"/images/sponsors/expedia.svg"}
          width={100}
          height={100}
          alt="LanguageAi"
          className="w-full"
        />
        <Image
          src={"/images/sponsors/wus.svg"}
          width={100}
          height={100}
          alt="LanguageAi"
          className="w-full"
        />
        <Image
          src={"/images/sponsors/zoom.svg"}
          width={100}
          height={100}
          alt="LanguageAi"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HomeSponsors;
