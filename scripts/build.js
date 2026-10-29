const { cp, mkdir, rm } = require("node:fs/promises");

async function build() {
  await rm("dist", { recursive: true, force: true });
  await mkdir("dist", { recursive: true });
  await cp("index.html", "dist/index.html");
  await cp("styles.css", "dist/styles.css");
  console.log("Built the static website into dist/.");
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
