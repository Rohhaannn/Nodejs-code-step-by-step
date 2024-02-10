const http = require('http');
const data = require('./data');

http.createServer((req,res)=>{
  res.writeHead(200,{'Conten-type':'application\json'});
  res.write(JSON.stringify(data));
  res.end();
}).listen(6500);

/* Interview Question

Q.  What is 2oo which has been passed in writeHead ?
=>  the number 201 represents the HTTP status code that is being sent in the response header. 

//===========================================================================================================================
HTTP status codes are three-digit codes that indicate the outcome of an HTTP request. They are grouped into five categories:

1xx Informational:
These codes indicate that the request is being processed and more information is needed before completion.
100 Continue: Client should proceed with request.
101 Switching Protocols: Server will switch protocols based on request header.
102 Processing: Server is still processing the request.
103 Early Hints: Server provides early hints about the final response.

2xx Success:
These codes indicate that the request was successful.
200 OK: The request was successfully completed.
201 Created: A new resource was successfully created.
202 Accepted: The request has been accepted for processing but not yet completed.
203 Non-Authoritative Information: The response information is from a secondary source.
204 No Content: The request was successful but there is no content to return.
205 Reset Content: The client should clear any previous request-specific data.
206 Partial Content: Only a portion of the resource was returned due to a range request.
207 Multi-Status: Multiple responses for multiple resources are provided.
208 Already Reported: The entity was already successfully reported.
226 IM Used: Server successfully negotiated a downgrade to the requested protocol.

3xx Redirection:
These codes indicate that the client needs to take further action to complete the request, usually by following a redirection.
300 Multiple Choices: Server can't distinguish between multiple possible resources.
301 Moved Permanently: The resource has been permanently moved to a new location.
302 Found: The resource was temporarily moved to a new location.
303 See Other: The response is available at another URI.
304 Not Modified: The requested resource hasn't changed since the last request.
307 Temporary Redirect: The resource should be retrieved from a new location, but future requests should go to the original location.
308 Permanent Redirect: Same as 301 but using the POST method.

4xx Client Error:
These codes indicate that the client sent an invalid request.
400 Bad Request: The request is invalid or cannot be understood.
401 Unauthorized: The request requires authentication.
402 Payment Required: Payment is required for the requested resource.
403 Forbidden: The client doesn't have access to the requested resource.
404 Not Found: The requested resource could not be found.
405 Method Not Allowed: The request method is not supported for the resource.
406 Not Acceptable: The requested resource format is not acceptable.
407 Proxy Authentication Required: Proxy authentication is required.
408 Request Timeout: The request timed out waiting for a response.
409 Conflict: The request conflicts with existing data.
410 Gone: The requested resource is no longer available.
411 Length Required: The request must include a Content-Length header.
412 Precondition Failed: A precondition set by the client failed.
413 Payload Too Large: The request payload is larger than allowed.
414 URI Too Long: The request URI is too long.
415 Unsupported Media Type: The media type of the request body is not supported.
416 Range Not Satisfiable: The requested range cannot be satisfied.
417 Expectation Failed: The expectation in the request header failed.
418 I'm a teapot: A humorous response to a coffee brewing request (RFC 2324).
421 Misdirected Request: Request sent to an incorrect server.
422 Unprocessable Entity: The request was well-formed but could not be processed.
423 Locked: The resource is locked.
424 Failed Dependency: A request is dependent on another request that failed.
425 Too Early: Server received request prematurely.
426 Upgrade Required: Client should upgrade to a newer version of the HTTP protocol.



*/