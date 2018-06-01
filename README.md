# Austin Residential Permitting Site
---

## Jekyll
- [Jekyll Documentation](https://jekyllrb.com/docs/home/)


## Editing
This site is set up to be editable on [CloudCannon](https://app.cloudcannon.com/16628/editor#/site/33135/browser). Ask a member of the Fellows (@sknep) to be added. We pay per seat, so you may need to swap with someone.
- [CloudCannon Documentation](https://docs.cloudcannon.com/)

## Search
This site uses [Algolia](https://www.algolia.com/doc/) and the [AlgoliaSearch Jekyll Plugin](https://github.com/algolia/algoliasearch-jekyll) to index and retrieve search results. The search index is rebuilt and pushed via a cron job every Friday at 12:30 by [TravisCI](https://travis-ci.org/cityofaustin/Residential-Permitting) rather than with every push to the master branch, as each text edit via CloudCannon would generate a new crawl and we'd blow through our operations/month limit.

- [Algolia Documentation](https://www.algolia.com/doc/)
- [TravisCI Documentation for Algolia Search](https://github.com/algolia/algoliasearch-jekyll#github-pages)

## USWDS

This is based on a boilerplate for using the [U.S. Web Design Standards](https://standards.usa.gov/) to build static websites.

- [USWDS Documentation](https://standards.usa.gov/getting-started/)

The U.S. Web Design Standards’ entire feature set is included. You can find code snippets to copy and paste in:

```
assets/uswds/html
```

### Included
The following tools have been included to make front-end development easier. Read through their documentation.
- [Bourbon](http://bourbon.io)
- [Bourbon Neat](http://neat.bourbon.io/)

## CSS
Using Sass to write your CSS is highly recommended. Your main CSS file is `assets/stylesheets/application.scss` Do not write any CSS selectors on this page. Instead, link to them with `@import` statements.

The U.S. Web Design Standards CSS files are located in `assets/uswds/stylesheets`. You may use any Sass variables from the U.S. Web Design Standards in your project SCSS. To get familiar with the variables, you can read them in `assets/uswds/stylesheets/core/_variables.scss`

The `assets/stylesheets/fellows` CSS is intended to be a set of consistent, reusable styles (a layer on top of the USWDS) to use across all of our projects, with the `assets/stylesheets/permitting` folder containing the CSS specific to this site. This is still a work in progress.

## Javascript
jQuery and the full USWDS JS file has been included. This can probably be improved a bit since both of these libraries will add significant weight and performance hits to your page. All JavaScript are imported and concatenated into a single file, `assets/javascripts/application.js`. Imports are handled with Jekyll’s `include_relative` method. Place your scripts in `assets/javascripts/scripts` and link to them in `assets/javascripts/application.js`.

## Running with Docker

If you have Docker installed, you can run the project via the terminal:

```
$ git clone git@github.com:cityofaustin/Residential-Permitting.git
$ cd Residential-Permitting
$ ./scripts/serve-local.sh
```

## How to run
Using the command line, the following commands should be able to get you up and running. You will need to clone this repo, remove `origin` as a remote branch, and run on local host.

```
$ git clone git@github.com:cityofaustin/Residential-Permitting.git
$ cd Residential-Permitting
$ git remote remove origin
$ bundle install
$ bundle exec jekyll serve
```
When the application is running, you can view the site in the browser at http://localhost:4000
