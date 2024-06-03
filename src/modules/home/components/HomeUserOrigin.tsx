import Image from "next/image";
import React from "react";

const HomeUserOrigin = () => {
  return (
    <div className="p-4 mx-auto lg:container">
      <div className="mb-4 text-2xl font-semibold text-center lg:mb-8">
        with users coming from:
      </div>

      <div className="lg:grid lg:grid-cols-[40%_20%_40%] lg:place-items-center">
        <div className="grid grid-cols-2 gap-4 mb-8 place-items-center">
          <Image
            src="/images/schools/budi_mulia.png"
            alt="Budi Mulia Lourdes"
            width={200}
            height={200}
          />
          <Image
            src="/images/schools/atma_jaya.png"
            alt="Unika Atma Jaya"
            width={200}
            height={200}
            className="w-2/3"
          />
        </div>
        <Image
          src="/images/schools/UGM.png"
          alt="UGM"
          width={200}
          height={200}
          className="mx-auto my-8 lg:my-0"
        />
        <div className="grid grid-cols-2 gap-4 mb-8 place-items-center">
          <Image
            src="/images/schools/karunia.webp"
            alt="Sekolah Kristen Karunia"
            width={200}
            height={200}
          />
          <Image
            src="/images/schools/anugerah.webp"
            alt="Sekolah Kristen Anugerah"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeUserOrigin;
