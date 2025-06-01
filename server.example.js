// const server = http.createServer(async (req, res) => {
//   if (req.method === "GET") {
//     const content = await fs.readFile(path.join(basePath, "index.html")); //Получаем данные с файла html
//     res.writeHead(200, { "Content-type": "text/html" }); //Для того чтобы бразуер сразу понял с каким файлом он работает и не тратил ресурсы
//     res.end(content); //Записываем данные
//   } else if (req.method === "POST") {
//     const body = [];

//     req.on("data", (data) => {
//       body.push(Buffer.from(data));
//     });
//     //Записываем в базу данных
//     req.on("end", () => {
//       const title = body.toString().split("=")[1].replaceAll("+", " ");
//       addNote(title);

//       res.end(`title = ${title}`);
//     });
//   }
// });
