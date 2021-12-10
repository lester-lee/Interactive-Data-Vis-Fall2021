---
layout: base
title: Project Portfolio
---
# Project Portfolio
![preview of the deployed project]({{site.baseurl}}/lib/assets/preview.png)

The visualization is deployed [here](https://www.lester-lee.com/student-standards-tracker).

## Abstract
This exploratory visualization allows educators to quickly see and evaluate student masteries of standards within a course. This tool can help plan and prepare for upcoming courses; less time can be spent on topics that students have shown proficiency in, and there can be more of an emphasis on standards that students have not yet met. The cumulative course information provides a quick overview of the overall performance of a class, while the individual student view allows educators to see student performance at a more granular level.

## Data
The data for this visualization is organized into `csv` files, as follows:
```
data
|-- courses.json
`-- courses
    |-- courseA
    |   |-- roster.csv
    |   |-- standards.csv
    |   `-- students
    |       |-- studentA.csv
    |       `-- ... more students
    `-- ... more courses
```

`courses.json` contains metadata for each course; it includes information such as the course title, rosters, domains, and standards, and is used to built the aggregate visualizations.

Within `courses` is a directory for each course listed in `courses.json`; these directories contain information that is specific to the course, including a roster, a primary list of standards, and a directory of individual student information.

## Process
sketches
early iterations
screenshots

## Reflection
Your reflection should be roughly 1,000-1,500 words, and reflect on any/all of  the following:

    Outline the major design decisions you made for your visuals, explain how you got there and why you picked them.
    If you were to develop your own design process, how would it differ or mirror the design process taught in class?
    What was the most helpful thing you learned from your project? From your tutorials?
    How did the critiques affect your project and how you think about it?
    How did your final project differ from the prospectus you outlined?
    What were your major challenges? How would you mitigate them with your next project?
    If you had more time and resources, what would you add/remove/change about your project?


## Links to Artifacts
  - [Prospectus]({{site.baseurl}}/project/prospectus)
  - [Sketches]({{site.baseurl}}/project/sketches)
  - [Plan]({{site.baseurl}}/project/plan)
  - [Project](https://www.lester-lee.com/student-standards-tracker)