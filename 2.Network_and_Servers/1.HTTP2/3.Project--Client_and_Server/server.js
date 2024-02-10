import http2 from "http2";

let books = [];

const getBook = (stream, headers) => {
  let body = "";

  stream.on("data", function (chunk) {
    body += chunk;
  });

  stream.on("end", function () {
    body = JSON.parse(body);
    console.log(body);
  });

  books[body.title] = body.author;

  stream.respond({ ":status": 200 });

  stream.end(books[body.title]);
};

const postBook = (stream, headers) => {
  let body = "";

  stream.on("data", function (chunk) {
    body += chunk;
  });

  stream.on("end", function () {
    body = JSON.parse(body);
    books[body.title] = body.author;

    stream.respond({ ":status": 200 });
    stream.end("Book Added!");

    console.log(books);
  });
};

const notFoundHandler = (stream, headers) => {
  stream.respond({ ":status": 404 });
  stream.end("Path not found!");
};

const server = http2.createServer();

const router = (stream, headers) => {
  const path = headers[":path"];
  const method = headers[":method"];
  let handler;

  if (path === "/" && method === "POST") {
    handler = postBook;
  } else if (path === "/" && method === "PUT") {
    handler = getBook;
  } else {
    handler = notFoundHandler;
  }

  handler(stream, headers);
};

server.on("stream", router);
server.listen(8000);
