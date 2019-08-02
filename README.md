# wayfarer-server
Server application for way farer

#Added Travis CI
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


##### Tests Covered

1. Test if Endpoint exists

2. Endpoint should Reject all requests that do not have a token in the header
    ---
    Response
    ---
    - header status: 401 - Unauthorized
    - status: 'unsuccessful'
    - data: { message: 'No token present in the request header' }

3. Create a trip if data is valid
    ---
    Request Header
    ---
    { token: String }
    ---
    Response
    ---
    - header status: 201 - Created
    - status: 'successful'
    - data: { trip-object }

4. Display all trips
    ---
    Request Header
    ---
    ---
    Response
    ---
    - header status: 200 - OK
    - status: 'successful'
    - data: [array - of - trips];

5. Cancel a trip
    ---
    Request Header
    ---
    { token: String }
    ---
    Response
    ---
    - header status: 200 - OK
    - status: 'successful'
    - data: { message: 'trip successfully cancelled' };