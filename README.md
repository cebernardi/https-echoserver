# https-echoserver

A docker image which responds to both HTTP and self-signed HTTPS requests.

# Running

```
docker run -d -p 8080:8080 -p 8443:8443 -p 8081:8081 continuousarchitect/https-echoserver

curl http://localhost:8080/hello
# {"httpVersion":"1.1","method":"GET","url":"/hello","headers":{"host":"localhost:8080","user-agent":"curl/7.49.1","accept":"*/*"}}

curl http://localhost:8081/hello
# {"httpVersion":"1.1","method":"GET","url":"/hello","headers":{"host":"localhost:8080","user-agent":"curl/7.49.1","accept":"*/*"}}

curl -k https://localhost:8443/world
# {"httpVersion":"1.1","method":"GET","url":"/world","headers":{"host":"localhost:8443","user-agent":"curl/7.49.1","accept":"*/*"}}
```
