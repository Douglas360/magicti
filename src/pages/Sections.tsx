import { useRef, useState } from 'react'
import { FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";
import { ParallaxLayer } from '@react-spring/parallax'
import { AiOutlineCloudServer, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaConnectdevelop, FaAirbnb, FaPinterestP } from 'react-icons/fa'
import { SiUnitedairlines, SiMotorola } from 'react-icons/si'
import { TbBrandMeta } from 'react-icons/tb'


export const Sections = () => {
    const homeRef = useRef<HTMLElement>(null)
    const servicesRef = useRef<HTMLElement>(null)
    const clientsRef = useRef<HTMLElement>(null)
    const aboutRef = useRef<HTMLElement>(null)
    const contactRef = useRef<HTMLElement>(null)

    const [selectedNav, setSelectedNav] = useState(1)

    return (
        <>

            {/*Home Section */}
            <section className='bg-home-section bg-cover h-content min-h-screen  pt-32 sm:pt-56 pl-1 pr-1 sm:pl-20 transition duration-300 ease-in-out' ref={homeRef}>

                <div className='container grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2' onClick={() => servicesRef.current && servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <div className='content'>

                        <h1 className="text-5xl sm:text-6xl font-bold">
                            Entendemos que a tecnologia
                            está em constante evolução! <br />
                            É aí que entramos.
                        </h1>
                    </div>
                    <div className="social-icons hidden sm:flex justify-end mr-3 mt-11">
                        <ul >
                            <li className='mb-10 hover:text-sky-600 hover:cursor-pointer transition duration-300 ease-in-out'><FaLinkedinIn /></li>
                            <li className='mb-10 hover:text-sky-600 hover:cursor-pointer transition duration-300 ease-in-out'><FaYoutube /></li>
                            <li className='hover:text-sky-600 hover:cursor-pointer transition duration-300 ease-in-out'><FaFacebook /></li>
                        </ul>
                    </div>

                </div>

                <div className='sm:flex'>
                    <div className='mt-10 w-auto sm:w-52 text-lg cursor-pointer p-2 border-2 border-cyan-50 1px hover:bg-black hover:border-black flex justify-center transition duration-300 ease-in-out'
                        onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>CONTATO</div>
                    <a href='https://magicti.com/suporte'><div className='mt-10 w-auto sm:w-52 text-lg cursor-pointer p-2  bg-sky-600 hover:bg-black hover:border-black flex justify-center sm:ml-5 transition duration-300 ease-in-out'
                    >LOGIN</div>
                    </a>
                </div>


            </section>


            {/*Services Section */}
            <section className='bg-gray-900 h-auto min-h-screen' ref={servicesRef}
                onClick={() => clientsRef.current && clientsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <div className='content pt-28'>
                    <div className='text-center space-y-3'>
                        <h3 className='text-sky-600'>O QUE FAZEMOS ?</h3>
                        <h3 className='text-5xl'>Temos tudo o que você precisa para lançar e expandir seus negócios</h3>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 sm:pl-20 sm:pr-20 pl-3 pr-3 space-y-11'>
                        <div className='flex'>
                            <div className='text-9xl text-sky-600'><AiOutlineCloudServer />
                            </div>

                            <div>
                                <h1 className='font-bold mb-5 text-2xl'>Cloud Computing</h1>
                                <p className='text-xl'>Permita-nos transformar suas ideias em realidade com nossa experiência em computação em nuvem. Nós projetamos e implementamos soluções inovadoras que maximizam a eficiência e escalabilidade para atender às suas necessidades únicas. Juntos, vamos impulsionar seu negócio para o próximo nível.</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='text-9xl text-sky-600'><FaConnectdevelop />
                            </div>

                            <div>
                                <h1 className='font-bold mb-5 text-2xl'>Web Development</h1>
                                <p className='text-xl'>Deixe-nos ajudá-lo a tornar seu sonho uma realidade. Com nosso conhecimento e habilidade em desenvolvimento web, vamos transformar suas ideias em soluções digitais eficientes e atrativas que farão sua marca brilhar on-line. Nós acreditamos em trabalhar de mãos dadas com nossos clientes para criar sucesso juntos.</p>
                            </div>
                        </div>






                    </div>
                </div>
            </section>



            {/*Clients Section */}
            <section className='bg-slate-500 min-h-screen' ref={clientsRef}>
                <div className='content sm:p-20 pt-5'>
                    <div className='text-center space-y-3'>
                        <div className='text-center space-y-3'>
                            <h3 className='text-slate-900'>NOSSOS CLIENTES</h3>
                            <h3 className='text-5xl'>A Magic TI teve a honra de fazer parceria com estes clientes</h3>
                        </div>
                        <div className=' pt-10'>
                            <ul className='sm:flex sm:flex-row text-9xl  sm:justify-between sm:space-y-0 space-y-5'>
                                <li className=' cursor-pointer hover:sm:text-slate-900 transition duration-500 ease-in-out flex justify-center'><FaAirbnb /></li>
                                <li className=' cursor-pointer hover:sm:text-slate-900 transition duration-500 ease-in-out flex justify-center'><SiUnitedairlines /></li>
                                <li className=' cursor-pointer hover:sm:text-slate-900 transition duration-500 ease-in-out flex justify-center'><FaPinterestP /></li>
                                <li className=' cursor-pointer hover:sm:text-slate-900 transition duration-500 ease-in-out flex justify-center'><TbBrandMeta /></li>
                                <li className=' cursor-pointer hover:sm:text-slate-900 transition duration-500 ease-in-out flex justify-center'><SiMotorola /></li>
                            </ul>
                        </div>

                        <div className='grid grid-cols-10 pt-14'>
                            <div className="col-span-1 text-5xl m-auto cursor-pointer hover:sm:text-slate-900 duration-300" onClick={() => selectedNav > 1 && setSelectedNav(selectedNav - 1)} ><AiOutlineArrowLeft /></div>

                            <div className="col-span-8 text-slate-200">

                                {selectedNav === 1 &&
                                    <nav className='sm:p-10 items-center flex flex-col justify-center space-y-4'>

                                        <blockquote className='text-3xl'>
                                            "I was looking for a reliable cloud computing service and I found it in Magic IT. They provided me with top-notch support and their web development services are second to none. I highly recommend them to anyone looking for high-quality IT services."
                                        </blockquote>

                                        <img src='https://preview.colorlib.com/theme/glint/images/avatars/user-01.jpg' alt='' className='rounded-full' width='100px' />
                                        <cite>
                                            <b>John Doe, CEO of MBR Inc.</b>
                                        </cite>

                                    </nav>
                                }

                                {selectedNav === 2 &&
                                    <nav className='sm:p-10 items-center flex flex-col justify-center space-y-4'>

                                        <blockquote className='text-3xl'>
                                        "A equipe da Magic TI fez de tudo para nos ajudar com nosso projeto de desenvolvimento web. Eles dedicaram tempo para entender nossas necessidades e nos forneceram uma solução que superou nossas expectativas. Estamos extremamente satisfeitos com seus serviços e os recomendamos fortemente para quem procura serviços de TI de alto nível."
                                        </blockquote>

                                        <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80' alt='' className='rounded-full' width='100px' />
                                        <cite>
                                            <b>Jane Doe, CTO - MSA Transporte.</b>
                                        </cite>

                                    </nav>
                                }

                                {selectedNav === 3 &&
                                    <nav className='sm:p-10 items-center flex flex-col justify-center space-y-4'>

                                        <blockquote className='text-3xl'>
                                        "Estávamos procurando uma solução de computação em nuvem que se adaptasse ao crescimento de nossos negócios e a Magic TI nos forneceu exatamente isso. Sua equipe de especialistas trabalhou em estreita colaboração conosco para projetar e implementar uma solução que atendesse a todas as nossas necessidades. Estamos extremamente satisfeito com seus serviços e os recomendo a todos que procuram um provedor confiável de computação em nuvem."
                                        </blockquote>

                                        <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80' alt='' className='rounded-full' width='100px' />
                                        <cite>
                                            <b>Bob Smith, CFO - Pride Construtora.</b>
                                        </cite>

                                    </nav>
                                }


                            </div>

                            <div className="col-span-1 text-5xl m-auto cursor-pointer hover:sm:text-slate-900 duration-300" onClick={() => selectedNav < 3 && setSelectedNav(selectedNav + 1)}><AiOutlineArrowRight /></div>
                        </div>
                    </div>
                </div>
            </section>


            {/*About Section */}
            <section className='bg-white dark:bg-gray-900' ref={aboutRef}
                onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <div className='h-screen'> Sobre</div>
            </section>


            {/*Contact Section */}
            <section className='bg-home-section bg-cover' ref={contactRef}
                onClick={() => homeRef.current && homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <div className='h-screen'></div>
            </section>

        </>

    )
}
