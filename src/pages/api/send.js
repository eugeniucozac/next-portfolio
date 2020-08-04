const sgMail = require("@sendgrid/mail")

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message } = req.body

  const content = {
    to: "eugeniu.cozac@gmail.com",
    from: email,
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  }

  try {
    await sgMail.send(content)
    console.log("sent ")
    res.status(200).send("Message sent successfully.")
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
