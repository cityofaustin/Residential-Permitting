---
title: Design Style Guide (draft)
sitemap: false

---

## Introduction

The design style guide is a library of the site's design components, including color palette, typography, and iconography. Our library builds off of the [U.S. Web Design Standards](https://standards.usa.gov/).

---

## Typography

## Basic formatting

Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.

> ###### I am an example blockquote title
> I am  example blockquote copy. Make sure to leave an empty space after me.

Paragraphs must be separated by a blank line. Basic formatting of *italics* and **bold** is supported. This *can be **nested** like* so.

## Lists

### Ordered list

1. Item
2. Item
3. Item

### Unordered list

* Item
* Item
* Item
* Item

## Paragraph modifiers

## Headings

There are six levels of headings. They correspond with the six levels of HTML headings. You've probably noticed them already in the page. Each level down uses one more hash character.

# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

<p class="usa-font-lead">This is a lead paragraph</p>

### Links

Link styles are automatically formatted based on what they are linked to and if they've been visited before.

* This is an example of an [internal link](/home).
* This is an example of an [external link](https://www.austintexas.gov).
* This is an example of a [link to a PDF](http://d1qmdf3vop2l07.cloudfront.net/magnificent-jellyfish.cloudvent.net/compressed/4c4c8727759f49d099e5d6d591d5e02c.pdf).
* This is a <a class="usa-color-text-visited" href="javascript:void(0);">visited link</a>.


## Horizontal rule

A horizontal rule is a line that goes across the middle of the page.

---

It's sometimes handy for breaking things up.

## Images

![Placeholder image of Bill Murray](http://www.fillmurray.com/200/300)


## Finally

There's actually a lot more to Markdown than this. See the official [introduction][4] and [syntax][5] for more information. However, be aware that this is not using the official implementation, and this might work subtly differently in some of the little things.

---


## Icons
The icons for projects are the only custom icons used on the site. All other icons were sourced from [Font Awesome, a free icon font](http://fontawesome.io/).

### Project icons


### Font Awesome icons
[want to include all icons]

---

## Palette

This is a clean and fresh color palette. Colors were specifically chosen to meet or exceed AA accessibility standards. To verify if your color combinations are meeting those standards, visit [WebAim's Color Contrast Checker](http://webaim.org/resources/contrastchecker/).

### Primary colors

This palette’s primary colors are blue, gray, and white. Blue is commonly associated with trust, confidence, and sincerity; it is also used to represent calmness and responsibility.

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

<div class="usa-grid-full usa-color-row usa-primary-color-section">
  <div class="usa-color-square usa-color-gray-dark">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">gray-dark</p>
    </div>
  </div>
  <div class="usa-color-square usa-color-gray-light usa-mobile-end-row">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">gray-light</p>
    </div>
  </div>
  <div class="usa-color-square usa-color-white">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">white</p>
    </div>
  </div>
</div>

<h4 class="usa-heading">Secondary colors</h4>

<p>These are accent colors to provide additional lightness and style to pages looking for a more modern flair. These colors should be used to highlight important features on a page, such as buttons, or for visual style elements, such as illustrations. They should be used sparingly and never draw the eye to more than one piece of information at a time.</p>

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-secondary">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">secondary</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-secondary-darkest">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">secondary-darkest</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-secondary-dark">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">secondary-dark</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-secondary-light">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">secondary-light</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-secondary-lightest">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">secondary-lightest</p>
  </div>
</div>

<h4 class="usa-heading">Background colors</h4>

<p>These colors are used largely for background blocks and large content areas. When alternating between tones, be sure to use enough contrast between adjacent colors.</p>

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

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-primary-darkest">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">primary-darkest</p>
  </div>
</div>

<h4 class="usa-heading">Tertiary colors</h4>

<p>These colors are used primarily for content-specific needs, such as alerts and illustrations. They should never overpower the primary colors.</p>

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

<h4 class="usa-heading">Special state colors</h4>

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-focus">
    </div>
    <p class="usa-color-hex">#5b97ff</p>
    <p class="usa-color-name">focus</p>
  </div>
</div>

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-visited">
    </div>
    <p class="usa-color-hex">#8800ff</p>
    <p class="usa-color-name">visited</p>
  </div>
</div>

---

## Buttons
Buttons can be used as more prominent calls to action than a link alone.

### Primary buttons
These are used for main actions and should be used sparingly. Do not use two primary buttons side-by-side.
<div class="button_wrapper">
  <button>Default</button>
  <button class="usa-button-active">Active</button>
  <button class="usa-button-hover">Hover</button>
  <button class="usa-button-focus">Focus</button>
</div>

### Secondary buttons
These are used for supplemental actions and can be used alone or paired with a primary button.
<div class="button_wrapper">
  <button class="usa-button-outline" type="button">Default</button>
  <button class="usa-button-outline usa-button-active">Active</button>
  <button class="usa-button-outline usa-button-hover">Hover</button>
  <button class="usa-button-outline usa-button-focus">Focus</button>
</div>

---

## Searchbar

<form class="usa-search usa-search-small">
  <div role="search">
    <label class="usa-sr-only" for="search-field-small">Search small</label>
    <input id="search-field-small" type="search" name="search">
    <button type="submit">
      <span class="usa-sr-only">Search</span>
    </button>
  </div>
</form>
