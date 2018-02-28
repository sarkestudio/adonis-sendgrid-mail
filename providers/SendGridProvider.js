const { ServiceProvider } = require("@adonisjs/fold")

class QueueProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/SendGrid", () => {
      const Config = this.app.use("Adonis/Src/Config")
      return new (require("../src/SendGrid"))(Config)
    })
  }
}

module.exports = QueueProvider
