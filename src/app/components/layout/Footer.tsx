import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black w-full text-slate-300 p-5'>
            {/* media screen for XS - MD */}
            <div className='lg:hidden flex flex-col'>
                <article className='p-10 space-y-5'>
                    <h1 className=' md:text-lg'>
                        Address
                    </h1>
                    <p className='text-xs md:text-base font-thin'>
                        Jl. TMP. Kalibata No.1, RT.4/RW.04, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
                    </p>
                    <h1 className='md:text-lg'>
                        Contact
                    </h1>
                      <p className='text-xs md:text-base font-thin'>
                        +62 013423573453
                    </p>
                    <p className='text-xs md:text-base font-thin'>
                        tricora@trilogi.ac.id
                    </p>
                    <hr />
                    <section className='  flex justify-center space-x-5'>
                        <Image src={'/images/fb.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-xs p-1 cursor-pointer md:h-8 md:w-8' />
                        <Image src={'/images/ig.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-xs p-1 cursor-pointer md:h-8 md:w-8' />
                        <Image src={'/images/twt.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-xs p-1 cursor-pointer md:h-8 md:w-8' />
                        <Image src={'/images/yt.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-xs p-1 cursor-pointer md:h-8 md:w-8' />
                    </section>
                </article>
                <article className='text-xs font-thin text-center'>
                    <h1>Copyright © 2023 <span className='font-semibold'>Tricora JKT</span>. All rights reserved</h1>
                </article>
            </div>

            {/* media screen for LG - 2XL */}
            <div className='hidden lg:flex lg:flex-row space-x-10 text-slate-300'>
                <article className='basis-1/2 px-4'>
                    <h1 className='font-bold'>
                        Address
                    </h1>
                    <p className='p-3 text-sm font-thin'>
                        Jl. TMP. Kalibata No.1, RT.4/RW.04, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
                    </p>
                </article>
                <article className='basis-1/2'><h1 className='font-bold'>
                    Contact
                </h1>
                    <p className='p-3 text-sm font-thin'>
                        +62 013423573453
                    </p>
                    <p className='p-3 text-sm font-thin'>
                        tricora@trilogi.ac.id
                    </p>
                </article>
                <article className=' basis-full flex flex-col justify-between items-end '>
                    <section className='flex space-x-4'>
                        <Image src={'/images/fb.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-md p-1 cursor-pointer md:h-8 md:w-8' />
                        <Image src={'/images/ig.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-md p-1 cursor-pointer md:h-8 md:w-8' />
                        <Image src={'/images/twt.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-md p-1 cursor-pointer md:h-8 md:w-8' />
                        <Image src={'/images/yt.png'} alt="fb logo" width={20} height={50} className='bg-white rounded-md p-1 cursor-pointer md:h-8 md:w-8' />
                    </section>
                    <section>
                        <h1 className='text-xs font-thin'>
                            Copyright © 2023 <span className='font-semibold'>Tricora JKT</span>. All rights reserved

                        </h1>
                    </section>
                </article>
            </div>
        </footer>
    )
}

export default Footer
