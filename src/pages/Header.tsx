import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TfiClose } from "react-icons/tfi";
import { useSpring, animated } from 'react-spring';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuAnimation = useSpring({    
    opacity: isOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 300 },
  })
  return (
    <>
      <div className='flex justify-between p-6 h-24 absolute w-full' style={{ position: 'fixed' }}>
        <img src={logo} alt='Magic TI' />

        <div className='flex mb-5 text-2xl  items-center'>
          {/*<span className='cursor-pointer hover:text-lg hover:text-sky-600 mr-4 text-lg transition duration-300 ease-in-out hidden sm:flex' onClick={() => setIsOpen(!isOpen)}>MENU</span>*/}
          <button onClick={() => setIsOpen(!isOpen)} className='text-3xl hover:text-sky-600 transition duration-300 ease-in-out'><RxHamburgerMenu /></button>
        </div>


      </div>
      <animated.div style={{ ...menuAnimation }}>
        {isOpen && (
          <>
            {/*SideBar */}
            <div className='bg-black w-40 h-screen  fixed right-0'>

              <div className='flex justify-between m-5'>
                <span className='text-sky-300'>Navegação</span>
                <span className='cursor-pointer text-xl hover:text-sky-600 transition duration-300 ease-in-out' onClick={() => setIsOpen(!isOpen)}><TfiClose /></span>
              </div>

              <div className='ml-5 mt-10'>
                <ul className='text-2xl space-y-4'>
                  <li className='cursor-pointer hover:text-sky-300 transition duration-600 ease-in-out'>Serviços</li>
                  <li className='cursor-pointer hover:text-sky-300 transition duration-600 ease-in-out'>Clientes</li>
                  <li className='cursor-pointer hover:text-sky-300 transition duration-600 ease-in-out'>Sobre</li>
                  <li className='cursor-pointer hover:text-sky-300 transition duration-600 ease-in-out'>Contato</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </animated.div>

    </>


  )
}
