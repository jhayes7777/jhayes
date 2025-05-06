import {
  d as a,
  o as t,
  L as e,
  c as i,
  a as o,
  p as s,
  b as n,
  e as d,
  _ as c,
} from "./index-4159e47b.js";
const l = [
    ((a) => (s("data-v-2affe4ac"), (a = a()), n(), a))(() =>
      d("div", { id: "map" }, null, -1)
    ),
  ],
  r = c(
    a({
      __name: "addDataAttributeToTheMarker",
      setup(a) {
        let s = { minZoom: 5, maxZoom: 18 };
        return (
          t(() => {
            const a = e.map("map", s).setView([30.55227, 117.07424], 13);
            e
              .tileLayer(
                "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=892057581b022e942b5b2e21f892e571",
                { attribution: "stamen" }
              )
              .addTo(a),
              (e.DataDivIcon = e.DivIcon.extend({
                createIcon: function (a) {
                  let t = e.DivIcon.prototype.createIcon.call(this, a);
                  if (this.options.data)
                    for (let e in this.options.data)
                      t.dataset[e] = this.options.data[e];
                  return t;
                },
              })),
              (e.dataDivIcon = (a) => new e.DataDivIcon(a));
            const t = e.dataDivIcon({
              className: "leaflet-data-marker",
              html: '<svg viewBox="0 0 149 178"><path fill="red" stroke="#FFF" stroke-width="10" stroke-miterlimit="10" d="M126 23l-6-6A69 69 0 0 0 74 1a69 69 0 0 0-51 22A70 70 0 0 0 1 74c0 21 7 38 22 52l43 47c6 6 11 6 16 0l48-51c12-13 18-29 18-48 0-20-8-37-22-51z"/></svg>',
              iconSize: [30, 20],
              data: {
                firstExample: "First example",
                secondExample: "Second example",
              },
            });
            e.marker([30.55227, 117.07424], { icon: t })
              .addTo(a)
              .bindPopup("Center");
          }),
          (a, t) => (o(), i("div", null, l))
        );
      },
    }),
    [["__scopeId", "data-v-2affe4ac"]]
  );
export { r as default };
