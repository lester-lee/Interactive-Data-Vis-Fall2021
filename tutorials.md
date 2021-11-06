---
layout: base
title: Tutorials
---
# Tutorials
My work for the tutorial assignments can be accessed via the links below:

<ul class="TutorialList">
{% for tutorial in site.data.tutorials %}
  <li class="TutorialList-Item">
    <a href="{{site.baseurl}}/units/{{tutorial.link}}">{{tutorial.name}}</a>
  </li>
{% endfor %}
</ul>