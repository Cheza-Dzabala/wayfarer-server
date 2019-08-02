# wayfarer-server
Server application for way farer

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

