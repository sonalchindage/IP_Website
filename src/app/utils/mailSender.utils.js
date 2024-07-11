import nodemailer from "nodemailer";

export const trasporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sonalchindage@gmail.com",
    pass: "lmxj nbgz xxvw diqb",
  },
});
