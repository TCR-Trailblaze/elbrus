import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='relative w-full h-screen flex justify-between'>
            <div className='p-10 h-screen overflow-y-scroll z-10'>
                <Image src='/assets/logo-transparent.png' alt='Tricora Jakarta' width={150} height={150} className='z-[100] mb-10' />
                <h1 className='text-5xl font-Josefin font-black grit uppercase'>Kita dan Tricora</h1>
                <h2 className='text-lg font-semibold uppercase '>Trilogi Crave Outdoor Adventure</h2>
                <section className='mt-5 w-full md:w-10/12'>
                    <h3 className='font-bold text-red-500'>Tentang Kami</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed velit libero quia ut fugit debitis ipsa vero commodi architecto impedit nulla, quos at repellendus molestiae saepe accusamus natus excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos, eveniet autem deleniti ut sequi veniam explicabo qui. Beatae eius corrupti debitis quaerat consequatur quisquam odit dolorem a asperiores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem expedita soluta nulla nam possimus rem voluptas recusandae ut culpa, saepe quisquam quas, reiciendis minima necessitatibus vero suscipit consequatur eligendi.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam, placeat quis maiores in nulla ipsum iure expedita. Nobis repellendus autem delectus repudiandae enim consectetur sed sapiente ullam dolores impedit.</p>
                </section>
                <section className='mt-5 w-full md:w-10/12'>
                    <h3 className='font-bold text-red-500'>Tujuan Organisasi</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed velit libero quia ut fugit debitis ipsa vero commodi architecto impedit nulla, quos at repellendus molestiae saepe accusamus natus excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos, eveniet autem deleniti ut sequi veniam explicabo qui. Beatae eius corrupti debitis quaerat consequatur quisquam odit dolorem a asperiores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem expedita soluta nulla nam possimus rem voluptas recusandae ut culpa, saepe quisquam quas, reiciendis minima necessitatibus vero suscipit consequatur eligendi.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam, placeat quis maiores in nulla ipsum iure expedita. Nobis repellendus autem delectus repudiandae enim consectetur sed sapiente ullam dolores impedit.</p>
                </section>
                <section className='mt-5 w-full md:w-10/12'>
                    <h3 className='font-bold text-red-500'>Visi dan Misi</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed velit libero quia ut fugit debitis ipsa vero commodi architecto impedit nulla, quos at repellendus molestiae saepe accusamus natus excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos, eveniet autem deleniti ut sequi veniam explicabo qui. Beatae eius corrupti debitis quaerat consequatur quisquam odit dolorem a asperiores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem expedita soluta nulla nam possimus rem voluptas recusandae ut culpa, saepe quisquam quas, reiciendis minima necessitatibus vero suscipit consequatur eligendi.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam, placeat quis maiores in nulla ipsum iure expedita. Nobis repellendus autem delectus repudiandae enim consectetur sed sapiente ullam dolores impedit.</p>
                </section>
                <section className='mt-5 w-full md:w-10/12'>
                    <h3 className='font-bold text-red-500'>Disiplin Kegiatan</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed velit libero quia ut fugit debitis ipsa vero commodi architecto impedit nulla, quos at repellendus molestiae saepe accusamus natus excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos, eveniet autem deleniti ut sequi veniam explicabo qui. Beatae eius corrupti debitis quaerat consequatur quisquam odit dolorem a asperiores in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem expedita soluta nulla nam possimus rem voluptas recusandae ut culpa, saepe quisquam quas, reiciendis minima necessitatibus vero suscipit consequatur eligendi.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam, placeat quis maiores in nulla ipsum iure expedita. Nobis repellendus autem delectus repudiandae enim consectetur sed sapiente ullam dolores impedit.</p>
                </section>
                <section className='mt-5 w-full md:w-10/12'>
                    <h3 className='font-bold text-red-500'>Anggota</h3>
                    <div className='grid grid-cols-4 md:grid-cols-7 gap-x-3 gap-y-5 mt-5'>
                        {
                           [1,2,3,4,5,6,7,8,9,10].map((item, index) =>
                            <Image src={'https://i.ibb.co/488tXnW/tiger.png'} width={30} height={30} key={index} className='w-20 h-20 rounded-full aspect-square bg-gray-50 border-2 border-red-500' alt={''}/>
                        )}
                    </div>
                </section>
            </div>
            <video
                id="background-video"
                className="inset-0 object-cover h-auto xl:h-screen absolute opacity-10 md:block md:relative md:opacity-90"
                loop
                autoPlay
                muted
            >
                <source src={`/video-1.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default AboutPage