document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".c-slider");
  const prevButton = document.querySelector(".c-slider__prev");
  const nextButton = document.querySelector(".c-slider__next");
  let xTimer = 0;

  const render = (x = 0) => {
    if (slider.scrollLeft + x < 10) {
      prevButton.setAttribute("hidden", true);
    } else {
      prevButton.removeAttribute("hidden", true);
    }

    if (parseInt(slider.scrollLeft + x) >= slider.scrollWidth - slider.offsetWidth) {
      nextButton.setAttribute("hidden", true);
    } else {
      nextButton.removeAttribute("hidden", true);
    }

    slider.scrollLeft += x;
  };

  render();

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    render(-220);
  });
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    render(220);
  });
});

(function () {
  function a() {
    return "undefined" != typeof window && window.location && window.location.host
      ? window.location.host.replace(":", "-")
      : "unknown";
  }
  function b() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
      const b = 0 | (16 * parseFloat(`0.${(Math.random() + "").replace("0.", "")}${new Date().getTime()}`)),
        c = "x" === a ? b : 8 | (3 & b);
      return c.toString(16);
    });
  }
  function c() {
    var a, b, c, d;
    return null !==
      (a =
        null === (b = navigator) ||
        void 0 === b ||
        null === (c = b.serviceWorker) ||
        void 0 === c ||
        null === (d = c.controller) ||
        void 0 === d
          ? void 0
          : d.scriptURL) && void 0 !== a
      ? a
      : "none";
  }
  window._bufferedErrors = [];
  const d = window.onerror;
  (window.onerror = (a, b, c, e, f) => {
    d && d.call(window, a, b, c, e, f), window._bufferedErrors && window._bufferedErrors.push([a, b, c, e, f]);
  }),
    window.addEventListener("load", () => {});
})();
// FID init code.
(function (a, b) {
  function c(a) {
    l.push(a), f();
  }
  function d(a, b) {
    i || ((i = b), (j = a), (k = new Date()), f());
  }
  function e() {
    i && ((i = null), (j = null), (k = null));
  }
  function f() {
    0 <= j &&
      j < k - n &&
      (l.forEach((a) => {
        a(j, i);
      }),
      (l = []));
  }
  function g(c, e) {
    function f() {
      d(c, e), h();
    }
    function g() {
      h();
    }
    function h() {
      b(o, f, m), b(p, g, m);
    }
    a(o, f, m), a(p, g, m);
  }
  function h(a) {
    if (a.cancelable) {
      const b = 1e12 < a.timeStamp,
        c = b ? new Date() : performance.now(),
        e = c - a.timeStamp;
      "pointerdown" === a.type ? g(e, a) : d(e, a);
    }
  }
  let i,
    j,
    k,
    l = [];
  const m = { passive: !0, capture: !0 },
    n = new Date(),
    o = "pointerup",
    p = "pointercancel";
  (function (a) {
    ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach((b) => {
      a(b, h, m);
    });
  })(a),
    (self.perfMetrics = self.perfMetrics || {}),
    (self.perfMetrics.onFirstInputDelay = c),
    (self.perfMetrics.clearFirstInputDelay = e);
})(addEventListener, removeEventListener);
// TTFMP Polyfill code.
(function (a) {
  function b() {
    const c = document.getElementById(i);
    (h = 0),
      c
        ? g === c
          ? (e = a(b))
          : "IMG" !== c.tagName || c.complete
          ? a(function () {
              const a = performance.now();
              (g = c), f ? f(a) : (h = a), performance.measure && performance.measure("TTFMP");
            })
          : (e = a(b))
        : (e = a(b));
  }
  function c(a) {
    h ? a(h) : (f = a);
  }
  function d() {
    cancelAnimationFrame(e);
  }
  let e, f, g, h;
  const i = "FMP-target";
  (e = a(b)),
    (self.perfMetrics = self.perfMetrics || {}),
    (self.perfMetrics.onFirstMeaningfulPaint = c),
    (self.perfMetrics.startSearchingForFirstMeaningfulPaint = function () {
      (g = document.getElementById(i)), b();
    }),
    (self.perfMetrics.stopSearchingForFirstMeaningfulPaint = d);
})(requestAnimationFrame);

