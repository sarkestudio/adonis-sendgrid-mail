# AdonisJS SendGrid Mail Service

### Getting Started
1. Install with package manager:  
`npm i --save adonis-sendgrid-mail`
2. Copy configuration file:  
`cp node_modules/adonis-sendgrid-mail/config/sendgrid.js config/sendgrid.js`
3. Set `SENDGRID_API_KEY` property in `.env` file.

### Usage
This service exposes the same `send` and `sendMultiple` methods as [@sendgrid/mail](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail) package.

```js
const SendGrid = use("Adonis/Addons/SendGrid")

SendGrid.send(mailData)
    .then(...)
    .catch(...)
```

### Configuration
You can find following configuration options in `config/sendgrid.js`:  
- `substitutionWrappers` - Which substitution wrappers to use by default.
- `senderEmail` - Default email address to send from. Can be overridden with explicit `from` property in mail data object.