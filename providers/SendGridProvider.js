const sgMail = require('@sendgrid/mail')
const { ServiceProvider } = require('@adonisjs/fold')

const C_API_KEY = 'sendgrid.apiKey'
const C_SUBSTITUTION_WRAPPERS = 'sendgrid.substitutionWrappers'

class QueueProvider extends ServiceProvider {
  register() {
    this.app.singleton('Adonis/Addons/SendGrid', () => {
      const Config = this.app.use('Adonis/Src/Config')

      sgMail.setApiKey(Config.get(C_API_KEY))
      sgMail.setSubstitutionWrappers(...Config.get(C_SUBSTITUTION_WRAPPERS))

      return sgMail
    })
  }
}

module.exports = QueueProvider
