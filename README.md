# wayfarer-server
Server application for way farer

###### Coveralls Test Coverage
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server)

# Admins

## Description
Admins are able to create other admin accounts. Also revised, the method on how to verify if an account is admin. 

Old Method:

`Send admin ID in the Header`

New Method:

`Retrieve admin information from auth token`

#### Endpoint

###### GET METHODS
1. View all admins registered to way farer `api/v1/admins`

`Request:`

```Javascript
    header('token', [token | String])
```

`Response: `
```javascript
    {
        status: 'success',
        data: [
                {
                    id: Integer,
                    email: String,
                    first_name: String,
                    last_name: String,
                },
                {
                    ...
                },
                {
                    ...
                }
        ]
    }
```

###### POST METHODS

1. Create a new admin `api/v1/admins`
`Request: `
```javascript 
    header: {'token', [token | String]}
    body: {
        email: String,
        first_name: String,
        last_name: String,
    }
```
`Response: `

```javascript
data: {
    id: Integer,
    email: String,
    first_name: String,
    last_name: String
}
```
### Tests

###### TRAVIS CI BUILD
[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-admin-creation-167688119)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)

###### COVERALLS TEST COVERAGE
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-admin-creation-167688119)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-admin-creation-167688119)

#### Tests Covered

1. Check if endpoint exists

2. Return all admins

3. Create new admin successfully

4. Reject admin account creation if email exists

5. Refuse to create admin account if `email` is missing

6. Refuse to create admin account if `first_name` is missing

7. Refuse to create admin account if `last_name` is missing

#### Pivotal Tracker Story
__167688119__


# Bookings

## Description

Users are able to create new bookings, view __their__ bookings & delete __their__ bookings. Admins are able to view __all__ bookings.

#### Endpoint


###### GET METHODS

1. View all bookings. Only accessible by admins `api/v1/bookings`

`Request: `
```javascript
    header('admin', [admin ID | Integer]) [Discontinued in favour of using tokens]
    header('token', [token | String])
```

`Response: `
```javascript
    {
        status: 'success',
        data: [
            {
            booking_id: Integer,
            bus_license_number: Integer,
            trip_date: Date,
            first_name: String,
            last_name: String,
            user_email: String
            },
            {
                ...
            },
            {
                ....
            }
        ]
    }
```

2. View all bookings by user of `:id`. Users can view only their bookings and admins can view specific user bookings `api/v1/bookings/:id`

`Request:`
```javascript
    header('token', [token | String])
```

`Response: `
```javascript
    {
        status: 'success',
        data: [
            {
            booking_id: Integer,
            bus_license_number: Integer,
            trip_date: Date,
            first_name: String,
            last_name: String,
            user_email: String
            },
            {
                ...
            },
            {
                ....
            }
        ]
    }
```

###### POST METHODS

1. Create a new booking `api/v1/bookings`

`Request: `
```javascript
    header('token', [token | String])
```

`Response: `
```javascript
    {
        status: 'success',
        data: {
            booking_id: Integer,
            bus_license_number: Integer,
            trip_date: Date,
            first_name: String,
            last_name: String,
            user_email: String
        }
    }
```

###### DELETE METHODS
1. Delete a booking `api/v1/bookings/<:id>`

`Request:`
```javascript
    header('token', [token | String])
```

`Response:`
```javascript
    {
        status: 'success',
        data: {
            'message': 'Successfully deleted booking'
        }
    }
```

### Tests


###### COVERALLS TEST COVERAGE
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-bookings-167618264)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-bookings-167618264)

###### TRAVIS CI BUILD
[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-bookings-167618264)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)


#### Tests Covered

1. Check if endpoint exists

2. Return all user bookings

3. Return all bookings from all users if admin is accessing the route

4. Refuse to return all bookings if user is not admin

5. Create booking if post data is valid

6. Refuse to create booking if token is missing from the header

7. Refuse to create booking if `trip_id` is missing

8. Refuse to create booking if `user_id` is missing

9. Refuse to create booking if `seat_number` is missing

10. Successfully delete a booking

11. Refuse to delete booking if token is missing

#### Pivotal Tracker Story
__167618264__

# Trips

#### Description

Allow a user to view all trips currently in the system.

#### Endpoints

###### GET METHODS
1. View all trips `api/v1/trips/`

`Request: `
```javascript 
body: {}
```
`Response: `

```javascript
data: [
    {
        id: Integer,
        seating_capacity: Integer,
        origin: String,
        destination : String,
        trip_date: Date
        fare: Float,
        status: BOOLEAN,
        bus_license_number: String
    }
]
```
###### POST METHODS
1. Create a new trip (`api/v1/trips/`)

`Request: `
```javascript 
header('token', String),

body: {
    seating_capacity: Integer,
    origin: String,
    destination : String,
    trip_date: Date
    fare: Float,
    status: BOOLEAN,
    bus_license_number: String
}
```
`Response: `

```javascript
{
    status: 'success',
    data: {
        id: Integer,
        email: String,
        first_name: String,
        last_name: String
    }
}
```
###### PATCH METHODS
1. Cancel a new trip `api/v1/trips/<:id>`

`Request: `
```javascript
header('token', String),

body: {}
```
`Response: `
```javascript
{
    status: 'success',
    data: {
        message: 'Successfully cancelled trip'
    }
}
```

### Tests

###### Coveralls Test Coverage
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-create-trips-feature-167594397)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server)

###### Travis CI Builds
[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-create-trips-feature-167594397)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)


##### Tests Covered

1. Test if Endpoint exists

2. Endpoint should Reject all requests that do not have a token in the header

3. Create a trip if data is valid

4. Display all trips

5. Cancel a trip

#### Pivotal Tracker Story
__167594397__

# Sign Up

#### Description

Allow a user to sign up to the way farer platform.

#### Endpoint

###### POST METHODS
1. Sign Up `api/v1/auth/signup` 

`Request: `
```javascript 
body: {
    email: String,
    password: String,
    first_name: String,
    last_name: String,
}
```
`Response: `

```javascript
data: {
    id: Integer,
    email: String,
    first_name: String,
    last_name: String
}
```
### Tests

###### COVERAGE COVERALLS REPORT

[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-sign-user-up-167592714)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-sign-user-up-167592714)

###### TRAVIS CI


[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-sign-user-up-167592714)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)


#### Tests Covered

1. Test that the enpoint exists

2. Provided valid data, successfully create a user account.

3. Reject request if an account with the same Email exists

4. Reject A New User account if Email is not provided

5. Reject A New User account if Password is not provided

6. Reject A New User account if First Name is not provided

7. Reject A New User account if Last Name is not provided

#### Pivotal Tracker Story
__167592714__

# Signin API
`api/v1/auth/signin` 

##### Description
Allow a user to log into the way farer application

##### Endpoints
###### POST METHODS
`api/v1/auth/signin`

`Request: `
```javascript 
body: {
    email: String,
    password: String,
}
```
`Response: `

```javascript
{
    status: 'success',
    data: {
        id: Integer,
        email: String,
        first_name: String,
        last_name: String
    }
}
```

### Tests

###### COVERALLS COVERAGE REPORT
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-sign-user-in-167569860)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-sign-user-in-167569860)

###### TRAVIS CI 
[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-sign-user-in-167569860)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)


#### Tests covered:

1. Test that the endpoint exists

2. User must sign in successfully given correct credentials

3. User must not sign in if credentials are invalid

4. Should reject login with a missing Email

5. Should reject login with a missing Password

#### Pivotal Tracker Story
__167569860__