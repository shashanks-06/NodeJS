import http2 from "http2";

const session = http2.connect("http://localhost:8000");

session.on("error", (err) => {
  console.error(err);
});

const req = session.request({ ":path": "/", ":method": "POST" });
req.write(
  JSON.stringify({ title: "Frankestein", author: "Mary Shelley " }),
  "utf8"
);
req.end();

req.on("response", (headers) => {
  console.log(headers);
});

req.setEncoding("utf8");

req.on("data", (data) => {
  console.log(data);
});
