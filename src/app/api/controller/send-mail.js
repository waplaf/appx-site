"use strict";
import nodemailer from 'nodemailer';

// Função para enviar e-mail
const sendMail = async (to, subject, html, text = "") => {
    // Verifica se as variáveis de ambiente estão definidas corretamente
    const user = process.env.EMAIL;  // E-mail remetente
    const pass = process.env.EMAIL_PASS;  // Senha do e-mail
    const emailName = process.env.NAME;  // Nome do remetente

    if (!user || !pass || !emailName) {
        throw new Error("Credenciais de e-mail ausentes ou incorretas. Verifique as variáveis de ambiente.");
    }

    // Configura o transportador de e-mail usando o serviço SMTP do Gmail
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Definir 'true' para porta 465, 'false' para 587
        auth: {
            user: user,  // E-mail remetente
            pass: pass,  // Senha do e-mail
        },
    });

    // Envia o e-mail
    let info = await transporter.sendMail({
        from: `"${emailName}" <${user}>`,  // Remetente
        to,  // Destinatário
        subject,  // Assunto
        text,  // Corpo de texto simples (opcional)
        html,  // Corpo de texto em HTML
    });

    // Exibe o ID da mensagem no console
    console.log(`Message sent: ${info.messageId}`);

    // Se o envio for realizado por meio de conta Ethereal, mostra a URL de visualização
    if (nodemailer.getTestMessageUrl(info)) {
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    }
};

// Exporta a função
export { sendMail };
