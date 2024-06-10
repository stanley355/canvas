import Link from "next/link";
import Image from "next/image";

const HomeStatistic = () => {
  return (
    <div className="p-4 py-8 lg:container">
      <Link href="/">
        <Image
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={200}
          height={130}
          className="mx-auto mb-4"
        />
      </Link>

      <div className="mb-8 text-2xl font-semibold text-center">
        By the time you are reading this, we served more than:
      </div>

      <div className="lg:grid lg:grid-cols-3">
        <div className="flex justify-between gap-4 mb-8 text-xl">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold">819</div>
            <div>Translation</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold">629</div>
            <div>Grammar Check</div>
          </div>
        </div>
        <div className="mb-8 text-xl text-center">
          <div className="text-3xl font-semibold">28,291</div>
          <div>Language Check</div>
        </div>

        <div className="flex justify-between gap-4 text-xl">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold">1,813</div>
            <div>Users</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-semibold">10,300</div>
            <div>Visitors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStatistic;
