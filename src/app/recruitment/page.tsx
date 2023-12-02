"use client";

import Lottie from "lottie-react";
import MountainAnimation from "../../../public/animation/mountain-lottie.json";
import { useState } from "react";
import Image from "next/image";

const LIST = [
    {
        id: 0,
        lable: "Nama Lengkap",
        type: "text",
        placeholder: "Masukan Nama Anda!",
    },
    {
        id: 1,
        lable: "Alamat Email ",
        type: "text",
        placeholder: "Masukan Email Anda!",
    },
    {
        id: 2,
        lable: "Nomor Telepon",
        type: "number",
        placeholder: "Masukan Nomor Telepon Anda!",
    },
    {
        id: 3,
        lable: "Tempat, Tanggal Lahir",
        type: "text",
        placeholder: "Masukan Tempat Tanggal Lahir Anda!",
    },
    {
        id: 4,
        lable: "Alamat",
        type: "text",
        placeholder: "Masukan Alamat Anda!",
    },
    {
        id: 5,
        lable: "Program Studi",
        type: "text",
        placeholder: "Masukan Prodi Anda!",
    },
    {
        id: 6,
        lable: "Tahun Angkatan",
        type: "number",
        placeholder: "Masukan Tahun Angkatan Anda!",
    },
];

const Recruitment = () => {
    return (
        <main className=" w-screen min-h-screen h-auto overflow-hidden">
            <div
                style={{
                    backgroundImage: `url('/images/header-bg.svg')`,
                    objectFit: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }}
                className="w-full h-80 z-0 fixed flex justify-center items-center overflow-hidden "
            >
                <Lottie
                    animationData={MountainAnimation}
                    className="md:mb-32"
                    loop={true}
                />
            </div>
            <div className="bg-white w-full absolute top-1/3  md:top-2/4 min-h-screen z-10 p-5 md:p-40 md:py-10 overflow-hidden space-y-3">
                <h2 className="font-semibold text-2xl">Recruitment Form</h2>

                {/* media screen for LG - XL */}

                <div className="hidden lg:flex flex-col space-y-5">
                    {/* TALENT INFORMATION */}
                    <form
                        action=""
                        className=" border-solid border-[4px] border-[#E2E8F0] rounded p-5 space-y-7"
                    >
                        <h1 className="text-xl font-medium">
                            Talent Information
                            <hr />
                        </h1>
                        {LIST.map((input, index) => (
                            <div
                                key={index}
                                className="flex justify-between space-x-5 "
                            >
                                <label
                                    htmlFor="name"
                                    className="text-lg w-32 flex flex-col justify-center "
                                >
                                    {input.lable}
                                </label>
                                <input
                                    id="name"
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className="border-solid border-[1px] rounded p-3 border-slate-500 w-10/12"
                                />
                            </div>
                        ))}
                    </form>

                    {/* OTHER INFORMATION */}
                    <form
                        action=""
                        className=" border-solid border-[4px] border-[#E2E8F0] rounded p-5 space-y-7"
                    >
                        <h1 className="text-xl font-medium">
                            Other Information
                        </h1>
                        <div className="flex justify-between space-x-5">
                            <label className="text-lg w-32 flex flex-col justify-center">
                                Alasan Masuk Tricora
                            </label>
                            <textarea
                                placeholder="Masukan Alasan Anda!"
                                name="postContent"
                                rows={5}
                                cols={50}
                                className="border-solid border-[1px] rounded p-3 h-30 border-slate-500 w-10/12"
                            />
                        </div>
                        <div className="flex justify-between space-x-5">
                            <label className="text-lg w-32 flex flex-col justify-center">
                                Pengalaman Kegiatan Outdoor
                            </label>
                            <textarea
                                placeholder="Ceritakan Pengalaman Anda!"
                                name="postContent"
                                rows={5}
                                cols={50}
                                className="border-solid border-[1px] rounded p-3 h-30 border-slate-500 w-10/12"
                            />
                        </div>
                        <div className="flex justify-between space-x-2">
                            <label className="text-lg w-32 flex flex-col justify-center">
                                Riwayat Penyakit
                            </label>
                            <div className="flex flex-col pl-3 h-30 w-10/12 space-y-5">
                                <div className="space-x-6">
                                    <input type="checkbox" className="pt-2" />
                                    Penyakit jantung
                                    <input type="checkbox" className="pt-2" />
                                    Alergi
                                    <input type="checkbox" className="pt-2" />
                                    Asma
                                    <input type="checkbox" className="pt-2" />
                                    Riwayat patah tulang
                                </div>
                                <textarea
                                    placeholder="Atau Penyakit Yang Lainnya!"
                                    name="postContent"
                                    rows={5}
                                    cols={50}
                                    className="border-solid border-[1px] rounded p-3 h-30 border-slate-500 w-10/12"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between space-x-2 ">
                            <label className="text-lg w-32 flex flex-col justify-center ">
                                Upload Pass Photo
                            </label>
                            <div className=" p-3 h-30 border-slate-500 w-5/6 h-44 ">
                                <section className="w-96 h-full border-dashed border-2 border-slate-500 flex flex-col justify-center items-center  rounded-md">
                                    <Image
                                        src={"/images/file.png"}
                                        alt="file-photo"
                                        width={100}
                                        height={20}
                                        className=" h-24"
                                    />
                                    <input
                                        type="file"
                                        className="text-sm cursor-pointer object-cover"
                                    />
                                </section>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-end space-x-5">
                        <button className="bg-white hover:bg-gray-300 text-[#64748B] border-solid border-[1px] border-black rounded h-10 w-24">
                            Discard
                        </button>
                        <button className="bg-[#1E68D7] text-white rounded h-10 w-24 hover:bg-blue-900">
                            Update
                        </button>
                    </div>
                </div>

                {/* media screen for XS - MD */}
                <div className="lg:hidden space-y-5">
                    {/* TALENT INFORMATION*/}
                    <form
                        action=""
                        className=" border-solid border-[1px] border-[#E2E8F0] rounded p-2 space-y-5"
                    >
                        <h1 className="text-xl font-medium">
                            Talent Information
                        </h1>
                        {LIST.map((input, index) => (
                            <div
                                key={index}
                                className="flex justify-between p-2 py-3 space-x-5 "
                            >
                                <label
                                    htmlFor="name"
                                    className="text-base w-32 flex flex-col justify-center"
                                >
                                    {input.lable}
                                </label>
                                <input
                                    id="name"
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className="border-solid border-[1px] rounded p-3 border-slate-500 w-8/12"
                                />
                            </div>
                        ))}
                    </form>

                    {/* OTHER INFORMATION */}
                    <form
                        action=""
                        className=" border-solid border-[1px] border-[#E2E8F0] rounded p-2 space-y-3"
                    >
                        <h1 className="text-xl font-medium">
                            Other Information
                        </h1>
                        <div className="flex justify-between p-2 space-x-5">
                            <label className="text-base flex items-center w-32">
                                Alasan Masuk Tricora
                            </label>
                            <textarea
                                placeholder="Masukan Alasan Anda!"
                                name="postContent"
                                rows={5}
                                cols={50}
                                className="border-solid border-[1px] rounded p-3 h-30 border-slate-500 w-8/12"
                            />
                        </div>
                        <div className="flex justify-between p-2 space-x-5">
                            <label className="text-base flex items-center w-32">
                                Pengalaman Berkegiatan Outdoor
                            </label>
                            <textarea
                                placeholder="Masukan Alasan Anda!"
                                name="postContent"
                                rows={5}
                                cols={50}
                                className="border-solid border-[1px] rounded p-3 h-30 border-slate-500 w-8/12"
                            />
                        </div>

                        <div className=" flex justify-between space-x-5">
                            <label className="text-base flex items-center p-2 w-32">
                                Riwayat Penyakit
                            </label>
                            <div className="flex flex-col p-3 h-30 w-8/12 space-y-3 ">
                                <div className="space-x-3 text-sm  w-50">
                                    <input type="checkbox" className="pt-2" />
                                    Penyakit jantung
                                    <input type="checkbox" className="pt-2" />
                                    Alergi
                                    <input type="checkbox" className="pt-2" />
                                    Asma
                                    <input type="checkbox" className="pt-2" />
                                    Riwayat patah tulang
                                </div>
                                <textarea
                                    placeholder="Atau Penyakit Yang Lainnya!"
                                    name="postContent"
                                    rows={5}
                                    cols={50}
                                    className="border-solid border-[1px] rounded p-3 h-30 flex justify-end border-slate-500 "
                                />
                            </div>
                        </div>

                        <div className="flex justify-between p-2 space-x-5 ">
                            <label className="text-base flex items-center w-32">
                                Upload Pass Photo
                            </label>
                            <div className="flex justify-start w-8/12 p-2 h-40">
                                <section className="border-slate-500 w-64 p-2 flex flex-col justify-end h-full border-dashed border-2  rounded-md">
                                    <input
                                        type="file"
                                        className="text-sm cursor-pointer object-cover"
                                    />
                                </section>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-end space-x-4">
                        <button className="bg-white hover:bg-gray-300 text-[#64748B] border-solid border-[1px] border-black rounded h-10 w-24">
                            Discard
                        </button>
                        <button className="bg-[#1E68D7] text-white rounded h-10 w-24 hover:bg-blue-900">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recruitment;
