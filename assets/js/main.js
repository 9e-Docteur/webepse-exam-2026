(function (d) {
  var config = {
    kitId: "inb4yvs",
    scriptTimeout: 3000,
    async: true,
  },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className =
        h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) { }
  };
  s.parentNode.insertBefore(tk, s);
})(document);


(function () {
  const menu = document.getElementById("menu");
  const panel = document.querySelector(".mobile-menu");
  const burger = document.querySelector('nav ul label[for="menu"]');
  if (!menu || !panel) return;


  document.addEventListener("click", function (e) {
    if (!menu.checked) return;
    if (e.target === menu) return;
    if (e.target.closest && e.target.closest('label[for="menu"]')) return;
    if (panel.contains(e.target)) return;
    menu.checked = false;
  });

  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.checked = false;
    });
  });
})();