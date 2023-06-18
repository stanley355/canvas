import React from "react";
import Image from "next/image";

const HomeStatistic = () => {
  return (
    <div className="bg-white">
      <div className="text-black p-4 font-semibold text-2xl text-center">
        The Widely Used Language App since Release
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <Image
          src="/images/user_activity.png"
          alt="Language AI"
          width={400}
          height={400}
          className="w-full lg:h-full"
        />
        <Image
          src="/images/user_behaviour.png"
          alt="Language AI"
          width={400}
          height={400}
          className="w-full lg:h-full lg:border-y lg:border-grey-100 lg:rounded"
        />
      </div>
    </div>
  );
};

export default HomeStatistic;
