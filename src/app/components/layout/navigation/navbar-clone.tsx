"use client";
import React, { useEffect, useState } from "react";
import DrawerComponent from "./Drawer";
import useModalDisclosure from "../../helpers/hooks/useModalDisclosure";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    // 1. ini namanya custom hooks nge
    // cara pakenya
    // variable isOpen =  flaging (boolean) untuk buka tutup drawer
    // func open  =  buka drawer ex: open()
    // func close =  tutup drawer ex: close()
    const { isOpen, open, close } = useModalDisclosure();

    const [currentSection, setCurrentSection] = useState<string>("/");
    console.log(currentSection, isOpen);

    // #ini untuk handle click outside (diluar wrapper drawer) biar ke close nge
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest("#drawer-navigation")) {
            close();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full h-14 z-[100]">
            {/* 2.a (pemanggilan di child component). variable dan function custom hooks diprops kesini component drawer */}
            {/* CODE : 1.1 Pemanggilan navbar */}
            <DrawerComponent
                isOpen={isOpen}
                close={close}
                active={""}
                setCurrentSection={setCurrentSection}
            />
            {/* 2.b (pemanggilan langsung). disini langsung dipanggil open() */}
            {/* <button onClick={() => open()} className="md:hidden">
                OPEN DRAWER
            </button> */}
            <div className=" h-full flex items-center p-10 bg-gradient-to-b from-gray-900 ">
                {" "}
                <div className="w-72">
                    <Link href={'/'}>
                    
                    <Image
                        src={"/images/navbar-logo.png"}
                        alt="navbar-logo"
                        width={130}
                        height={100}
                        className="cursor-pointer"
                    />
                    </Link>
                </div>
                <div className=" text-white  font-semibold text-2xl w-11/12 flex justify-end items-center">
                    <div className="flex space-x-10 mx-10 ">
                        <Link href={"/merch"}>
                            <h1 className="cursor-pointer hover:text-gray-300">
                                Merch
                            </h1>
                        </Link>
                        <Link href={"/about"}>
                            <h1 className="cursor-pointer hover:text-gray-300">
                                Journal
                            </h1>
                        </Link>

                        <Link href={"/recruitment"}>
                            <h1 className="cursor-pointer hover:text-gray-300">
                                How To Join
                            </h1>
                        </Link>
                    </div>
                    <div className="flex space-x-10 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer hover:text-gray-300"
                            onClick={() => open()}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer hover:text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar;
