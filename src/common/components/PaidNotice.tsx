import React from "react";
import Image from "next/image";
import Button from "./Button";

interface IPaidNotice {
  onClick: () => void;
}

const PaidNotice = (props: IPaidNotice) => {
  const { onClick } = props;
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-80">
        <div className="border border-black bg-white rounded-lg p-4 mt-24 mx-auto lg:w-[500px] text-black h-[600px] overflow-y-scroll">
          <h1 className="flex flex-row items-center justify-center text-2xl font-bold">
            <span>Language</span>
            <Image
              src="/images/languageai.png"
              alt="Language AI"
              width={30}
              height={30}
            />
          </h1>
          <h2 className="text-center text-xl mb-4">Pengumuman Perubahan</h2>

          <div>
            <div className="mb-4">
              Tertanggal <strong> 28 Oktober 2023</strong>, kami dari LanguageAI
              akan membuat <strong> seluruh layanan</strong> kami{" "}
              <strong>berbayar</strong>. Hal ini tentu bukan tanpa sebab atau
              maksud, oleh karena itu kami akan menjabarkan alasannya disini:
            </div>

            <div className="mb-4">
              <div className="font-bold">1. We can't lower our Quality</div>
              <div>
                Penelitian kami akan hasil terjemahan Non Premium vs Premium
                menunjukkan
                <strong>
                  {" "}
                  Premium menghasilkan kualitas terjemahan lebih tinggi
                </strong>{" "}
                namun terdapat kesenjangan yaitu{" "}
                <strong>
                  waktu pemrosesan lebih cepat pada Non Premium
                </strong>{" "}
                dan terdapat beberapa
                <strong>
                  kualitas Checkbot yang mirip antara Non Premium dan Premium
                </strong>
                . Hal tersebut adalah suatu yang kami ingin hindari, sebab
                pengguna seharusnya mendapat
                <strong>kualitas bagus, pelayanan yang cepat,</strong>
                dan semua pengguna seharusnya mendapatkan yang terbaik dari
                layanan kami.
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold">2. Lalu kenapa berbayar?</div>
              <div>
                Layanan ini berasal dari keisengan dan keinginan kami untuk
                melakukan pelayanan masyarakat ({" "}
                <i>something foolish, creative, and generous</i> ). Hal utama
                yang saya dapat dari hal ini adalah kebahagiaan untuk mewujudkan
                visi saya, namun hal tersebut tidaklah datang tanpa biaya (
                <i>Nothing comes with a cost</i> ) . Pengembangan dari layanan
                ini disisihkan dari penghasilan kami, yang mana juga bekerja
                pada institusi lain. Namun, pada saat ini, waktu dan ekonomi
                kami cukup tersita untuk keperluan lain (keluarga, hidup, dst),
                yang mana lebih penting untuk kelanjutan kami mengembangkan
                layanan ini. Oleh sebab itu, dengan berat hati kami mengubah
                layanan kami menjadi layanan berbayar.
              </div>
            </div>

            <div>
              Demikianlah, dari kedua alasan tersebut tertanggal{" "}
              <strong> 28 Oktober 2023</strong>, kami dari LanguageAI akan
              membuat <strong> seluruh layanan</strong> kami{" "}
              <strong>berbayar</strong>. Atas saran dan penggunaan
              keseluruhannya, kami mengucapkan terima kasih.
            </div>
          </div>

          <Button
            onClick={onClick}
            type="button"
            title="Saya Paham"
            wrapperClassName="w-full bg-blue-500 text-white font-bold mt-4 p-2 rounded-md"
            buttonClassName="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PaidNotice;
