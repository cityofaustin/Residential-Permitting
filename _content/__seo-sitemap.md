---
layout: empty
sitemap: false

---
<table>

  <tr>
    <th>File Location (Collections)</th>
    <th>Existing Page Title</th>
    <th>Page Description (if specified)</th>
  </tr>

  {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}
  {% for collection in collections %}
    {% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}
    {% for doc in docs %}
      <tr>
        <td>{{ doc.url | replace:'/index.html','/' | xml_escape }}</td>
        <td>{{ doc.title }}</td>
        <td>{{ doc.description }}</td>
      </tr>
    {% endfor %}
  {% endfor %}
  {% assign pages = site.html_pages | where_exp:'doc','doc.sitemap != false' | where_exp:'doc','doc.url != "/404.html"' %}
  {% for page in pages %}
    <tr>
      <td>{{ page.url | replace:'/index.html','/' | xml_escape }}</td>
      <td>{{ page.title }}</td>
      <td>{{ page.description }}</td>
    </tr>
  {% endfor %}



</table>
