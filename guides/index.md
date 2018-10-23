---
layout: default
title:  "Language guide"
description: "Learn how to play with rookie"
micro_nav: true
page_nav:
    next:
        url: ../integrate_cpp
        content: C++ Integration
---

{% capture my_include %}{% include_relative hello_world.md %}{% endcapture %}
{{ my_include | markdownify }}

{% capture my_include %}{% include_relative class.md %}{% endcapture %}
{{ my_include | markdownify }}

{% capture my_include %}{% include_relative methods.md %}{% endcapture %}
{{ my_include | markdownify }}

{% capture my_include %}{% include_relative flows.md %}{% endcapture %}
{{ my_include | markdownify }}

{% capture my_include %}{% include_relative indexer.md %}{% endcapture %}
{{ my_include | markdownify }}

{% capture my_include %}{% include_relative types.md %}{% endcapture %}
{{ my_include | markdownify }}

{% capture my_include %}{% include_relative string_interploation.md %}{% endcapture %}
{{ my_include | markdownify }}