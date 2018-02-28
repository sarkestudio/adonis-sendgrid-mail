const sgMail = require("@sendgrid/mail")

const C_API_KEY = "sendgrid.apiKey"
const C_SUBSTITUTION_WRAPPERS = "sendgrid.substitutionWrappers"
const C_SENDER_EMAIL = "sendgrid.senderEmail"

class SendGrid {
  constructor(Config) {
    this.sender = Config.get(C_SENDER_EMAIL)

    sgMail.setApiKey(Config.get(C_API_KEY))
    sgMail.setSubstitutionWrappers(...Config.get(C_SUBSTITUTION_WRAPPERS))
  }

  send(mailData, isMultiple, cb) {
    if (Array.isArray(mailData)) {
      mailData.forEach(this._replaceSender)
    } else {
      this._replaceSender(mailData)
    }

    return sgMail.send(mailData, isMultiple, cb)
  }

  sendMultiple(mailData, cb) {
    return this.send(mailData, true, cb)
  }

  _replaceSender(data) {
    if (data.from === undefined && typeof this.sender === "string")
      data.from = this.sender
  }
}

module.exports = SendGrid
