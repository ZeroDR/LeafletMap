L.TileLayer.ArcServerTileLoad = L.TileLayer.extend({
  getTileUrl: function (tilePoint) {
    let oo = '00000000'
    let xx = tilePoint.x.toString(16)
    xx = 'C' + oo.substring(0, 8 - xx.length) + xx
    let yy = tilePoint.y.toString(16)
    yy = 'R' + oo.substring(0, 8 - yy.length) + yy

    if (tilePoint.z.toString().length === 1) {
      tilePoint.z = '0' + tilePoint.z.toString()
    }
    return L.Util.template(this._url, L.extend({
      s: this._getSubdomain(tilePoint),
      z: 'L' + tilePoint.z,
      x: xx,
      y: yy
    }, this.options))
  }
})
L.tileLayer.arcServerTileLoad = function (url, options) {
  return new L.TileLayer.ArcServerTileLoad(url, options)
}