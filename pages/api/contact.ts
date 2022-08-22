// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// TODO: Before production: https://mailtrap.io/blog/nodemailer-gmail/
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const requiredFields = ['email', 'message', 'name', 'company'];

type Data = {
  message?: string;
  data?: null | any;
  error?: string | null | Error;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST')
    return res.status(500).json({
      error: `${req.method} request method does not exist`,
    });

  const requiredFieldsExist = requiredFields.filter(
    (field) => !req.body[field],
  );

  if (!!requiredFieldsExist.length) {
    return res.status(400).json({
      error: `Please provide fields: ${requiredFieldsExist.join(', ')}`,
    });
  }

  const { email, message, name, company } = req.body;
  const isDev = process.env.NODE_ENV !== 'production';
  const transporterFunc = isDev ? setupTestAccount : setupProductionAccount;

  try {
    const transporter = await transporterFunc();

    const mailData = {
      from: `Wesnera.com <${email}>`,
      to: process.env.NEXT_APP_NODEMAILER_EMAIL,
      subject: `Contact Us: ${name} from ${company}`,
      text: message,
      html: `<div><p>Company: ${company}</p><p>Message: ${message}</p></div>`,
    };

    const info = await transporter.sendMail(mailData);

    res.status(200).json({
      message: 'Email has being sent',
      data: { mailData, info },
      error: null,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error', data: null, error: error as Error });
  }
}

async function setupProductionAccount() {
  return nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_APP_NODEMAILER_EMAIL,
      pass: process.env.NEXT_APP_NODEMAILER_PASSWORD,
    },
    secure: true,
  });
}

async function setupTestAccount() {
  return nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
  });
}
