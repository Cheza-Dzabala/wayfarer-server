# wayfarer-server
Server application for way farer


# Sign Up

#### Description

###### Endpoint
`api/v1/auth/signup` Method: `POST
This endpoint allows a user to register to the way farer application.
Method: `POST`
Data: `{
    email: string - required
    password: string - required
    First Name: string - required
    Last Name: string - required
}`
`


#COVERAGE COVERALLS REPORT
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-sign-user-up-167592714)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-sign-user-up-167592714)

#TRAVIS CI
[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-sign-user-up-167592714)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)

### Tests

#### Tests Covered

1. Test that the enpoint exists

2. Provided valid data, successfully create a user account.
    - Return Status 201 - Created
    - status: 'success'
    - Data: { id: int, email: string, first_name: string, last_name: string, token: string }

3. Reject request if an account with the same Email exists
    - Return Status 403 - Forbidden
    - status: 'Forbidden'
    - Data: { message: 'Email already exists on the system' }

4. Reject A New User account if Email is not provided
    - Return Status 400 - Bad Request
    - status: 'Bad Request'
    - Data: { message: '"email" is required'' }

5. Reject A New User account if Password is not
    - Return Status 400 - Bad Request
    - status: 'Bad Request'
    - Data: { message: '"password" is required'' }

6. Reject A New User account if First Name is not provided
    - Return Status 400 - Bad Request
    - status: 'Bad Request'
    - Data: { message: '"first_name" is required'' }

7. Reject A New User account if Last Name is not provided
    - Return Status 400 - Bad Request
    - status: 'Bad Request'
    - Data: { message: '"last_name" is required'' }

# Sign In

##### Description

###### Endpoint
`api/v1/auth/signin`

- Method: POST
- Data: { email: string - Required, password: string - Required }

[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-sign-user-in-167569860)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)

[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-sign-user-in-167569860)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-sign-user-in-167569860)
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



