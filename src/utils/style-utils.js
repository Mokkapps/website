import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  xs: "250px",
  sm: "450px",
  md: "768px",
  lg: "992px",
  xlg: "1200px",
  xxlg: "1440px"
});
