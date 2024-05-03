const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService(); // convert the html to markdown
  // 1. convert markdown to html
  const convertedHtml = marked.parse(markdownContent);
  console.log("converted html ", convertedHtml);
  // 2 sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  console.log("sanitized html", sanitizedHtml);

  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log("sanitizedMarkdown", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
