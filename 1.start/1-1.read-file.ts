const filenames = Deno.args;

for (const filename of filenames) {
  const file = await Deno.open(filename);
  await file.readTable.pipeTo(Deno.stdout.writable);
}
