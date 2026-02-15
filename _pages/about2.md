---
layout: page
title: home_2
permalink: /about2/
nav: true
nav_order: 1
---

# Welcome to Sambhasana Lab

Here is a general introduction to the lab's mission without the personal profile picture. 

## Latest News

<div class="news">
  {% if site.news != blank -%}
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
      {%- assign news = site.news | reverse -%}
      {% if site.news_limit %}
        {% assign news_limit = site.news_limit %}
      {% else %}
        {% assign news_limit = news_limit %}
      {% endif %}
      {% for item in news limit: news_limit %}
        <tr>
          <th scope="row">{{ item.date | date: "%b %-d, %Y" }}</th>
          <td>
            {% if item.inline -%}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {%- else -%}
              <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {%- endif %}
          </td>
        </tr>
      {% endfor %}
      </table>
    </div>
  {%- else -%}
    <p>No news so far...</p>
  {%- endif %}
</div>