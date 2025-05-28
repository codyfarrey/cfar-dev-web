import markdownit from 'markdown-it';

const md = markdownit()

console.log("Parsing content...")
const result = md.render("# this is a test\n---\n### \n```java\n\tSystem.out.println\n(\"with some java code\")\n```");
console.log("result: " + result)



