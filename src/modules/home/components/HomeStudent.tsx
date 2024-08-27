import Image from "next/image";

const HomeStudent = () => {
  return (
    <section className="h-screen px-4 py-8 mx-auto lg:px-0 bg-[url('/images/home/student_bg.jpg')] bg-cover bg-opacity-80 text-white bg-bottom bg-fixed">
      <div className="container">
        <h3 className="mb-4 text-3xl font-semibold text-center">
          One AI for Students
        </h3>
        <h4 className="mb-4 text-center">
          Languageai is trusted as a partner for students' assignments
        </h4>
        <Image
          src="/images/home/univ.png"
          alt="Languageai for Student"
          className="w-full h-auto lg:hidden"
          width={400}
          height={800}
        />
        <Image
          src="/images/home/univ_desktop.png"
          alt="Languageai for Student"
          className="hidden w-full h-auto mx-auto lg:block"
          width={800}
          height={400}
        />
      </div>
    </section>
  );
};

export default HomeStudent;
