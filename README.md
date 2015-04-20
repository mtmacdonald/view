View
----

**View** is a JavaScript library for creating dynamic views in web applications. It uses a virtual-DOM for better
performance.

Inspiration
-----------

Built on the Matt Esch [virtual-DOM](https://github.com/Matt-Esch/virtual-dom) implementation.

This library is loosely inspired by some ideas in other virtual-DOM frameworks: 
[React](https://facebook.github.io/react), [Mithril](http://lhorie.github.io/mithril), 
[Mercury](https://github.com/Raynos/mercury), and [Riot](https://muut.com/riotjs).

Objectives
----------

The goal of this library is to solve **only** the view layer (creating dynamic HTML for web applications).

- virtual-DOM views
- no templates, just JavaScript
- events (onclick, onchange etc)
- reusable, nested components
- independent modules
- easy to integrate legacy components

Why virtual-DOM?
----------------

- recreate the entire virtual view on every state change (simple)
- virtual-DOM engine then calculates the diff, and the patches the real DOM with the minimum required changes (fast, 
efficient)

No templates
------------

Templates are just not needed. JavaScript is already ideal for conditionals, loops, expressions, and other logic needed
to construct a dynamic DOM. Adding another redundant syntax layer and template engine is not necessary. Also, plain 
JavaScript views make static analysis and automated testing easier.

This library uses plain JavaScript and the 
[virtual-hyperscript](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript) syntax.

No two-way data binding
-----------------------

No opinionated architecture
---------------------------

This library only provides a virtual-DOM view layer. It does not make assumptions about application design, 
nor presume a single-page architecture, nor ship with components (e.g. routers) that belong in independent packages.

Getting started
---------------

See the [example](https://github.com/mtmacdonald/view/blob/master/docs/example.js).
