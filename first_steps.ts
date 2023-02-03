console.log("Welcom to Deno!");

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// 파일 읽기
const filenames 