// TTFCP Polyfill code.
(function (a) {
  function b() {
    return (
      !!document.body &&
      null !==
        document
          .createNodeIterator(
            document.body,
            NodeFilter.SHOW_TEXT,
            function (a) {
              return (
                !!a &&
                /[^\s]/.test(a.nodeValue) &&
                "SCRIPT" !== a.parentNode.tagName &&
                "STYLE" !== a.parentNode.tagName &&
                0 < a.parentNode.offsetHeight
              );
            },
            !1
          )
          .nextNode()
    );
  }
  function c() {
    return null !== document.querySelector("input[placeholder]");
  }
  function d() {
    return b() || c()
      ? void a(function () {
          const a = performance.now();
          f ? f(a) : (g = a), performance.measure && performance.measure("TTFCP");
        })
      : void a(d);
  }
  function e(a) {
    g ? a(g) : (f = a);
  }
  let f, g;
  a(d), (self.perfMetrics = self.perfMetrics || {}), (self.perfMetrics.onFirstContentfulPaint = e);
})(requestAnimationFrame);

// LCP Polyfill code.
(function (a, b, c, d) {
  function e(a, b, c) {
    if (b > n || !document.body.contains(m)) {
      var d;
      (n = b), (o = c), (m = a), null === (d = t) || void 0 === d ? void 0 : d(o, m, n);
    }
  }
  function f(a, b) {
    if ("IMG" !== a.tagName) b();
    else {
      const c = () => d(b);
      a.complete ? c() : a.addEventListener("load", c, { once: !0 });
    }
  }
  function g(a) {
    var b;
    null === (b = r) || void 0 === b ? void 0 : b.observe(a);
  }
  function h() {
    if (u) {
      !q &&
        document.body &&
        (q = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, (a) =>
          a.hasAttribute("elementtiming") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        ));
      for (let b; (b = null === (a = q) || void 0 === a ? void 0 : a.nextNode()); ) {
        var a;
        g(b);
      }
      d(h);
    }
  }
  function i(c) {
    (n = 0),
      (o = 0),
      (r = new IntersectionObserver((a) => {
        a.filter((a) => a.isIntersecting).forEach((a) => {
          const b = a.target,
            { width: c, height: d } = a.intersectionRect;
          f(b, () => {
            e(b, c * d, a.time);
          });
        });
      })),
      p && c
        ? ((s = new a((a) => {
            a.getEntries().forEach((a) => {
              const { element: b, renderTime: c, intersectionRect: d } = a;
              if (b) {
                const { width: a, height: f } = d;
                e(b, a * f, c);
              }
            });
          })),
          s.observe({ type: "element", buffered: c }))
        : u && d(h),
      v.forEach((a) => {
        b(a, j, w);
      });
  }
  function j(a) {
    const b = a.target;
    ("scroll" === a.type &&
      ("expand-trigger" === (null === b || void 0 === b ? void 0 : b.className) ||
        "contract-trigger" === (null === b || void 0 === b ? void 0 : b.className))) ||
      k();
  }
  function k() {
    var a, b;
    null === (a = s) || void 0 === a ? void 0 : a.disconnect(),
      null === (b = r) || void 0 === b ? void 0 : b.disconnect(),
      v.forEach((a) => {
        c(a, j, w);
      }),
      (u = !1);
  }
  function l(a) {
    0 === o ? (t = a) : a(o, m, n);
  }
  let m,
    n = 0,
    o = 0;
  const p = "undefined" != typeof a && a.supportedEntryTypes && a.supportedEntryTypes.includes("element");
  let q,
    r,
    s,
    t,
    u = !p;
  const v = ["click", "mousedown", "keydown", "touchstart", "pointerdown", "scroll"],
    w = { passive: !0, capture: !0 };
  i(!0),
    (self.perfMetrics = self.perfMetrics || {}),
    (self.perfMetrics.onLargestContentfulPaint = l),
    (self.perfMetrics.startSearchingForLargestContentfulPaint = i.bind(null, !1)),
    (self.perfMetrics.stopSearchingForLargestContentfulPaint = k),
    (self.perfMetrics.stopPollingForLargestContentfulPaint = () => {
      u = !1;
    }),
    (self.perfMetrics.registerLCPCandidate = g);
})(PerformanceObserver, addEventListener, removeEventListener, requestAnimationFrame);
