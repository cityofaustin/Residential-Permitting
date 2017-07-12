---
title: Tiles Inventory
layout: default
sitemap: false
---
{% include setup-pages.html %}

<div class="container container-fluid page-layout">
  <div class="row start-xs">
    <div class="center-xs col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
      <h1 class="page-title">{{ page.title }}</h1>
      {% unless page.lead_markdown %}
        <div class="lead">{{ page.lead_markdown | markdownify }}</div>
      {% endunless %}
    </div>
  </div>
</div>

<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Project Tiles</h2>
    </div>
  </div>
  <div class="row center-xs">
    {% assign project_pages = site.projects | where: 'in_projects_menu', true | sort: "menu_sort_order" %}
    {% for project in project_pages limit: page.projects_section.limit_projects_to %}
      {% unless project.hide_project_from_homepage == true %}
        {% include tiles-projects.html tile=project %}
      {% endunless %}
    {% endfor %}
  </div>
</section>

<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Plan Tiles</h2>
    </div>
  </div>
  <div class="row center-xs">
  {% assign plans = site.diagrams | group_by: "project" | sort_by: "date" %}
  {% for project in plans limit:1 %}
    {% for plan in project.items %}
      {% include tiles-plans.html tile=plan %}
    {% endfor %}
  {% endfor %}
  </div>
</section>

<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Article Tiles</h2>
    </div>
  </div>
  <div class="row center-xs">
  {% for toolkitpage in toolkit_pages limit:3 %}
    {% include tiles-articles.html tile=toolkitpage %}
  {% endfor %}
  </div>
</section>



<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Resource Tiles (3-across)</h2>
    </div>
  </div>
  <div class="row center-xs">
  {% for resource in resource_pages limit:3 %}
    {% include tiles-resources.html tile=resource tile_width="4" %}
  {% endfor %}
  </div>
</section>



<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Resource Tiles (4-across)</h2>
    </div>
  </div>
  <div class="row center-xs">
  {% for resource in toolkit_pages limit:4 %}
    {% include tiles-resources.html tile=resource tile_width="3" %}
  {% endfor %}
  </div>
</section>


<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Resource Tiles (6-across)</h2>
    </div>
  </div>
  <div class="row center-xs">
  {% for resource in resource_pages limit:6 %}
    {% include tiles-resources.html tile=resource tile_width="2" %}
  {% endfor %}
  </div>
</section>


<section class="container container-fluid page-section">
  <div class="row center-xs">
    <div class="col-xs-10 col-sm-8 col-md-6">
      <h2>Small Tiles</h2>
    </div>
  </div>
  <div class="row center-xs">
    {% for resource in resource_pages limit:6 %}
      {% include tiles-small.html tile=resource %}
    {% endfor %}
  </div>
</section>
