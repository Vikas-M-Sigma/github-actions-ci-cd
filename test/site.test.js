const test = require("node:test");
const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");

test("homepage has a title, heading, and workflow overview", async () => {
  const html = await readFile("index.html", "utf8");
  assert.match(html, /<title>Actions CI\/CD Demo<\/title>/);
  assert.match(html, /<h1>Build\. Check\. Ship\.<\/h1>/);
  assert.match(html, /GitHub Actions runs the checks/);
});

test("homepage references its stylesheet", async () => {
  const html = await readFile("index.html", "utf8");
  const css = await readFile("styles.css", "utf8");
  assert.match(html, /href="styles\.css"/);
  assert.match(css, /\.card\s*\{/);
});
