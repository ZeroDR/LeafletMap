L.LabelTextCollision = L.Canvas
        .extend({
            options : {
                /**
                 * Collision detection
                 */
                collisionFlg : true
            },

            initialize : function(options) {
                options = L.Util.setOptions(this, options);
                //add
                L.Util.stamp(this);
                this._layers = this._layers || {};
            },

            /* _handleMouseHover : function(e, point) {
                var id, layer;

                for (id in this._drawnLayers) {
                    layer = this._drawnLayers[id];
                    if (layer.options.interactive
                            && layer._containsPoint(point)) {
                        L.DomUtil.addClass(this._containerText,
                                'leaflet-interactive'); // change cursor
                        this._fireEvent([ layer ], e, 'mouseover');
                        this._hoveredLayer = layer;
                    }
                }

                if (this._hoveredLayer) {
                    this._fireEvent([ this._hoveredLayer ], e);
                }
            },

            _handleMouseOut : function(e, point) {
                var layer = this._hoveredLayer;
                if (layer
                        && (e.type === 'mouseout' || !layer
                                ._containsPoint(point))) {
                    // if we're leaving the layer, fire mouseout
                    L.DomUtil.removeClass(this._containerText,
                            'leaflet-interactive');
                    this._fireEvent([ layer ], e, 'mouseout');
                    this._hoveredLayer = null;
                }
            }, */

            _updateTransform : function(center, zoom) {

                L.Canvas.prototype._updateTransform.call(this, center, zoom);

                var scale = this._map.getZoomScale(zoom, this._zoom), position = L.DomUtil
                        .getPosition(this._container), viewHalf = this._map
                        .getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map
                        .project(this._center, zoom), destCenterPoint = this._map
                        .project(center, zoom), centerOffset = destCenterPoint
                        .subtract(currentCenterPoint),

                topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(
                        viewHalf).subtract(centerOffset);

                if (L.Browser.any3d) {
                    L.DomUtil.setTransform(this._containerText, topLeftOffset,
                            scale);
                } else {
                    L.DomUtil.setPosition(this._containerText, topLeftOffset);
                }
            },
            _initContainer : function(options) {
                L.Canvas.prototype._initContainer.call(this);

                this._containerText = document.createElement('canvas');
                //禁用鼠标事件
                this._containerText.style.pointerEvents = 'none';
                /* L.DomEvent.on(this._containerText, 'mousemove',
                        L.Util.throttle(this._onMouseMove, 32, this), this).on(
                        this._containerText,
                        'click dblclick mousedown mouseup contextmenu',
                        this._onClick, this).on(this._containerText,
                        'mouseout', this._handleMouseOut, this); */

                this._ctxLabel = this._containerText.getContext('2d');

                L.DomUtil.addClass(this._containerText, 'leaflet-zoom-animated');
                this.getPane().appendChild(this._containerText);

            },
            _update : function() {
                // textList
                this._textList = [];
                this.index_i=0;
                L.Renderer.prototype._update.call(this);
                var b = this._bounds, container = this._containerText, size = b
                        .getSize(), m = L.Browser.retina ? 2 : 1;

                L.DomUtil.setPosition(container, b.min);

                // set canvas size (also clearing it); use double size on retina
                container.width = m * size.x;
                container.height = m * size.y;
                container.style.width = size.x + 'px';
                container.style.height = size.y + 'px';

                // display text on the whole surface
                container.style.zIndex = '4';
                this._container.style.zIndex = '3';

                if (L.Browser.retina) {
                    this._ctxLabel.scale(2, 2);
                }

                // translate so we use the same path coordinates after canvas
                // element moves
                this._ctxLabel.translate(-b.min.x, -b.min.y);
                L.Canvas.prototype._update.call(this);

            },

            _updatePoly : function(layer, closed) {
                L.Canvas.prototype._updatePoly.call(this, layer, closed);
				this._text(this._ctxLabel, layer);
            },

            _updateCircle : function(layer) {
                L.Canvas.prototype._updateCircle.call(this, layer);
				this._text(this._ctxLabel, layer);
            },
            /* _updatePaths: function () {
                if (this._postponeUpdatePaths) { return; }

                this._redrawBounds = null;
                this._redraw();
            }, */
            /* 
            如何使用（Usage）
            1.创建label pane
            map.createPane("labelPane");
            map.getPane('labelPane').style.zIndex = 450;  //450，>默认的overlayPane的400，<tooltipPane的600，popupPane的700
            
            2.创建label renderer

            const labelRenderer = new L.Label({ pane: "labelPane" });
            labelRenderer.addTo(this.map);
            
            3.添加标注（批量）
            features.forEach( feature => {                       //geojson features
                text: feature.properties[field],              //标注内容,field 字段名称
                position: {                 //标注坐标
                    lat: feature.geometry.coordinates[1],            //点要素，面和线要素可求得中心点后添加，注意经纬度先后顺序
                    lng: feature.geometry.coordinates[0]
                },
                font : {                     //标注字体
                    size: 12,
                    color: "#000000",
                    family: "YaHei",
                    bold: 'bold'
                },
                background: {                  //标注背景颜色及padding
                    visible: false,
                    color: "#000000",
                    padding: 5
                },
                border: {                       //标注边框颜色及宽度
                    visible: false,
                    color: "#000000",
                    width: 5
                },
                zoom: {                         //标注的显示级别
                    min: 12,
                    max: 18
                }
            }) */
            _text_new : function(ctx, layer) {
                if (layer.options && layer.options.text != undefined) {
                    layer.options.drawn = false;                 //记录标注是否已绘制，后面重点讲解
                    if (!this._bounds || (layer._pxBounds && layer._pxBounds.intersects(this._bounds))) {     //非常重要：只绘制落在当前视图的layer
                        const zoom = this._map.getZoom();                                          
                        const min = ((layer.options.textZoom || {}).min || 1);
                        const max = ((layer.options.textZoom || {}).max || 18);
                        if (zoom >= min && zoom <= max) {                                                     //根据label的zoom设置以及当前map视图的zoom级别，来判断是否绘制标注
                            this._ctx.save();
                            this._ctx.globalAlpha = 1;
                            this._ctx.font = ((layer.options.font || {}).size || 12) + 'px ' + ((layer.options.font || {}).family || 'YaHei') +  ' ' + ((layer.options.font || {}).bold || 'Bold');
                            layer.options.point = layer._point;                                                 //记录标注坐标，以及标注的宽度和高度，以便在判断是否标注叠盖时，进行intersect判断
                            layer.options.width = this._ctx.measureText(layer.options.text).width + ((layer.options.background || {}).padding || 5) * 2;
                            layer.options.height = ((layer.options.font || {}).size || 12)  + ((layer.options.background || {}).padding || 5) * 2;
                            if (this.options.collisionFlg) {                                                     //当需要处理标注叠盖时
                                //当前标注的bounds
                                const bounds = L.bounds(L.point(layer.options.point.x, layer.options.point.y), L.point(layer.options.width + layer.options.point.x, layer.options.height + layer.options.point.y));
                                //const object = this._labels.filter(options => options.drawn).map( options => L.bounds(L.point(options.point.x, options.point.y), L.point(options.width + options.point.x, options.height + options.point.y)))
                                //上方注释与本句的最大区别，在于效率（运行效率！！！），当数据量较大时，filter过滤的效率无法接受！！！故通过_drawn数组来记录已绘制的label
                                const object = this._textList.map( (label) => L.bounds(L.point(label.point.x, label.point.y), L.point(label.width + label.point.x, label.height + label.point.y)))
                                    .find( item => item.intersects(bounds) );
                                if (object) {      //当存在intersect的label时，跳出不绘制
                                    this._ctx.restore();
                                    return;
                                }
                            }
                            //绘制边框
                            if ((layer.options.border || {}).visible) {
                                this._ctx.lineJoin = 'bevel';
                                this._ctx.lineWidth = ((layer.options.border || {}).width || 5);
                                this._ctx.strokeStyle = ((layer.options.border || {}).color || 'rgba(0,0,0,0)');
                                this._ctx.strokeRect(layer._point.x - ((layer.options.background || {}).padding || 5), layer._point.y - ((layer.options.background || {}).padding || 5) - 2, layer.options.width, layer.options.height);
                            }
                            //绘制背景
                            if ((layer.options.background || {}).visible) {
                                this._ctx.fillStyle = ((layer.options.background || {}).color || 'rgba(0,0,0,0)');
                                this._ctx.fillRect(layer._point.x - ((layer.options.background || {}).padding || 5), layer._point.y - ((layer.options.background || {}).padding || 5) - 2, layer.options.width, layer.options.height);
                            }
                            this._ctx.textBaseline = 'top';
                            this._ctx.fillStyle = ((layer.options.font || {}).color || 'rgba(0,0,0,1)');
                            //绘制文本
                            this._ctx.fillText(layer.options.text, layer._point.x, layer._point.y);
                            this._textList.push(layer.options);   //记录当前已绘制的标注
                            layer.options.drawn = true;
                            this._ctx.restore();
                        }
                    }
                }
            },
            _text : function(ctx, layer) {
                if (layer.options.text != undefined) {
                    if (!this._bounds || (layer._pxBounds && layer._pxBounds.intersects(this._bounds))) {  
                        const zoom = this._map.getZoom();           
                                                  
                        const min = ((layer.options.textZoom || {}).min || 1);
                        const max = ((layer.options.textZoom || {}).max || 18);
                        
                        if (zoom >= min && zoom <= max) {   
                            
                            ctx.globalAlpha = 1;
                            var p = layer._point;
                            var textPoint;
                            if (p == undefined) {
                                // polygon or polyline
                                if (layer._parts.length == 0
                                        || layer._parts[0].length == 0) {
                                    return;
                                }
                                // p = this._getCenter(layer._parts[0]);
                                if(layer.options.textType == "polygon"){
                                    p = {
                                        x:layer._pxBounds.min.x+((layer._pxBounds.max.x-layer._pxBounds.min.x)/2),
                                        y:layer._pxBounds.min.y+((layer._pxBounds.max.y-layer._pxBounds.min.y)/2),
                                    }
                                }else{
                                    p = this._getCenter(layer._parts[0]);
                                }
                              
                            }
                            // label bounds offset
                            var offsetX = -(ctx.measureText(layer.options.text).width/2);
                            var offsetY = 0;
                            if(layer.options.textOffsetY){
                                offsetY = layer.options.textOffsetY
                            }
                            /**
                             * TODO setting for custom font
                             */
                            ctx.lineWidth = 1.5;
                            if(layer.options.textFont  == undefined){
                                ctx.font = "bold 15px 黑体";
                            }else{
                                ctx.font = layer.options.textFont
                                
                            }
                            
        
                            // Collision detection
                            var textWidth = (ctx.measureText(layer.options.text).width)
                                    + p.x;// + offsetX;
        
                            var textHeight = p.y + offsetY + 20;
        
                            var bounds = L.bounds(
                                    L.point(p.x + offsetX, p.y + offsetY), L.point(
                                            textWidth, textHeight));
        
                            if (this.options.collisionFlg) {
                                this._textList.map(b=>b.intersects(bounds))
                                if(this._textList.find(bo=>bo.intersects(bounds))){
                                    return;
                                };
                                /* for ( var index in this._textList) {
                                    var pointBounds = this._textList[index];
                                    if (pointBounds.intersects(bounds)) {
                                        return;
                                    }
                                } */
                            }
                            this._textList.push(bounds);
                            if (layer.options.outline){
                                ctx.strokeStyle = layer.options.outline.color; //线描边颜色
                                ctx.lineWidth = layer.options.outline.width; //线描边宽度
                                ctx.strokeText(layer.options.text, p.x + offsetX, p.y + offsetY);
                            }
        
                            if (layer.options.textColor == undefined) {
                                ctx.fillStyle = "blue";
                            } else {
                                ctx.fillStyle = layer.options.textColor;
                            }
                        
                            ctx.fillText(layer.options.text, p.x + offsetX, p.y
                                    + offsetY); 
                                    this.index_i++;
                                    // console.log(this.index_i,layer.options.text)
                        }
                    }
                   
                }
            },

            _getCenter : function(points) {

                var i, halfDist, segDist, dist, p1, p2, ratio, len = points.length;

                if (!len) {
                    return null;
                }

                // polyline centroid algorithm; only uses the first ring if
                // there are multiple

                for (i = 0, halfDist = 0; i < len - 1; i++) {
                    halfDist += points[i].distanceTo(points[i + 1]) / 2;
                }

                // The line is so small in the current view that all points are
                // on the same pixel.
                if (halfDist === 0) {
                    return points[0];
                }

                for (i = 0, dist = 0; i < len - 1; i++) {
                    p1 = points[i];
                    p2 = points[i + 1];
                    segDist = p1.distanceTo(p2);
                    dist += segDist;

                    if (dist > halfDist) {
                        ratio = (dist - halfDist) / segDist;
                        var resutl = [ p2.x - ratio * (p2.x - p1.x),
                                p2.y - ratio * (p2.y - p1.y) ];

                        return L.point(resutl[0], resutl[1]);
                    }
                }
            },

        });
