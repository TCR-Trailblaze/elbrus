import React from "react";
import Image from "next/image";
import Link from "next/link";

const JumboArticle = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-softgray flex flex-col-reverse justify-between p-10 px-7 md:flex-col-reverse lg:flex-row md:p-20 lg:space-x-40">
            <div className="basis-1/2 flex flex-col justify-start xs:space-y-5 lg:space-y-5 xl:space-y-8">
                <h1 className="text-xl leading-none sm:text-4xl md:text-2xl w-40 xs:hidden sm:hidden md:hidden lg:block lg:font-bold cursor-pointer">
                    ACTIVITY REPORT <span className="text-red-600">.</span>
                </h1>
                <h2 className="w-full 2xl:w-8/12 cursor-pointer font-semibold text-2xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl leading-none line-clamp-3">
                    EXPEDISI JAVA ANDESIT MARATHON 2023
                </h2>
                <p className="w-full text-md sm:text-lg text-slate-600 2xl:w-full line-clamp-[14]">
                    Setelah menyelesaikan perintisan jalur multi pitch ditebing
                    lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon
                    bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan
                    mobil carteran dari teman Mapala Palmasti banjarnegara
                    (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi.
                    eky dan abi langsung mengurus perizinan dari kantor desa,
                    kepolisian, puskesmas, dan (tni), sedangkan mas hafri stay
                    di kaki tebing untuk menyiapkan camp darat. Pada etape ini
                    Alvin Reggy Pratama(egi) bisa menemani kegiatan pemanjatan
                    karna etape sebelumnya ia tidak bisa menemani karna ada
                    urusan kerja. Setelah menyelesaikan perintisan jalur multi
                    pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java
                    andesit marathon bergeser ke tebing sepikul Jawa Timur.
                    berangkat menggunakan mobil carteran dari teman Mapala
                    Palmasti banjarnegara (Rhino), Sampai ditebing sepikul
                    sekitar pukul 05.00 pagi. eky dan abi langsung mengurus
                    perizinan dari kantor desa, kepolisian, puskesmas, dan
                    (tni), sedangkan mas hafri stay di kaki tebing untuk
                    menyiapkan camp darat. Pada etape ini Alvin Reggy
                    Pratama(egi) bisa menemani kegiatan pemanjatan karna etape
                    sebelumnya ia tidak bisa menemani karna ada urusan kerja.
                    Setelah menyelesaikan perintisan jalur multi pitch ditebing
                    lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon
                    bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan
                    mobil carteran dari teman Mapala Palmasti banjarnegara
                    (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi.
                    eky dan abi langsung mengurus perizinan dari kantor desa,
                    kepolisian, puskesmas, dan (tni), sedangkan mas hafri stay
                    di kaki tebing untuk menyiapkan camp darat. Pada etape ini
                    Alvin Reggy Pratama(egi) bisa menemani kegiatan pemanjatan
                    karna etape sebelumnya ia tidak bisa menemani karna ada
                    urusan kerja. Setelah menyelesaikan perintisan jalur multi
                    pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java
                    andesit marathon bergeser ke tebing sepikul Jawa Timur.
                    berangkat menggunakan mobil carteran dari teman Mapala
                    Palmasti banjarnegara (Rhino), Sampai ditebing sepikul
                    sekitar pukul 05.00 pagi. eky dan abi langsung mengurus
                    perizinan dari kantor desa, kepolisian, puskesmas, dan
                    (tni), sedangkan mas hafri stay di kaki tebing untuk
                    menyiapkan camp darat. Pada etape ini Alvin Reggy
                    Pratama(egi) bisa menemani kegiatan pemanjatan karna etape
                    sebelumnya ia tidak bisa menemani karna ada urusan kerja.
                    Setelah menyelesaikan perintisan jalur multi pitch ditebing
                    lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon
                    bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan
                    mobil carteran dari teman Mapala Palmasti banjarnegara
                    (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi.
                    eky dan abi langsung mengurus perizinan dari kantor desa,
                    kepolisian, puskesmas, dan (tni), sedangkan mas hafri stay
                    di kaki tebing untuk menyiapkan camp darat. Pada etape ini
                    Alvin Reggy Pratama(egi) bisa menemani kegiatan pemanjatan
                    karna etape sebelumnya ia tidak bisa menemani karna ada
                    urusan kerja. Setelah menyelesaikan perintisan jalur multi
                    pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java
                    andesit marathon bergeser ke tebing sepikul Jawa Timur.
                    berangkat menggunakan mobil carteran dari teman Mapala
                    Palmasti banjarnegara (Rhino), Sampai ditebing sepikul
                    sekitar pukul 05.00 pagi. eky dan abi langsung mengurus
                    perizinan dari kantor desa, kepolisian, puskesmas, dan
                    (tni), sedangkan mas hafri stay di kaki tebing untuk
                    menyiapkan camp darat. Pada etape ini Alvin Reggy
                    Pratama(egi) bisa menemani kegiatan pemanjatan karna etape
                    sebelumnya ia tidak bisa menemani karna ada urusan kerja.
                </p>
                <button className="w-44 h-10 bg-[#F92424] text-white font-semibold rounded-md hover:bg-red-800">
                    <Link href={"/article"}>Read More</Link>
                </button>
            </div>
            <div className="">
                <h1 className="text-xl  z-10 font-bold sm:text-2xl md:text-2xl w-40 mb-5 lg:hidden cursor-pointer ">
                    ACTIVITY REPORT <span className="text-red-600">.</span>
                </h1>
                <Image
                    src={"https://i.ibb.co/ch5Wd63/bg-article.jpg"}
                    alt="climbing"
                    width={621}
                    height={621}
                    className="w-full md:min-w-[400px] h-80 md:h-full object-cover cursor-pointer aspect-square"
                />
            </div>
        </div>
    );
};
export default JumboArticle;
