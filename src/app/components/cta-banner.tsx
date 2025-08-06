import Link from "next/link"
import React from "react"

const CTABanner = () => {

    return (
        <main className="w-full h-[400px] md:h-[600px] p-5 md:p-10 bg-no-repeat bg-cover rounded flex flex-col justify-between"
            style={{
                backgroundImage: 'url(./images/tcr-1.jpg)',
                backgroundPosition: 'center',
                filter: "grayscale(60%)",
                backgroundColor: 'rgba(11, 11, 11, 0.3)',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply' 
            }}>
            <h1 className="text-white uppercase xs:text-xl font-semibold sm:text-2xl cursor-pointer">
                join with us<span className="text-red-600">.</span>
            </h1>
            <div className=" lg:w-1/4 text-white uppercase">
                <h2 className="leading-none w-full text-2xl sm:text-3xl font-semibold">
                   TRICORA Recruitment 2023
                </h2>
                <p>Description goes here</p>
                <section className="flex w-full sm:w-1/2 justify-evenly mt-3">
                    <Link href={"/recruitment"} className="w-full" >
                    {/* <button className="bg-[#ee2525] rounded-full p-1 w-full uppercase hover:bg-red-600">join tricora</button> */}
                    </Link>
                </section>
            </div>
        </main>
    )
}

export default CTABanner