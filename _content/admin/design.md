---
title: Design Style Guide (draft)
sitemap: false
excerpt: The design style guide is a library of the site's design components, including color palette, typography, and iconography. Our library builds off of the U.S. Web Design Standards.
tabs:
  - tab_title: Tab 1
    tab_content_markdown: "This is content in a tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  - tab_title: Tab 2
    tab_content_markdown: "This is content in a tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  - tab_title: Tab 3
    tab_content_markdown: "This is content in a tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."

---

## Introduction

The design style guide is a library of the site's design components, including color palette, typography, and iconography. Our library builds off of the [U.S. Web Design Standards](https://standards.usa.gov/).

---

## Typography
These are the main ways you can style text on the site.

# H1 looks like this
## H2 looks like this
### H3 looks like this
#### H4 looks like this
##### H5 looks like this
###### H6 looks like this

<p class="usa-font-lead">Lead paragraphs look like this</p>

Body text looks like this. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.

> ###### This is a sidebar title
> Sidebars are used to show definitions or brief explanations.


### Lists

#### Ordered list

1. Item
2. Item
3. Item

#### Unordered list

* Item
* Item
* Item

### Links

Link styles are automatically formatted based on what they are linked to and if they've been visited before.

* This is an [internal link](/home).
* This is an [external link](https://www.austintexas.gov).
* This is a [link to a PDF](http://d1qmdf3vop2l07.cloudfront.net/magnificent-jellyfish.cloudvent.net/compressed/4c4c8727759f49d099e5d6d591d5e02c.pdf).
* This is a <a class="usa-color-text-visited" href="javascript:void(0);">visited external link</a>.

---

## Icons
Icons are used on the site for visual interest and added clarity.

### Font Awesome icons
[Font Awesome](http://fontawesome.io/) is a free icon font and the source for most of our icons. These are the ones currently in use on the site.

{% include _icon.html icon='arrow-long-right' %}
{% include _icon.html icon='menu' %}
{% include _icon.html icon='camera' %}
{% include _icon.html icon='caret-down' %}
{% include _icon.html icon='check' %}
{% include _icon.html icon='clock' %}
{% include _icon.html icon='close' %}
{% include _icon.html icon='mail' %}
{% include _icon.html icon='external-link' %}
{% include _icon.html icon='file' %}
{% include _icon.html icon='list' %}
{% include _icon.html icon='map-marker' %}
{% include _icon.html icon='phone' %}
{% include _icon.html icon='search' %}

### Project icons
Icons for projects are custom and were made in Adobe Illustrator. They should be converted to outlines and exported as svgs. [View and edit the original files](/assets/img/for-guides/project-icons-source.ai). The icons have multiple shared attributes. They all:

* Are made of gray-dark (#0f0035) lines (no fills),
* Have a single-stroke weight (4 pt),
* Include a full-width underline bar,
* And have the same width for the main icon that sits above the underline bar.

![](/assets/img/for-guides/design-style-guide-icons.png)

---

## Palette

This is a clean and fresh color palette. Colors were specifically chosen to meet or exceed AA accessibility standards. To verify if your color combinations are meeting those standards, visit [WebAim's Color Contrast Checker](http://webaim.org/resources/contrastchecker/).

### Text and background colors

These colors are used largely for text and background blocks between large content areas.

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-gray-dark">
    </div>
      <p class="usa-color-hex">#0f0035</p>
      <p class="usa-color-name">gray-dark</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gray">
    </div>
      <p class="usa-color-hex">#474454</p>
      <p class="usa-color-name">gray</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gray-light">
    </div>
      <p class="usa-color-hex">#716c87</p>
      <p class="usa-color-name">gray-light</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gray-lighter">
    </div>
      <p class="usa-color-hex">#e7e6eB</p>
      <p class="usa-color-name">gray-lighter</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gray-lightest">
    </div>
      <p class="usa-color-hex">#f5f4f7</p>
      <p class="usa-color-name">gray-lightest</p>
  </div>
</div>

### Accent color

Permitting's primary accent color is "barton-light". Its vibrant green is meant to evoke freshness and growth. It's primarily used as the background for illustrations, outlines around section breakers, and as content dividers on tiles. Use sparingly.

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-barton">
    </div>
      <p class="usa-color-hex">#01875f</p>
      <p class="usa-color-name">barton</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-barton-dark">
    </div>
      <p class="usa-color-hex">#01694a</p>
      <p class="usa-color-name">barton-dark</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-barton-light">
    </div>
      <p class="usa-color-hex">#01eaa4</p>
      <p class="usa-color-name">barton-light</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-barton-lighter">
    </div>
      <p class="usa-color-hex">#99f7db</p>
      <p class="usa-color-name">barton-lighter</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-barton-lightest">
    </div>
      <p class="usa-color-hex">#e5fcf5</p>
      <p class="usa-color-name">barton-lightest</p>
  </div>
</div>

### Action color

Blue is meant to show action: links, buttons, and anything else that is clickable. Do not use it for anything that is not actionable.

<div class="usa-grid-full usa-color-row usa-primary-color-section">
  <div class="usa-color-square usa-color-primary">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#005eff</p>
      <p class="usa-color-name">primary</p>
    </div>
  </div>
  <div class="usa-color-square usa-color-primary-darker usa-mobile-end-row">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#0446cc</p>
      <p class="usa-color-name">primary-darker</p>
    </div>
  </div>
  <div class="usa-color-square usa-color-primary-darkest">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#082e9a</p>
      <p class="usa-color-name">primary-darkest</p>
    </div>
  </div>
</div>

---

## Components

### Buttons
Buttons can be used as more prominent calls to action than a link alone.

#### Primary buttons
These are used for main actions and should be used sparingly. Do not use two primary buttons side-by-side.
<div class="button_wrapper">
  <button>Default</button>
  <button class="usa-button-active">Active</button>
  <button class="usa-button-hover">Hover</button>
  <button class="usa-button-focus">Focus</button>
</div>

#### Secondary buttons
These are used for supplemental actions and can be used alone or paired with a primary button.
<div class="button_wrapper">
  <button class="usa-button-outline" type="button">Default</button>
  <button class="usa-button-outline usa-button-active">Active</button>
  <button class="usa-button-outline usa-button-hover">Hover</button>
  <button class="usa-button-outline usa-button-focus">Focus</button>
</div>

### Searchbar

<form class="usa-search usa-search-small">
  <div role="search">
    <label class="usa-sr-only" for="search-field-small">Search small</label>
    <input id="search-field-small" type="search" name="search">
    <button type="submit">
      <span class="usa-sr-only">Search</span>
    </button>
  </div>
</form>

### Horizontal rule

---

A horizontal rule is a line that goes across the middle of the page. We use horizontal lines above all h2 headers to give them more definition.

### Tabs

Tabs are used when there is a lot of content and it needs to be displayed in a consolidated way. These can only be used 1 per-page.

{% include tabs.html %}
