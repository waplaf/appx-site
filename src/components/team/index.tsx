import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'


export default function Team() {

    const people = [{ avatar: "laf.png", name: "Lucas Fulano", category: "Devops", twitter: "", instagram: "", facebook: "", tiktok: "" },
    {
        avatar: "tiago.jpg", name: "Tiago Jr", category: " Web design", twitter: "", instagram: "", facebook: "", tiktok: ""
    }, {
        avatar: "deny.png", name: "Deny ", category: "Software Engineer", twitter: "", instagram: "", facebook: "", tiktok: ""
    },

    {
        avatar: "frasio.png", name: "Frasio João  ", category: "Software Engineer", twitter: "", instagram: "", facebook: "", tiktok: ""
    },

    {
        avatar: "fazbem.jpg", name: "Fazbem Alberto  ", category: "IT e Gestor financeiro", twitter: "", instagram: "", facebook: "", tiktok: ""
    },

    ]

    return (
        <section id='team' className="bg-black">
            <div className="py-4 px-4 mx-auto max-w-screen-xl  lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-500">Nossa Equipe</h2>
                    <p className=" text-green-400 lg:mb-16 sm:text-xl  font-light">

                        Conheça a equipe dedicada que trabalha para transformar o APX em uma referência no setor.
                    </p>
                </div>

                <Marquee>
                    {
                        people.map(({ name, category, avatar }) =>
                            <div key={name} className="text-center text-zinc-300  w-[270px]">
                                <Image loading='lazy' height={144} width={144} className="mx-auto mb-4 w-36 h-36 rounded-full  object-cover object-center" src={`/assets/team/${avatar}`} alt="Bonnie Avatar" />
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-green-400 ">
                                    {
                                        name
                                    }
                                </h3>
                                <p className=' text-green-300'> {category}</p>
                                <ul className=" justify-center mt-4 space-x-4 hidden">
                                    <li>
                                        <a href="#" className="text-green-500 hover:text-green-600">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-green-500 hover:text-green-600">

                                            <svg viewBox="0 0 24 24" fill='#22c55e ' width={24} height={24} aria-hidden="true" className=" size-6"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-green-500 hover:text-green-600">


                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>

                                        </a>
                                    </li>

                                </ul>
                            </div>
                        )
                    }
                </Marquee>



            </div>
        </section>
    )
}