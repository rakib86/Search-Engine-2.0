(() => {
  "use strict";
  ({
    380: function () {
      var e,
        n =
          (this && this.__awaiter) ||
          function (e, n, t, o) {
            return new (t || (t = Promise))(function (i, u) {
              function a(e) {
                try {
                  d(o.next(e));
                } catch (e) {
                  u(e);
                }
              }
              function c(e) {
                try {
                  d(o.throw(e));
                } catch (e) {
                  u(e);
                }
              }
              function d(e) {
                var n;
                e.done
                  ? i(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(a, c);
              }
              d((o = o.apply(e, n || [])).next());
            });
          };
      document.addEventListener("DOMContentLoaded", () =>
        n(void 0, void 0, void 0, function* () {
          const {
            apiKey: e,
            resolution: n,
            numberOfImages: t,
          } = yield chrome.storage.sync.get({
            apiKey: "",
            resolution: "1024x1024",
            numberOfImages: 5,
          });
          (document.getElementById("api-key").value = e),
            (document.getElementById("resolution").value = n),
            (document.getElementById("n-images").value = t);
        })
      ),
        null === (e = document.getElementById("save")) ||
          void 0 === e ||
          e.addEventListener("click", () => {
            const e = document.getElementById("api-key").value,
              n = document.getElementById("resolution").value,
              t = document.getElementById("n-images").value;
            chrome.storage.sync.set(
              { apiKey: e, resolution: n, numberOfImages: t },
              () => {
                window.close();
              }
            );
          });
    },
  }[380]());
})();
