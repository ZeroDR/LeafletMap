L.BlurCanvas = L.Canvas
        .extend({
            options : {
				shadowBlur: 15,
				shadowColor: "#39F5E5",
                zIndex:1
            },

            initialize : function(options) {
                options = L.Util.setOptions(this, options);
                //add
                L.Util.stamp(this);
                this._layers = this._layers || {};
            },
            _draw: function () {
                this._container.style.zIndex = this.options.zIndex || 1;
                this._ctx.shadowBlur = this.options.shadowBlur;
                this._ctx.shadowColor = this.options.shadowColor;
                L.Canvas.prototype._draw.call(this);
            }


        });
