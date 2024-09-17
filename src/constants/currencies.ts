import australian from "assets/images/australian.svg";
import bitcoin from "assets/images/bitcoin.svg";
import canadian from "assets/images/canadian.svg";
import dollar from "assets/images/dollar.svg";
import euro from "assets/images/euro.svg";
import libra from "assets/images/libra.svg";
import peso from "assets/images/peso.svg";
import yen from "assets/images/yen.svg";
import yuan from "assets/images/yuan.svg";

export const currencies = [
  {name: "USD", background: "#2a4628", icon: dollar, rate: 1.0},
  {name: "ARS", background: "#5a4b2c", icon: peso},
  {name: "CAD", background: "#452534", icon: canadian},
  {name: "JPY", background: "#494F57", icon: yen},
  {name: "AUDT", background: "#142E67", icon: australian},
  {name: "CNHT", background: "#4D505B", icon: yuan},
  {name: "EUR", background: "#1D324B", icon: euro},
  {name: "BTC", background: "#3D2E28", icon: bitcoin},
  {name: "GBP", background: "#5B2C2B", icon: libra},
];
