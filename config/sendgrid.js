'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | API Key
  |--------------------------------------------------------------------------
  |
  | Your SendGrid API key
  |
  */
  apiKey: Env.get('SENDGRID_API_KEY'),

  /*
  |--------------------------------------------------------------------------
  | Substitution Wrappers
  |--------------------------------------------------------------------------
  |
  | Which substitution wrappers to use by default
  | Index 0 - left
  | Index 1 - right
  |
  */
  substitutionWrappers: ['%', '%']
}
