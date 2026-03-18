---
title: Home
description: "The personal writings and expressions of Grayfox, otherwise known as you too and everyone else. It is a loving and silly place."
---
<div class="marquee-wrapper">
    <div class="marquee-move">
        <span id="marquee-content" class="pixel-accent"></span>
    </div>
</div>

I am a software engineer and metaphysician with around half a year of professional experience in defence and space. I am driven by the conviction that technology should never be a cold, disembodied force, but something deeply human --- shaped by ethics, society, and the primordial questions of being.

My academic career spans many an area:

<img
  id="foxy"
  class="custom-hover-target"
  src="/images/eris-tv.webp"
  alt="My wife Eris pictured on a CRT"
  width="65%"
  onmouseenter='this.t = setTimeout(() => {
       document.body.style.cursor = `url(/images/cursors/ceres-fauna-cursor.png) 0 0, auto`;
       document.addEventListener("mouseover", e => {
         const s = window.getComputedStyle(e.target).cursor;
         const tag = e.target.tagName.toLowerCase();
         const isText = s === `text` || [`p`, `h2`, `h4`, `span`, `code`, `q`, `cite`, `li` ].includes(tag);
         if (isText) {
           e.target.style.cursor = `url(/images/cursors/ceres-fauna-cursor-texty.png) 0 0, text`;
         } else if (s === `pointer`) {
           e.target.style.cursor = `url(/images/cursors/ceres-fauna-cursor-clicky.png) 0 0, pointer`;
         }
       });
     }, 3000)' 
     onmouseleave='clearTimeout(this.t)'>

#### Systems & Infrastructure
* Systems Architecture
* Networking
* Embedded Development
* Cloud Computing and DevOps
* Cybersecurity

#### Applications & Design
* Full-Stack Development
* Data Science
* Computer Vision
* UX/UI design

#### Humanities & Method
* Agile methodologies
* Sociology and Criminology
* Catholic Theology & Scriptural Studies

I am most skilled in C, C++, Python, and JavaScript/TypeScript. I work primarily with React and Svelte, and I am most at home in GNU/Linux and other \*NIX systems such as OpenBSD and FreeBSD. Recently, I have begun experimenting with Plan (9) Front. While I work effectively in web development, my deepest interests lie in embedded and systems programming.

My passion lies at the meeting-place of systems, people, and the Good: how technology shapes our being, and how we, in turn, shape it.

<img src="/images/partywizard.gif">


<center>
<pre class="featured-quote">
<code>
<q>To God belong the east and the west:
so whichever way you turn,
<b>there</b> is the face of God!</q>
<cite>Qur'an 2:115</cite>
</code></pre>
</center>


---
