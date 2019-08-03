# wayfarer-server
Server application for way farer

###### Coveralls Test Coverage
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server)


# Bookings

## Description

Users are able to create new bookings & view their bookings. Admins are able to view all bookings.

#### Endpoint

``

###### GET METHODS

View all bookings. Only accessible by admins.

`Request "api/v1/bookings": `
```javascript
    header('admin', [admin ID | Integer])
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

View all bookings by user of `:id`. Users can view only their bookings and admins can view specific user bookings.

`Request "api/v1/bookings/:id":`
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

Create a new booking.

`Request "api/v1/bookings": `
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

Delete a booking.

`Request "api/v1/bookings":`
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

[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-bookings-167618264)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server?branch=ft-bookings-167618264)

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

#### Description

###### Endpoint

`api/v1/trips/`

Creating a new trip.

Method: __POST__

Data: __{ origin: String - required, destination: String - required, fare: Float - required, seating_capacity: Integer - Required, trip_date: Date - Required, bus_license_number: String - Required }__


Viewing all trips

Method: __GET__

Data: __null__

Cancelling a trip

Method: __PATCH__

Data: __null__

Url Parameter: __<:id>__ - ID of the trip being cancelled


## Tests

###### Coveralls Test Coverage
[![Coverage Status](https://coveralls.io/repos/github/Cheza-Dzabala/wayfarer-server/badge.svg?branch=ft-create-trips-feature-167594397)](https://coveralls.io/github/Cheza-Dzabala/wayfarer-server)

###### Travis CI Builds
[![Build Status](https://travis-ci.org/Cheza-Dzabala/wayfarer-server.svg?branch=ft-create-trips-feature-167594397)](https://travis-ci.org/Cheza-Dzabala/wayfarer-server)



#Signin API
`api/v1/auth/signin` Method: POST



##### Tests Covered

1. Test if Endpoint exists

2. Endpoint should Reject all requests that do not have a token in the header

    Response:

    - header status: 401 - Unauthorized
    - status: 'unsuccessful'
    - data: { message: 'No token present in the request header' }

3. Create a trip if data is valid

    Request Header:
    { token: String }

    Response:

    - header status: 201 - Created
    - status: 'successful'
    - data: { trip-object }

4. Display all trips

    Request Header: {}
    Response:


    - header status: 200 - OK
    - status: 'successful'
    - data: [array - of - trips];

5. Cancel a trip

    Request Header:
    { token: String }

    Response:

    - header status: 200 - OK
    - status: 'successful'
    - data: { message: 'trip successfully cancelled' };


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
