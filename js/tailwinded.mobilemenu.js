!function(){var t={4051:function(t){"use strict";t.exports=Drupal},5311:function(t){"use strict";t.exports=jQuery}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}!function(t,e,n,s,i){"use strict";e.behaviors.tailwindedMobilemenu={attach:function(e,n){t(i("tailwindedMobilemenu",".bottom-nav-menu-btn",e)).each((function(){var t=this;this.addEventListener("click",(function(e){e.preventDefault();var n=s.querySelector("#offcanvas");n.classList.contains("is-open")?(n.classList.remove("is-open"),t.classList.remove("is-open")):(n.classList.add("is-open"),t.classList.add("is-open"))}))}))}}}(n(5311),n(4051),window,document,once)}();