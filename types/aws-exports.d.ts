/* eslint-disable */
export default awsmobile
declare namespace awsmobile {
  const aws_project_region: string
  const aws_cognito_identity_pool_id: string
  const aws_cognito_region: string
  const aws_user_pools_id: string
  const aws_user_pools_web_client_id: string
  const oauth: {}
  const aws_cognito_username_attributes: string[]
  const aws_cognito_social_providers: any[]
  const aws_cognito_signup_attributes: string[]
  const aws_cognito_mfa_configuration: string
  const aws_cognito_mfa_types: string[]
  namespace aws_cognito_password_protection_settings {
    const passwordPolicyMinLength: number
    const passwordPolicyCharacters: any[]
  }
  const aws_cognito_verification_mechanisms: string[]
  namespace predictions {
    namespace identify {
      namespace identifyEntities {
        const proxy: boolean
        const region: string
        const celebrityDetectionEnabled: boolean
      }
    }
    namespace convert {
      namespace speechGenerator {
        const region_1: string
        export { region_1 as region }
        const proxy_1: boolean
        export { proxy_1 as proxy }
        export namespace defaults {
          const VoiceId: string
          const LanguageCode: string
        }
      }
    }
  }
}
