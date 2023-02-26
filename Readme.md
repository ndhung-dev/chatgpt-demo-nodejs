Require docker
1. cd to root project
2. open terminal run:
 - Note: set api key value after API_KEY=
 - Curl or open link set question: msg=Hôm nay là thứ mấy?
```sh
docker build -t nguyendinhhung/chatgpt-demo-nodejs .
docker run -p 5000:5000 -e API_KEY= -d nguyendinhhung/chatgpt-demo-nodejs
curl -i http://localhost:5000/?msg=h%C3%B4m%20nay%20l%C3%A0%20th%E1%BB%A9%20m%E1%BA%A5y
```