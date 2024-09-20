import React from 'react'

type HrProps = { color?: string }

function Hr({ color }: HrProps) {
    return <div style={{ background: color }} className='h-1 bg-green-500 w-8 my-4' />
}

export default function HeroMain() {
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"

            className='h-screen items-center bg-black md:grid grid-cols-2 px-3 md:px-6 lg:px-20 pt-20'>
            {/* Imagem de fundo em telas menores */}
            <div className='w-full h-[55%]  bg-cover bg-center md:hidden mt-6 md:mt-0'

                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 100%, rgba(0,0,0,0.3) 100%) ,url(/mgx.png)` }}

            ></div>

            {/* Seção de texto */}
            <div className='md:flex flex-col justify-center h-full w-full'>
                <div className='flex gap-2 justify-center md:justify-start mt-6 md:mt-0'>
                    <Hr /><Hr color={'white'} /> <Hr /><Hr color={'white'} /> <Hr />
                </div>
                <h5 className='text-zinc-200 font-semibold md:text-4xl text-2xl text-center  '>
                    Criamos <span className='text-green-500'>sites</span> e <span className='text-green-500'>aplicativos móveis</span> de alta qualidade, adaptados às necessidades específicas do seu negócio ou propósito.
                </h5>
            </div>

            {/* Imagem de fundo para telas maiores */}
            <div className='h-full hidden md:block  bg-cover bg-center w-full'

                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.3) 100%) ,url(/mgx.png)` }}



            ></div>
        </div>
    )
}
