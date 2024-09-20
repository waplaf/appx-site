import React from 'react'
import { Hr } from './about'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ["300", "700", "900"] })
export default function HeroServices() {
    return (
        <div data-aos="fade-up" id='services' className='items-center md:grid grid-cols-2 px-3 md:px-6 lg:px-20 lg:py-8 '>

            <div className=' md:flex hidden justify-center w-full h-full bg-center bg-contain bg-no-repeat ' style={{ backgroundImage: "url(/IA.png)" }}>


            </div>


            <div className=' h-full'>
                <h5 className=' text-2xl md:text-3xl lg:text-4xl font-extrabold'>Nossos Serviços


                </h5>
                <Hr />
                <div className=' flex justify-center md:hidden'>
                    <img src="/IA.png" className=' w-80  h-80    object-fill' />

                </div>
                <ul className={"list-disc py-2 space-y-2 " + poppins.className}>
                    <li>
                        <strong className=''>Sites e Aplicativos Móveis</strong>: Desenvolvemos qualquer tipo de software para o seu negocio, sempre focando nas suas necessidades e no seu orçamento. Nossas soluções são sob medida e de alto desempenho, desde ferramentas de produtividade até sistemas complexos, projetados para maximizar o valor do seu investimento.
                    </li>
                    <li>
                        <strong>Software Desktop</strong>: Criamos aplicações desktop personalizadas e de alto desempenho, projetadas para atender às necessidades específicas de sua empresa, desde ferramentas de produtividade até soluções complexas e especializadas.
                    </li>
                    <li>
                        <strong>Bases de Dados</strong>: Projetamos e gerenciamos bases de dados seguras e eficientes, garantindo um armazenamento e acesso ideais às suas informações.
                    </li>
                    <li>
                        <strong>DevOps</strong>: Implementamos práticas ágeis e automação para acelerar o desenvolvimento e a entrega de software, melhorando a eficiência e a qualidade do seu processo de desenvolvimento.
                    </li>
                    <li>
                        <strong>Inteligência Artificial e Chatbots</strong>: Desenvolvemos aplicações avançadas que utilizam inteligência artificial e chatbots para automatizar processos, oferecer suporte interativo e fornecer insights valiosos para o seu negócio.
                    </li>
                </ul>

            </div>

        </div>
    )
}
