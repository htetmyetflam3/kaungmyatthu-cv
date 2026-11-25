/**
 * KMT child — custom.js
 *
 * 1. Builds the sticky CV section nav from .cv-section[id]
 * 2. Scrollspy: highlights the section in view
 * 3. Print / Save PDF button
 */
(function () {
  'use strict';

  // ------------------------------------------------------------------
  // Print button
  // ------------------------------------------------------------------
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.js-print');
    if (btn) {
      e.preventDefault();
      window.print();
    }
  });

  // ------------------------------------------------------------------
  // CV sticky nav: build links from sections, then scrollspy
  // ------------------------------------------------------------------
  var nav = document.getElementById('kmt-cv-nav');
  var sections = Array.prototype.slice.call(
    document.querySelectorAll('.kmt-col-wrap .cv-section[id], .kmt-col-wrap section[id]')
  );

  if (nav && sections.length) {
    var frag = document.createDocumentFragment();

    sections.forEach(function (sec) {
      var heading = sec.querySelector('.sec-head h2, h2, h3');
      var label = heading ? heading.textContent.trim() : sec.id;

      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'nav-link';
      a.href = '#' + sec.id;
      a.textContent = label;
      li.appendChild(a);
      frag.appendChild(li);
    });

    nav.appendChild(frag);

    // Hide the navbar entirely if there were no real sections
    var bar = nav.closest('.kmt-cv-navbar');
    if (bar && nav.children.length === 0) {
      bar.style.display = 'none';
    }

    // --------------------------------------------------------------
    // Scrollspy
    // --------------------------------------------------------------
    var links = Array.prototype.slice.call(nav.querySelectorAll('.nav-link'));

    function setActive(id) {
      links.forEach(function (l) {
        var on = l.getAttribute('href') === '#' + id;
        l.classList.toggle('active', on);
        if (on && l.scrollIntoView) {
          l.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
        }
      });
    }

    if ('IntersectionObserver' in window) {
      var visible = new Map();
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              visible.set(entry.target.id, entry.intersectionRatio);
            } else {
              visible.delete(entry.target.id);
            }
          });
          // Pick the topmost visible section
          var best = null;
          var bestTop = Infinity;
          visible.forEach(function (_ratio, id) {
            var el = document.getElementById(id);
            if (!el) return;
            var top = el.getBoundingClientRect().top;
            if (top < bestTop) {
              bestTop = top;
              best = id;
            }
          });
          if (best) setActive(best);
        },
        { rootMargin: '-140px 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
      );
      sections.forEach(function (s) { io.observe(s); });
    }

    // First paint
    if (sections[0]) setActive(sections[0].id);
  }
})();
