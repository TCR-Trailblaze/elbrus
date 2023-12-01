import Link from 'next/link'
import React from 'react'
import { NAVIGATION_MENUS } from '../../utils/data'


// 3. Buat interface untuk props tadi, harus sama sama yang dikirim dari parent(navbar)
// coba lihat lagi waktu drawer dipanggil di code (1.1)
interface IPropsDrawer {
    isOpen: boolean
    close: () => void
    active: string,
    setCurrentSection: (ref: string) => void
}

// di parameter component function dia naangkep props dari parentnya (navbar component)
const DrawerComponent: React.FC<IPropsDrawer> = ({ isOpen, close, active, setCurrentSection }) => {
    return (
        <div id="drawer-navigation" className={`z-[101] fixed md:hidden top-0 right-0 h-screen p-4 overflow-y-auto transition-transform bg-white w-5/6   ${isOpen ? '' : 'translate-x-full'} `} tabIndex={-1} aria-labelledby="drawer-navigation-label">
         {/* disini dipanggil di event onClick props func open() untuk membuka drawer */}
            <button type="button" onClick={() => close()} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
            <div className="py-4 overflow-y-auto mt-10">
                <ul className="">
                    {NAVIGATION_MENUS.map((menu) =>
                        <li key={menu?.id} className='text-center'>
                            <Link
                                href={menu.ref}
                                onClick={() => {
                                    //  {/* disini dipanggil di event onClick props func close() untuk membuka drawer */}
                                    setCurrentSection(menu.ref)
                                    close()
                                }}
                                className="flex text-center items-center p-2 rounded-lg group">
                                <span className={`w-full font-semibold text-lg text-center cursor-pointer hover:text-delima-primary ${active === menu.ref ? 'text-delima-primary' : 'text-delima-text-dark'}`}>{menu.title}</span>
                            </Link>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default DrawerComponent