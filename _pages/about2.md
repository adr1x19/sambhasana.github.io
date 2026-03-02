---
layout: page
title: about2
permalink:
nav: true
nav_order: 1
---

<div class="row">
    <div class="col-sm-8">
        <h1>Sambhāṣaṇa Research Group</h1>
        <p>
            Headed by <strong>Hrishikesh Terdalkar</strong> 
            <a href="https://github.com/hrishikeshrt" target="_blank"><i class="fab fa-github"></i></a>
        </p>

        <p>
            Our primary mission is to develop robust language technologies for <strong>low-resource languages</strong>, 
            with a specialized focus on <strong>Sanskrit</strong> and other Indian languages. We are committed to 
            leveraging an interdisciplinary approach to pioneer innovations, placing a strong emphasis on creating 
            tangible, <strong>real-world impact</strong> through our tools and datasets.
        </p>

        <p>Beyond our core linguistic focus, our group explores broader challenges in:</p>
        <ul>
            <li>Databases & Software Engineering</li>
            <li>Information Retrieval</li>
            <li>Artificial Intelligence (AI)</li>
            <li>Human-Computer Interaction (HCI)</li>
            <li>Data Mining</li>
        </ul>

        <div class="mt-4">
            <img src="https://placehold.co/600x300" alt="Lab Group Photo" class="img-fluid rounded z-depth-1">
            <p class="caption">The group at the university campus.</p>
        </div>
        
        <h3>Selected Publications</h3>
        <p>See our <a href="/publications/">full list of publications</a>.</p>
        </div>

    <div class="col-sm-4">
        <h3 style="color: var(--global-theme-color);">News</h3>
        <div class="news-sidebar">
            {% if site.news != blank -%}
                {%- assign news = site.news | reverse -%}
                {% for item in news limit:6 %}
                    <div class="news-item mb-3">
                        <div style="font-size: 0.9rem; color: #888;">
                            {{ item.date | date: "%d. %B %Y" }}
                        </div>
                        <div style="font-weight: 500;">
                           {% if item.inline -%}
                              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
                           {%- else -%}
                              <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
                           {%- endif %}
                        </div>
                    </div>
                {% endfor %}
            {%- else -%}
                <p>No news so far...</p>
            {%- endif %}
        </div>
        
        <div class="mt-5 p-3 rounded" style="background-color: #f8f9fa; border: 1px solid #ddd;">
            <h5>Join the Team!</h5>
            <p class="small">We are looking for passionate PhD and Master students.</p>
            <a href="/join/" class="btn btn-sm btn-outline-primary">More Info</a>
        </div>
    </div>
</div>