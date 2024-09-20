import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ["300", "700", "900"] })


export function Hr() {
    return <div className='h-1 bg-green-500 w-56 my-4' />
}
export default function HeroAbout() {
    return (
        <div className='  w-full overflow-hidden mb-4'>
            <div id='about' className=' items-center  px-3 md:px-6 lg:px-20  '>




                <div className=' h-full'>
                    <div className=' text-center'>
                        <h5 className=' text-2xl md:text-3xl lg:text-4xl font-extrabold '>Sobre
                        </h5>

                        <div className='  flex justify-center'>
                            <Hr />
                        </div>
                    </div>
                    <p className={`pt-2  text-base md:text-xl   md:text-center  font-light ${poppins.className}`}>
                        Fundada em 2023, a Appx é uma empresa inovadora especializada em fornecer soluções digitais sob medida para as necessidades exclusivas do seu negócio. Com uma equipe experiente e dedicada, oferecemos uma ampla gama de serviços, incluindo o desenvolvimento de sites, aplicativos móveis, software desktop, gerenciamento de bases de dados, implementação de práticas de DevOps e tecnologias de ponta como inteligência artificial e chatbots. Nossa missão é impulsionar a transformação digital de empresas com soluções eficazes e adaptadas ao seu orçamento.


                    </p>
                </div>


            </div>

        </div>
    )
}
