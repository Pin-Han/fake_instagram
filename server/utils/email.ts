const nodemailer = require("nodemailer");

interface InterfaceEMAIL {
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (options: InterfaceEMAIL) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Patrick Lin <patrick@yunyun.cloud>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
