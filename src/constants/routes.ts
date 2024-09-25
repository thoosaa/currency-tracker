import {Card} from "pages/Card/Card";
import {Contact} from "pages/Contact/Contact";
import {Home} from "pages/Home/Home";

export const routes = [
  {path: "/", component: Home},
  {path: "/contact", component: Contact},
  {path: "/card", component: Card},
];
