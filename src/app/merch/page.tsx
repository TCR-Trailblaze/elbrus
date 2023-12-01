import React from "react";
import Image from "next/image";
import Link from "next/link";

const MerchDetailPage = () => {

    const checkoutTextGenerator = React.useMemo(() => {
        let itemText = ''
        const image = 'https://i.ibb.co/dG2HSt5/merch.png'
        const textString = `Halo admin Magin, saya baru saja melakukan checkout melalui website, berikut keranjang saya,`
        const textResult = `%0ADengan total sebesar 10000`
        const reciverText = `Berikut alamat saya, Albar, Jlan h mando, Jakarta - Cilandak`

        return (
            textString.replace(' ', '%20') +
            '%0A' +
            textResult.replace(' ', '%20') +
            '%0A' +
            reciverText.replace(' ', '%20') + '%0A' +
            image + "%20"
        )
    }, [])

    return (
        <div className="p-10">
            {/* media screen for LG - XL */}
            <div className="hidden lg:flex flex-row">
                <div className=" basis-1/2 space-y-5">
                    <div className="flex justify-center">
                        <Image
                            src={"/images/merch.png"}
                            alt="merch-photo"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="flex flex-row justify-center space-x-14">
                        <section className="bg-yellow-300 basis-40 h-52 flex justify-center">
                            <Image
                                src={"/images/merch2.png"}
                                alt="merch-photo"
                                width={300}
                                height={100}
                                className="object-cover"
                            />
                        </section>
                        <section className="bg-yellow-300 basis-40 h-52 flex justify-center">
                            <Image
                                src={"/images/merch3.png"}
                                alt="merch-photo"
                                width={300}
                                height={100}
                                className="object-cover"
                            />
                        </section>
                        <section className="bg-yellow-300 basis-40 h-52 flex justify-center">
                            <Image
                                src={"/images/merch4.png"}
                                alt="merch-photo"
                                width={300}
                                height={100}
                                className="object-cover"
                            />
                        </section>
                    </div>
                </div>
                <div className="basis-1/2 flex flex-col justify-center justify-items-center space-y-7 pl-32 ">
                    <div>
                        <h1 className="text-2xl font-semibold">
                            PLGMS TS - CAST AS A CAT
                        </h1>
                        <h1 className="text-[#736C6C] text-xl font-medium">
                            IDR 135.000
                        </h1>
                    </div>
                    <div className="flex space-x-3">
                        <Image
                            src={"/images/merch.png"}
                            alt="merch-photo"
                            width={70}
                            height={50}
                        />
                        <Image
                            src={"/images/merch.png"}
                            alt="merch-photo"
                            width={70}
                            height={100}
                        />
                    </div>
                    <div className="space-x-5 font-semibold">
                        <button className="bg-white w-7 border-solid border-[1px] border-black">
                            S
                        </button>
                        <button className="bg-white w-7 border-solid border-[1px] border-black">
                            M
                        </button>
                        <button className="bg-white w-7 border-solid border-[1px] border-black">
                            L
                        </button>
                        <button className="bg-white w-7 border-solid border-[1px] border-black">
                            XL
                        </button>
                        <button className="bg-white w-9 border-solid border-[1px] border-black">
                            XXL
                        </button>
                    </div>
                    <div className="space-y-5 ">
                        <p className="w-2/3 text-[#827474] ">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable.
                        </p>
                        <Link
                            className="bg-gray-100 hover:bg-blue-400 hover:text-white"
                            rel="nofollow"
                            href={`https://api.whatsapp.com/send?phone=6287788996343&text=${checkoutTextGenerator}`}
                            data-action="share/whatsapp/share"
                            title="WhatsApp"
                            target='_blank'
                        >

                            <button className="bg-[#292929] h-10 w-2/3 text-center text-lg text-white font-semibold hover:bg-red-600">
                                BUY
                            </button>
                        </Link>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-lg font-semibold">Product Tags</h1>
                        <hr />
                        <section className="space-x-4 lg:flex flex-col lg:space-y-3 lg:space-x-0 ">
                            <button className="border-solid border-[1px] border-black w-28">
                                Ice Adventure
                            </button>
                            <button className="border-solid border-[1px] border-black w-36">
                                Tropical Adventure
                            </button>
                            <button className="border-solid border-[1px] border-black w-32">
                                Water Adventure
                            </button>
                        </section>
                    </div>
                </div>
            </div>

            {/* media screen for XS - MD */}
            <div className="lg:hidden space-y-14">
                <div className="flex flex-col">
                    <div className=" basis-1/2 space-y-5">
                        <div className="flex justify-center">
                            <Image
                                src={"/images/merch.png"}
                                alt="merch-photo"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className="flex flex-row justify-center space-x-10">
                            <section className="basis-60 h-36 flex justify-center">
                                <Image
                                    src={"/images/merch2.png"}
                                    alt="merch-photo"
                                    width={300}
                                    height={100}
                                    className="object-cover"
                                />
                            </section>
                            <section className="basis-60 h-36 flex justify-center">
                                <Image
                                    src={"/images/merch3.png"}
                                    alt="merch-photo"
                                    width={300}
                                    height={100}
                                    className="object-cover"
                                />
                            </section>
                            <section className="basis-60 h-36 flex justify-center">
                                <Image
                                    src={"/images/merch4.png"}
                                    alt="merch-photo"
                                    width={300}
                                    height={100}
                                    className="object-cover"
                                />
                            </section>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="basis-1/2 flex flex-col items-center space-y-10">
                        <div>
                            <h1 className="text-2xl sm:text-3xl text-center font-semibold">
                                PLGMS TS - CAST AS A CAT
                            </h1>
                            <h1 className="text-[#736C6C] text-center text-xl sm:text-2xl font-medium">
                                IDR 135.000
                            </h1>
                        </div>
                        <div className="flex space-x-3">
                            <Image
                                src={"/images/merch.png"}
                                alt="merch-photo"
                                width={70}
                                height={50}
                            />
                            <Image
                                src={"/images/merch.png"}
                                alt="merch-photo"
                                width={70}
                                height={100}
                            />
                        </div>
                        <div className="space-x-5 font-semibold">
                            <button className="bg-white w-7 border-solid border-[1px] border-black hover:bg-red-400">
                                S
                            </button>
                            <button className="bg-white w-7 border-solid border-[1px] border-black hover:bg-red-400">
                                M
                            </button>
                            <button className="bg-white w-7 border-solid border-[1px] border-black hover:bg-red-400">
                                L
                            </button>
                            <button className="bg-white w-7 border-solid border-[1px] border-black hover:bg-red-400">
                                XL
                            </button>
                            <button className="bg-white w-9 border-solid border-[1px] border-black hover:bg-red-400">
                                XXL
                            </button>
                        </div>
                        <div className="space-y-5 flex flex-col items-center ">
                            <p className=" text-[#827474] text-center sm:text-lg">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words whic
                            </p>
                            <Link
                                className="bg-gray-100 hover:bg-blue-400 hover:text-white"
                                rel="nofollow"
                                href={`https://api.whatsapp.com/send?phone=6285718484065&text=${checkoutTextGenerator}`}
                                data-action="share/whatsapp/share"
                                title="WhatsApp"
                                target='_blank'
                            >

                                <button className="bg-[#292929] h-10 w-full text-center text-lg text-white font-semibold hover:bg-red-500">
                                    BUY
                                </button>
                            </Link>
                            <div className="space-y-2 w-full">
                                <h1 className="text-lg sm:text-xl font-semibold">
                                    Product Tags
                                </h1>
                                <hr />
                                <section className=" flex flex-col items-start space-y-3 ">
                                    <button className="border-solid border-[1px] border-black w-28 hover:bg-red-400">
                                        Ice Adventure
                                    </button>
                                    <button className="border-solid border-[1px] border-black w-36 hover:bg-red-400">
                                        Tropical Adventure
                                    </button>
                                    <button className="border-solid border-[1px] border-black w-32 hover:bg-red-400">
                                        Water Adventure
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchDetailPage;

