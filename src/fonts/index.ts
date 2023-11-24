import { Poppins } from "next/font/google";

export const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const fontFamily = `${poppinsFont.style.fontFamily}, 'Roboto', 'Helvetica', 'Arial', sans-serif;`;
