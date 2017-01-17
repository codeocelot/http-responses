# `http-responses`

    npm start

In a separate window

    wget localhost:3000/403

    --2017-01-16 22:45:26--  http://localhost:3000/403
    Resolving localhost... ::1, 127.0.0.1
    Connecting to localhost|::1|:3000... connected.
    HTTP request sent, awaiting response... 403 Forbidden
    2017-01-16 22:45:26 ERROR 403: Forbidden.

port can be provide using `PORT` environmental variable:

    PORT=1000 npm start
