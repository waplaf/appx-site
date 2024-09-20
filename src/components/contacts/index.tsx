import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios"; // Importação do axios
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import localFont from "next/font/local";

const workSans = localFont({
    src: "./fonts/worksans.woff2",
    variable: '--font-work-sans',
    weight: "100 900",
});






// Definição do tipo de dados do formulário
interface FormData {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

// Definição do tipo de erros de validação
interface FormErrors {
    nome?: string;
    email?: string;
    assunto?: string;
    mensagem?: string;
}

export default function Contacts() {
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });
    const { toast } = useToast()

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

    // Função para atualizar o estado dos campos
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função de validação
    const validate = (): boolean => {
        const formErrors: FormErrors = {};

        if (!formData.nome.trim()) {
            formErrors.nome = "O nome é obrigatório";
        }

        if (!formData.email.trim()) {
            formErrors.email = "O e-mail é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Digite um e-mail válido";
        }

        if (!formData.assunto.trim()) {
            formErrors.assunto = "O assunto é obrigatório";
        }

        if (!formData.mensagem.trim()) {
            formErrors.mensagem = "A mensagem é obrigatória";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Função de envio do formulário
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setSubmitSuccess(null);

            try {
                const response = await axios.post("/api/contact-us", formData); // Envia os dados para a rota
                console.log("Dados enviados com sucesso:", response.data);
                const msg = 'Mensagem enviada com sucesso!'

                setSubmitSuccess(msg);



                toast({
                    variant: "default",
                    title: "Resultado do envio",
                    description: "Mensagem enviada com sucesso",
                    className: "bg-green-500 text-white fixed max-w-sm top-4 left-1/2 transform -translate-x-1/2", // Cor verde e centralização
                });


                setFormData({ nome: "", email: "", assunto: "", mensagem: "" }); // Reseta o formulário
                setErrors({});
            } catch (error) {
                console.error("Erro ao enviar mensagem:", error);
                setSubmitSuccess("Erro ao enviar a mensagem. Tente novamente.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };


    return (
        <div id="contact" data-aos="fade-up" className={`bg-green-1500 ${workSans.variable}`} >

            <div className="py-4 px-4 lg:px-64 space-y-6 lg:py8">
                <div className="flex justify-center flex-col  items-center">
                    <h5 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900">Contacto</h5>
                    <div className="h-1 bg-green-500 w-56 mb-4" />
                </div>
                <span className="text-xl ">
                    Ficou interessado em ser nosso parceiro de negócios? Quer bater um papo com a gente? Fique à vontade e nos envie
                    uma mensagem*, será um prazer!
                </span>

                <form className=' space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <Input
                            name="nome"
                            placeholder="Nome"
                            className=" bg-green-50"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                        {errors.nome && <p className="text-red-500">{errors.nome}</p>}
                    </div>

                    <div>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className=" bg-green-50"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <Input
                            name="assunto"
                            placeholder="Assunto" className=" bg-green-50"
                            value={formData.assunto}
                            onChange={handleInputChange}
                        />
                        {errors.assunto && <p className="text-red-500">{errors.assunto}</p>}
                    </div>

                    <div>
                        <Textarea
                            name="mensagem"
                            placeholder="Mensagem"
                            className=" bg-green-50"

                            value={formData.mensagem}
                            onChange={handleInputChange}
                        />
                        {errors.mensagem && <p className="text-red-500">{errors.mensagem}</p>}
                    </div>

                    <br />
                    <span>
                        Os seus dados serão utilizados para responder à sua solicitação através do endereço de e-mail indicado. Ao
                        encaminhar suas informações, você declara que leu e está de acordo com o tratamento dos seus dados pela
                        Appx conforme estabelecido na Política de Privacidade.
                    </span>

                    <div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-5 py-2 bg-black hover:bg-zinc-900 text-zinc-200 w-full flex gap-2 ${isSubmitting && "opacity-50"}`}
                            style={{ borderRadius: 6 }}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                            {!isSubmitting && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-send"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            )}
                        </Button>
                        {submitSuccess && <p className="mt-4">{submitSuccess}</p>}
                    </div>
                </form>
            </div></div>
    );
}
