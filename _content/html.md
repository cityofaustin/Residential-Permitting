---
title: Style Guide (work in progress)
---
## Introduction

This style guide for webuildthis.city is a work in progress based on the USWDS. All text is placeholder for now.

## Basic formatting

Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.

Paragraphs must be separated by a blank line. Basic formatting of *italics* and **bold** is supported. This *can be **nested** like* so.

## Lists

### Ordered list

1. Item 1
2. A second item
3. Number 3
4. Ⅳ

*Note: the fourth item uses the Unicode character for [Roman numeral four][2].*

### Unordered list

* An item
* Another item
* Yet another item
* And there's more...

## Paragraph modifiers

### Code block

    Code blocks are very useful for developers and other people who look at code or other things that are written in plain text. As you can see, it uses a fixed-width font.

You can also make `inline code` to add code into other things.

### Quote

> Here is a quote. What this is should be self explanatory. Quotes are automatically indented when they are used.

## Headings

There are six levels of headings. They correspond with the six levels of HTML headings. You've probably noticed them already in the page. Each level down uses one more hash character.

# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5
###### This is an H6

<p class="usa-font-lead">Lead paragraphs are larger.</p>

### Headings *can* also contain **formatting**

### They can even contain `inline code`

Of course, demonstrating what headings look like messes up the structure of the page.

I don't recommend using more than three or four levels of headings here, because, when you're smallest heading isn't too small, and you're largest heading isn't too big, and you want each size up to look noticeably larger and more important, there there are only so many sizes that you can use.

## URLs

URLs can be made in a handful of ways:

