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
			// const tencentSatelliteUrl = 'https://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=4&version=301&key=d84d6d83e0e51e481e50454ccbe8986b';
      // const tencentSatelliteLayer = L.tileLayer(tencentSatelliteUrl, {
      //     maxZoom: 18, // 设置最大缩放级别
      //     subdomains: ['1', '2', '3', '4'], // 子域名列表，用于分担服务器压力
      // }).addTo(this.map);
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
	  return fl;
	}
	remove(layer){
		this.map.removeLayer(layer)
	}
	getIcon(type){
	  let s = '';
	  let size = [32,32];
	  switch(type){
	    case 1:
	      s = '01龟裂';// 火点预警
	      size = [32,32]
	      break;
		case 2:
			s = '02块状裂缝';// 火点预警
			size = [32,32]
			break;
		case 3:
			s = '03横向裂缝';// 火点预警
			size = [32,32]
			break;
		case 4:
			s = '04纵向裂缝';// 火点预警
			size = [32,32]
			break;
		case 5:
			s = '05沉陷';// 火点预警
			size = [32,32]
			break;
		case 6:
			s = '06车辙';// 火点预警
			size = [32,32]
			break;
		case 7:
			s = '07坑槽';// 火点预警
			size = [32,32]
			break;
		case 8:
			s = '08波浪拥包';// 火点预警
			size = [32,32]
			break;
		case 9:
			s = '09松散';// 火点预警
			size = [32,32]
			break;
		case 10:
			s = '10泛油';// 火点预警
			size = [32,32]
			break;
		case 11:
			s = '11块状修补';// 火点预警
			size = [32,32]
			break;
		case 12:
			s = '12条状修补';// 火点预警
			size = [32,32]
			break;
		case 13:
			s = '13破碎板';// 火点预警
			size = [32,32]
			break;
		case 14:
			s = '14露骨';// 火点预警
			size = [32,32]
			break;
		case 15:
			s = '15板角断裂';// 火点预警
			size = [32,32]
			break;
		case 16:
			s = '16错台';// 火点预警
			size = [32,32]
			break;
		case 17:
			s = '17边角剥落';// 火点预警
			size = [32,32]
			break;
		case 18:
			s = '18唧泥';// 火点预警
			size = [32,32]
			break;
		case 19:
			s = '19接缝料损坏';// 火点预警
			size = [32,32]
			break;
		case 20:
			s = '20坑洞';// 火点预警
			size = [32,32]
			break;
	  }
	  return L.icon({
	      iconUrl: `../images/map/${s}.png`,
	      iconSize: size,
	      iconAnchor: [0, 0],
	      popupAnchor: [0, 0],
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
      offset:L.point(16,16)
    }).setLatLng(latlng)
      .setContent(container)
      // .openOn(map);
    popupInstance.on('remove',()=>{
    	container.remove()
    	PopupComponent.unmount();
    })
    return popupInstance;
}