import { ref,createApp } from 'vue'
import L from 'leaflet'

import PopupModel from '@/components/popup/PopupModel.vue'

export default class HandleMap{
	constructor(opts){
		this._load(opts.id)
	}
	_load(el){
		!this.map && (this.map = L.map(el,{controlCorner:false,attributionControl:false}).setView([39.718923, 116.839424], 6));

	    // 天地图key
	    const mapKey =  '37d883978b54bc12f58d30492062d574'
	    // 添加底图瓦片层（以天地图为例）
	    let vecLayer = L.tileLayer(`http://t{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=${mapKey}`, {
	      maxZoom: 19,
	      // 子域名
	      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
	    }).addTo(this.map);

	    let cvaLayer = L.tileLayer(`http://t{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=${mapKey}`, {
	      maxZoom: 19,
	      // 子域名
	      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
	    }).addTo(this.map);
	    this.map.zoomControl.setPosition('bottomright')
	}
	loadMarker(source,type){
	  const fl = L.layerGroup();
	  const mIcon = this.getIcon(type);
	  source.forEach(item=>{
	    if(item.latitude && item.longitude){
	      let marker = L.marker([item.latitude,item.longitude],{attrs:{...item},icon:mIcon});
	      marker.addTo(fl);
	      marker.on('click',(e)=>{
	      	console.log(123)
	        const p = createVuePopup(e.latlng,e.target.options.attrs)
	        p.openOn(this.map)
	      })
	    }
	  })
	  fl.addTo(this.map)
	}
	getIcon(type){
	  let s = '';
	  let size = [32,38];
	  switch(type){
	    case 1:
	      s = 'fire';// 火点预警
	      size = [32,38]
	      break;
	  }
	  return L.icon({
	      iconUrl: `../images/map/${s}.png`,
	      iconSize: size,
	      iconAnchor: [0, 0],
	      popupAnchor: [16, 0],
	  });
	}
}

let popupInstance = undefined
const createVuePopup = (latlng,attrs) => {
    // 创建容器
    const container = document.createElement('div')

    // 创建 Vue 实例
    const PopupComponent = createApp(PopupModel,{
      dataSource:{...attrs},
      onPopupCallback:(value)=>{
        console.log(value);
      }
    })
    PopupComponent.mount(container)

    // 创建 Leaflet 弹窗
    popupInstance = L.popup({
      maxWidth:900,
      offset:L.point(16,0)
    }).setLatLng(latlng)
      .setContent(container)
      // .openOn(map);
    popupInstance.on('remove',()=>{
    	container.remove()
    	PopupComponent.unmount();
    })
    return popupInstance;
}