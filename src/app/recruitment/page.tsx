"use client";

import Lottie from "lottie-react";
import MountainAnimation from "../../../public/animation/mountain-lottie.json";

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
                <div className="border-solid border-[1px] border-gray p-5 rounded">
                    <h1 className="text-xl">Talent Information</h1>
                    <div className="flex flex-row p-10 space-x-5">
                        <div className="bg-red-300 basis-96 space-y-7">
                            <h1 className="text-lg font-medium">
                                Name
                                <span className="bg-[#E2E8F0] text-[#94A3B8] rounded text-sm ml-3">
                                    Required
                                </span>
                            </h1>
                            <h1 className="text-lg font-medium">Email</h1>
                            <h1 className="text-lg font-medium">
                                Phone Number
                            </h1>
                            <h1 className="text-lg font-medium">
                                Place & Date of Birth
                            </h1>
                            <h1 className="text-lg font-medium">
                                Study Program
                            </h1>
                            <h1 className="text-lg font-medium">
                                Home Address
                            </h1>
                            <div>
                                <h1 className="text-lg font-medium">
                                    Reason for Joining Tricora
                                </h1>
                                <h1 className="text-lg font-medium">
                                    History of Disease
                                </h1>
                                <h1 className="text-lg font-medium">
                                    Outdoor Experience
                                </h1>
                                <h1 className="text-lg font-medium">
                                    Passport Photo
                                </h1>
                            </div>
                        </div>

                        <div className="bg-blue-300 basis-5/6">
                            <form action="">
                                <input type="name" className="border-solid border-[1px] border-slate rounded w-full" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recruitment;
