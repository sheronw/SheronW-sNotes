// Enable Dollar Sign for inline Latex
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'],
    processEscapes: true
  }
});
MathJax.Hub.Config({
  config: ["MMLorHTML.js"],
  jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
  extensions: ["MathMenu.js", "MathZoom.js"]
});
