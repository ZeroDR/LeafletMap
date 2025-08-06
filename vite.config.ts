import { defineConfig,UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import PostCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true
      }
    },
    postcss:{
      plugins:[
        PostCssPxToRem({
          rootValue:192,
          propList:['*']
        }),{
          postcssPlugin:'internal:charset-removal',
          AtRule:{
            charset:(atRule)=>{
              if(atRule.name === 'charset'){
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
  server:{
    port:8089, // 端口号
    https:false, //是否开启https
    host: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.98:3000', // 目标服务器地址
        changeOrigin: true,
        rewrite: (pathStr) => pathStr.replace('/api', '')
      },
    }
  },
})
