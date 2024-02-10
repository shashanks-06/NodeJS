import http2 from "http2";

const server = http2.createServer();

server.on("error", (err) => {
  console.error(err);
});

server.on("stream", (stream, headers) => {
  stream.respond({ ":status": 200 }); // " : " this is done with reponses.
  //have to put colon : in front of the header component that we're working with
  stream.write("Hello world!");
  stream.end();
});

server.listen(8000);
