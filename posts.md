---
layout: base
title: Posts
---
# Posts
Links to all of my assignments can be found here.

## Tutorials

<ul class="TutorialList">
{% for tutorial in site.data.tutorials %}
  <li class="TutorialList-Item">
    <a href="{{site.baseurl}}/units/{{tutorial.link}}">{{tutorial.name}}</a>
  </li>
{% endfor %}
</ul>