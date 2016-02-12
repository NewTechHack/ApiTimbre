module.exports = {
    "Ok": 200, //Success!
    "Created": 201, //Created
    "NotModified": 304, //There was no new data to return.
    "BadRequest": 400, //The request was invalid or cannot be otherwise served. The requests without authentication are considered invalid and will yield this response.
    "Unauthorized": 401, //Authentication credentials were missing or incorrect.
    "Forbidden": 403, //The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.
    "NotFound": 404, //The URI requested is invalid or the resource requested, such as a user, does not exists. Also returned when the requested format is not supported by the requested method.
    "NotAcceptable": 406, //Returned when an invalid format is specified in the request.
    "Gone": 410, //This resource is gone. Used to indicate that an API endpoint has been turned off. For example: "The Pushtech Metrics REST API v1 will soon stop functioning. Please migrate to API v1.1."
    "UnprocessableEntity": 422, //Returned when something is unable to be processed.
    "ToManyRequests": 429, //Rate limit
    "InternalServerError": 500, //Something is broken.
    "BadGateway": 502, //Pushtech metrics is down or being upgraded.
    "ServiceUnavailable": 503, //Pusthech metrics servers are up, but overloaded with requests. Try again later.
    "GatewayTimeout": 504 //Pushtech metrics servers are up, but the request couldn't be serviced due to some failure within our stack. Try again later.
}