* A named link to [MarkItDown][3]. The easiest way to do these is to select what you want to make a link and hit `Ctrl+L`.
* Another named link to [MarkItDown](http://www.markitdown.net/)
* Sometimes you just want a URL like <http://www.markitdown.net/>.


<a href="javascript:void(0);">This</a> is a text link on a light background.

<a class="usa-color-text-visited" href="javascript:void(0);">This</a> is a visited link.

This is a link that goes to an <a class="usa-external_link" href="http://media.giphy.com/media/8sgNa77Dvj7tC/giphy.gif">external website</a>.

<div class="usa-background-dark">
  <a href="javascript:void(0);">This</a> is a text link on a dark background.
</div>



## Horizontal rule

A horizontal rule is a line that goes across the middle of the page.

---

It's sometimes handy for breaking things up.

## Images

![Placeholder image of Bill Murray](http://www.fillmurray.com/200/300)

## Finally

There's actually a lot more to Markdown than this. See the official [introduction][4] and [syntax][5] for more information. However, be aware that this is not using the official implementation, and this might work subtly differently in some of the little things.

---
# USWDS Defaults

The below will demonstrate the Fellows CSS, based on USWDS defaults:




## Palette

This is a simple, minimalist color palette. Shades of blue dominate, providing a neutral backdrop on which brighter shades, clean type treatment, and bright white content areas "pop" on the page.

<h4 class="usa-heading">Primary colors</h4>

<p>This palette’s primary colors are blue, gray, and white. Blue is commonly associated with trust, confidence, and sincerity; it is also used to represent calmness and responsibility.</p>

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
  <div class="usa-color-square usa-color-base usa-end-row">
    <div class="usa-color-inner-content">
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">base</p>
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

<div class="usa-grid-full usa-color-row">
  <div class="color-big">
    <div class="usa-color-short usa-color-gold">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">gold</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gold-light">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">gold-light</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gold-lighter">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">gold-lighter</p>
  </div>
  <div class="color-small">
    <div class="usa-color-short usa-color-gold-lightest usa-end-row">
    </div>
      <p class="usa-color-hex">#TODO</p>
      <p class="usa-color-name">gold-lightest</p>
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

### Buttons

#### Primary Buttons
<div class="button_wrapper">
  <button>Default</button>
  <button class="usa-button-active">Active</button>
  <button class="usa-button-hover">Hover</button>
</div>

#### Secondary Buttons
<div class="button_wrapper">
  <button class="usa-button-outline" type="button">Default</button>
  <button class="usa-button-outline usa-button-active">Active</button>
  <button class="usa-button-outline usa-button-hover">Hover</button>
</div>

#### Button Focus
<div class="button_wrapper">
  <button class="usa-button-focus">Default</button>
</div>

#### Disabled Button
<div class="button_wrapper">
  <button class="usa-button-disabled" disabled="">Default</button>
</div>

#### Big Button
<div class="button_wrapper">
  <button class="usa-button-big" type="button">Default</button>
</div>

### Labels

#### Small
<span class="usa-label">New</span>

#### Large
<span class="usa-label-big">New</span>

## Tables

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       |        This |     This     
| column     |      column |    column    
| will       |        will |     will     
| be         |          be |      be      
| left       |       right |    center    
| aligned    |     aligned |   aligned


## Alerts

<div class="usa-alert usa-alert-success">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Success Status</h3>
    <p class="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Warning Status</h3>
    <p class="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="usa-alert usa-alert-error" role="alert">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Error Status</h3>
    <p class="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="usa-alert usa-alert-info">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Information Status</h3>
    <p class="usa-alert-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="usa-alert usa-alert-info">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Information Status</h3>
    <p class="usa-alert-text">Multi line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui atione voluptatem sequi nesciunt. Neque porro quisquam est, qui doloremipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </div>
</div>

## Forms

<form class="usa-form-large">
    <fieldset>
      <legend>Mailing address</legend>
      <label for="mailing-address-1">Street address 1</label>
      <input id="mailing-address-1" name="mailing-address-1" type="text">

      <label for="mailing-address-2">Street address 2 <span class="usa-additional_text">(Optional)</span></label>
      <input id="mailing-address-2" name="mailing-address-2" type="text">

      <div>
        <div class="usa-input-grid usa-input-grid-medium">
          <label for="city">City</label>
          <input id="city" name="city" type="text">
        </div>

        <div class="usa-input-grid usa-input-grid-small">
          <label for="state">State</label>
          <select id="state" name="state">
            <option value=""></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
      </div>

      <label for="zip">ZIP</label>
      <!-- The example below includes the `data-politespace` attribute. This initializes Poltiespace to work with the zip code input. -->

    <div class="politespace-proxy active"><div class="politespace-proxy-val" style="font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 17px; line-height: 22.1px; font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Helvetica, Roboto, Arial, sans-serif; padding-left: 12.9px; padding-right: 12.9px; top: 14.4px; width: 120px;"></div><input class="usa-input-medium" id="zip" name="zip" type="text" pattern="[\d]{5}(-[\d]{4})?" data-grouplength="5,4" data-delimiter="-" data-politespace=""></div></fieldset>
  </form>

## Searchbar

#### Search big
<form class="usa-search usa-search-big">
  <div role="search">
    <label class="usa-sr-only" for="search-field-big">Search big</label>
    <input id="search-field-big" type="search" name="search">
    <button type="submit">
      <span class="usa-search-submit-text">Search</span>
    </button>
  </div>
</form>


#### Search medium
<form class="usa-search">
  <div role="search">
    <label class="usa-sr-only" for="search-field">Search medium</label>
    <input id="search-field" type="search" name="search">
    <button type="submit">
      <span class="usa-search-submit-text">Search</span>
    </button>
  </div>
</form>

#### Search small
<form class="usa-search usa-search-small">
  <div role="search">
    <label class="usa-sr-only" for="search-field-small">Search small</label>
    <input id="search-field-small" type="search" name="search">
    <button type="submit">
      <span class="usa-sr-only">Search</span>
    </button>
  </div>
</form>





  [1]: http://daringfireball.net/projects/markdown/
  [2]: http://www.fileformat.info/info/unicode/char/2163/index.htm
  [3]: http://www.markitdown.net/
  [4]: http://daringfireball.net/projects/markdown/basics
  [5]: http://daringfireball.net/projects/markdown/syntax
