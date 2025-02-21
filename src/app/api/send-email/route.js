import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Contraseña de aplicación de Google
  },
});

export async function POST(request) {
  try {
    console.log('Starting email send process...');
    const { email, checklist } = await request.json();
    
    console.log('Sending to:', email);
    console.log('Using Gmail account:', process.env.GMAIL_USER);

    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tu Checklist de Visita al Departamento</title>
        </head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #00bcd4;
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 2px solid #eee;
          }
          .item {
            margin: 15px 0;
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 8px;
            background-color: #fff;
          }
          .item-header {
            margin: 0;
            font-size: 18px;
            display: flex;
            align-items: center;
          }
          .check {
            margin-right: 10px;
            color: #2e7d32;
          }
          .uncheck {
            margin-right: 10px;
            color: #666;
          }
          .notes {
            margin: 10px 0 0 25px;
            color: #666;
            font-size: 14px;
            font-style: italic;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 14px;
            color: #666;
          }
        </style>
        <body>
          <div style="background-color: #f9f9f9; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; padding: 20px;">
              <!-- Logo o nombre de la app -->
              <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: #00bcd4; margin: 0;">Tips para Alquilar</h2>
              </div>

              <h1>Tu Checklist de Visita al Departamento</h1>
              
              <!-- Contenido existente del checklist -->
              <div>
                ${checklist.map(item => `
                  <div class="item">
                    <h3 class="item-header">
                      <span class="${item.checked ? 'check' : 'uncheck'}">
                        ${item.checked ? '✓' : '○'}
                      </span>
                      ${item.label}
                    </h3>
                    ${item.notes ? `
                      <p class="notes">
                        ${item.notes}
                      </p>
                    ` : ''}
                  </div>
                `).join('')}
              </div>

              <!-- Footer mejorado -->
              <div class="footer">
                <p>Este email fue enviado a ${email} porque solicitaste un resumen de tu checklist de visita.</p>
                <p>Tips para Alquilar - Tu guía para encontrar el departamento ideal</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #666;">
                  © ${new Date().getFullYear()} Tips para Alquilar. Todos los derechos reservados.<br>
                  Este es un email automático, por favor no respondas a este correo.<br>
                  Si no solicitaste este email, puedes ignorarlo.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: {
        name: 'Tips para Alquilar',
        address: process.env.GMAIL_USER
      },
      to: email,
      subject: 'Tu Checklist de Visita al Departamento',
      html: emailContent,
      headers: {
        'List-Unsubscribe': `<mailto:${process.env.GMAIL_USER}?subject=unsubscribe>`,
        'Precedence': 'bulk'
      }
    };

    console.log('Attempting to send email with options:', mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return Response.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Detailed error:', error);
    console.error('Error stack:', error.stack);
    return Response.json({ 
      error: error.message,
      details: error.toString()
    }, { status: 500 });
  }
} 