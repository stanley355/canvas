import HomeFeaturesAccordion from "./HomeFeaturesAccordion";

const HomeFeatures = () => {
  return <section className="h-screen px-4 py-8 lg:px-0 snap-always snap-center bg-slate-100">
    <div className="container">
      <h3 className="mb-4 text-lg font-semibold lg:text-2xl">Explore what you can do with our AI</h3>
      <div className="divide-y divide-black border-y border-y-black">
        <HomeFeaturesAccordion />
        <HomeFeaturesAccordion />
        <HomeFeaturesAccordion />
      </div>
    </div>
  </section>;
};

export default HomeFeatures;
