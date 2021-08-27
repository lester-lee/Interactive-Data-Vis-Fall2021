---
layout: base
title: Notes
---
# Notes
Links to my notes for each class session can be found here.

<ul class="NoteList">
{% for post in site.posts %}
  <li>
  <a href="{{ post.url | prepend: site.baseurl }}"> {{post.date | date: "%Y %B %d"}} | {{ post.title }} </a>
  </li>
{% endfor %}
</ul>