import { NextRequest, NextResponse } from "next/server";

import { sendMail } from '../controller/send-mail'


interface ContactFormBody {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}





export async function POST(request: NextRequest): Promise<NextResponse> {

    // Processa o corpo da solicitação como JSON
    const body: ContactFormBody = await request.json();


    sendMail('lucasalbertofulano@gmail.com', 'Pedido de Candidatura',

        `
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato Recebido</title>
    <style>
        body {
            background-color: #f3f4f6;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        p {
            line-height: 1.6;
            color: #333;
        }
        a {
            color: #2563eb;
            text-decoration: none;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 20px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
        }
        .footer a {
            color: #2563eb;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            Formulário de Contato Recebido
        </div>
        <p>Olá,</p>
        <p>Você recebeu uma nova mensagem através do formulário de contato:</p>
        <p><strong>Nome:</strong> ${body.nome}</p>
        <p><strong>Email:</strong> ${body.email}</p>
           <p><strong>Assunto:</strong> ${body.assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${body.mensagem}</p>
        <a href="mailto:${body.email}" class="button">Responder</a>
        <div class="footer">
            <p>Este é um e-mail automático. Não responda diretamente.</p>
            <p>Se precisar de ajuda, entre em contato pelo nosso <a href="https://www.seusite.com.br">site oficial</a>.</p>
        </div>
    </div>
</body>
</html>




            `, ""




    )






    return NextResponse.json({ message: "enviado com sucesso" }, { status: 200 });





}

