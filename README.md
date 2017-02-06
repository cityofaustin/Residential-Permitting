## About

This is the new website of the Austin permitting resource tool, currently under active development. The project is being led by a team in the City's [Design, Technology, and Innovation Fellows program][dti].

We're using [sprints], and you're welcome to check out [our Trello board][trello].

[dti]: http://cityofaustin.github.io/innovation-fellows/
[sprints]: https://en.wikipedia.org/wiki/Scrum_(software_development)
[trello]: https://trello.com/b/0xJnolPW/we-build-this-city-active-sprint

## Architecture

Much of this is to be determined; we're using [Jekyll][] as the static site generator and are investigating [GatherContent][] to use as the content editor.

[medium]: https://medium.com/city-of-austin-design-technology-innovation/how-were-thinking-about-content-management-for-city-government-88f563497096
[GatherContent]: https://gathercontent.com
[jekyll]: https://jekyllrb.com

## Getting Started

1. Clone the repo:

        $ git clone https://github.com/cityofaustin/webuildthis.city.git

2. Install deps (requires npm version 3.x; repeat when the Gemfile or package.json changes):

        $ bundle install

3. Serve the Jekyll site(s):

    `$ foreman start acc`, `$ foreman start pec`, or just `$ foreman start` for both.

[direnv]: http://direnv.net

## Contributing

Refer to the [Developer Guide][], particularly the Git workflow.

[Developer Guide]: http://pages.austintexas.io/guides/developer-guide/

## Credits

* Our prototyping wouldn't be nearly as solid without the [U.S. Web Design Standards][uswds] developed by [18F][] :heart:

[uswds]: https://standards.usa.gov
[18f]: https://github.com/18f/web-design-standards

