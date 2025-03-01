import "./md5.min.js";
console.log("任务开始啦");
self.onmessage = async function (e) {
  const { file, CHUNK_SIZE, start, end } = e.data;
//   const fileNum = Math.ceil(file.size / CHUNK_SIZE);
  const result = [];
//   console.log(fileNum);
  for (let i = start; i < end; i++) {
    const chunk = await getChunk(file, CHUNK_SIZE, i);
    result.push(chunk);
  }
  self.postMessage(result);
};
function getChunk(file, chunkSize, index) {
  return new Promise((resolve, reject) => {
    const start = index * chunkSize;
    const end = start + chunkSize;
    const chunkFile = file.slice(start, end);
    const reader = new FileReader();
    reader.readAsArrayBuffer(chunkFile);
    reader.onload = function (e) {
      const arrBuffer = e.target.result;
      const hash = SparkMD5.ArrayBuffer.hash(arrBuffer);
      resolve({
        start,
        end,
        chunkFile,
        hash,
        index,
      });
    };
  });
}
