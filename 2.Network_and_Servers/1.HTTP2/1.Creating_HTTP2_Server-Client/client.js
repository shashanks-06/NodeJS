import http2 from "http2";

const session = http2.connect("http://localhost:8000");

session.on("error", (err) => {
  console.error(err);
});

const req = session.request({ ":path": "/" }); // slash "/" means to access the root path
req.end();

req.on("response", (headers) => {
  console.log(headers);
});

req.setEncoding("utf8"); // when data comes back from the server, it will be formatted in bits

req.on("data", (chunk) => {
  console.log(chunk);
});
