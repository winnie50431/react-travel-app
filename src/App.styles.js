import { createStyles } from "@material-ui/styles";

export const theme = createStyles({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#e57373",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    // secondary: {
    //   light: "#0066ff",
    //   main: "#0044ff",
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: "#ffcc00",
    // },
    // // Used by `getContrastText()` to maximize the contrast between
    // // the background and the text.
    // contrastThreshold: 3,
    // // 使用下面的函数用于将颜色的亮度在其调色板中
    // // 移动大约两个指数。
    // // 例如，从红色 500（Red 500）切换到 红色 300（Red 300）或 红色 700（Red 700）。
    // tonalOffset: 0.2,
  },
});
