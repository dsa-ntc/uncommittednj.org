# Vote Uncommitted Template

Use this template repository to quickly spin up a Vote Uncommitted campaign website for your state.

1. Use repo as a template from GitHub or download zip
2. Revise the content for your state; key files: `_config.yml`, `index.html`, and `faq.md`
3. Adjust styles in `css/styles.scss`
4. Swap the graphics in the `assets` folder
5. Ensure you add needed legal compliance disclaimers to the website due to campaign regulation; swap out national in footer for your chapter if incorporated

Built with [Jekyll](http://jekyllrb.com).

## Developing

0. Install a modern Ruby (2.7+)
1. Clone the repository
2. Install the dependencies - `bundle install`
3. Start up the Jekyll server - `bundle exec jekyll serve -w -D -l -o --livereload_port 8889`
4. Make changes

## Hosting & Deploying

Deploy to anywhere Jekyll sites or static sites can be hosted.

Netlify, GitHub Pages, AWS S3 all work well.

## Plugins

The site makes use of plugins that GitHub Pages supports with Jekyll.
See the `gems:` section in `_config.yml` for the full list.

- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) - easy
  SEO-goodness in the site
- jemoji - using emojis in the content :sun_with_face:
- jekyll-sitemap - generating a sitemap
- jekyll-feed - generating an Atom feed

## Template Code License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
