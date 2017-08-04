---
title: Admin
layout: default
lead_markdown: ''
summary:
permalink: /residential/admin/
redirect_from: /admin
in_admin_pages: true
sitemap: false
---
{% assign admin_pages = site.content | where: "in_admin_pages", true | sort: "menu_sort_order" %}

<div class="container container-fluid page-layout">
  <div class="row center-xs">
    <div class="col-xs-12 col-sm-10 col-md-8">
      <h1 class="page-title">{{ page.title }}</h1>
      <div class="lead">{{ page.lead_markdown | markdownify }}</div>
    </div>
  </div>
</div>
<section class="container container-fluid page-section">
  <div class="row center-xs">
  {% for resource in admin_pages limit:4 %}
    {% include tiles-articles.html tile=resource tile_width="3" %}
  {% endfor %}
  </div>
</section>
