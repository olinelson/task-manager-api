const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.sendgridAPIKey

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'olinelson93@gmail.com',
        subject: 'Welcome to task manager app!',
        text: `Hi ${name}, welcome to task manager app. Let me know how you get along!`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'olinelson93@gmail.com',
        subject: 'Sorry to see you go',
        text: `Hi ${name}, sorry to see that you have decided to cancel your account... If you have time, we would really appreciate any feedback on how we could have kept you onboard!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}