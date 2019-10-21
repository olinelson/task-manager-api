const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'olinelson93@gmail.com',
    from: 'olivernelson@icloud.com',
    subject: 'Hello from the moon',
    text: 'Hello Oli, I hope this email gets to you...'

})