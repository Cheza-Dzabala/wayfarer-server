# wayfarer-server
Server application for way farer

[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=master)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)

[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-sign-user-in-167569860)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-sign-user-in-167569860)

# Signin API
`api/v1/auth/signin` Method: POST

## Tests

#### Tests covered:

1. Test that the endpoint exists

2. User must sign in successfully given correct credentials
    - Return Status 200 - OK
    - Message: 'success'
    - Data: { id: int, email: string, first_name: string, last_name: string, token: string }

3. User must not sign in if credentials are invalid
    - Return status 404 - NOT FOUND
    - Message: unsuccessful
    - Data: { message: '`"Invalid Credentials`' }

4. Should reject login with a missing Email
    - Return status 400 - Bad Request
    - Message: unsuccessful
    - Data: { message: '`"email" is required`' }

5. Should reject login with a missing Password
    - Return status 400 - Bad Request
    - Message: unsuccessful
    - Data: { message: '`"email" is required`' }

#### Pivotal Tracker Story
167569860

