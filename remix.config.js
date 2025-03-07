/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/*.test.{ts,tsx}'],
  serverDependenciesToBundle: [
    /^micromark.*/,
    'decode-named-character-reference',
    'character-entities',
    /^mdx-bundler.*/,
  ],
}
