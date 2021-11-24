# Bus-Search-System

公車動態查詢系統。以 React 開發，應用 TDX API。

元件

- 頁首
  - 搜尋
- 列表
  defualt. 操作
  1. 車種
  2. 到站時間
- 地圖
  - 當地
  - 附近地標
  - 信息框
- 頁尾

目標

- 架站 ( 11/22 completed)

- 功能測試 & 實作

  - 輸入目的地: 顯示資料 → 選擇交通(規劃路線) → 設定起點(定位) → 顯示交通資訊
    input -> getData() -> button -> (input)/getGeo() -> showTraffic

  - 沒有目的地: 定位(設定起點) → 顯示周邊資訊 → 選擇 card → 顯示資訊 → 選擇交通(規劃路線) → 顯示交通資訊

    - 交通資訊
      地圖 : 路線 / 站點 / 狀態
      選擇站點(圖標): 車班 時間
      選擇車牌(select): 站點 時間

  - bonus\* 搜尋(比對 地址、地名、關鍵字 )、已上車

- 切版

函式庫:

- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- [axios](https://www.npmjs.com/package/axios)
- [google-map-react](https://www.npmjs.com/package/google-map-react)
- [react-router-dom] SPA 用路由
- [jsSHA](https://www.npmjs.com/package/jssha) tdx api 驗證用
- @material-ui/core, @material-ui/icons, @material-ui/lab - [Material-UI](https://mui.com/)

---

11.22
有鑑於第一次上傳 CRA 到 gh-pages 架站失敗，今天先嘗試處理架站的問題。

因為有看到別人用 React 上傳成功，所以自己猜測第一是路由的問題，然後剛好碰到 react-router-dom 改版(v6)，所以花了一些時間調整。

11.23
(V) google maps api

參考資料:

- [Create a React App with React Router Dom v6](https://dev.to/salehmubashar/react-router-dom-36a2)
- [How to Deploy a Routed React App to GitHub Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)

- [Build and Deploy a Google Maps Travel Companion Application | React.js](https://www.youtube.com/watch?v=UKdQjQX1Pko)
