"use client";
import React, { useEffect, useState } from "react";
import DrawerComponent from "./Drawer";
import useModalDisclosure from "../../helpers/hooks/useModalDisclosure";

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
        <header className="fixed top-0 w-full h-14 bg-white z-[100]">
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
            <div className="bg-red-300">
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={() => open()}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </div>
        </header>
    );
};
export default Navbar;
