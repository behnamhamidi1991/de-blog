import react from "../src/assets/images/react.jpg";
import javascript from "../src/assets/images/javascript.jpg";
import webDesign from "../src/assets/images/webdesign.jpg";
import uiux from "../src/assets/images/uiux.jpg";
import typescript from "../src/assets/images/typescript.png";
import responsive from "../src/assets/images/responsive.jpg";
import vscode from "../src/assets/images/vscode.jpg";
import css from "../src/assets/images/cssimage.jpg";
import frontendTools from "../src/assets/images/frontendtools.jpg";

export interface Bloginterface {
  id: string;
  title: string;
  image: string;
  text: string;
  writer: string;
  view: number;
}
export const images = [
  react,
  javascript,
  typescript,
  webDesign,
  uiux,
  responsive,
  frontendTools,
  vscode,
  css,
];

export const blogposts: Bloginterface[] = [
  {
    id: "1",
    title: "Top 5 React Tips You Should Know",
    image: images[0],
    text: "Here are five essential tips to write cleaner and more efficient React code.",
    writer: "Ali Hosseini",
    view: 1320,
  },
  {
    id: " 2",
    title: "How JavaScript ES6 Changed Everything",
    image: images[1],
    text: "ES6 brought many powerful features to JavaScript. Let's explore the most important ones.",
    writer: "Sara Mohammadi",
    view: 1740,
  },
  {
    id: "3",
    title: "Why TypeScript is a Game Changer",
    image: images[2],
    text: "TypeScript's type safety can save hours of debugging in large frontend projects.",
    writer: "Mehdi Rostami",
    view: 1215,
  },
  {
    id: "4",
    title: "Modern Web Design Trends in 2025",
    image: images[3],
    text: "From neumorphism to glassmorphism, check out the latest trends in web design.",
    writer: "Negar Ahmadi",
    view: 1982,
  },
  {
    id: "5",
    title: "UI/UX Principles Every Developer Should Know",
    image: images[4],
    text: "Understanding UI/UX helps developers create better, user-friendly interfaces.",
    writer: "Amir Karimi",
    view: 1437,
  },
  {
    id: "6",
    title: "Responsive Design: Tips for Mobile-First Development",
    image: images[5],
    text: "Learn how to make your websites look great on all screen sizes.",
    writer: "Zahra Heidari",
    view: 1623,
  },
  {
    id: "7",
    title: "Must-Have Frontend Tools for 2025",
    image: images[6],
    text: "Discover powerful tools that can supercharge your frontend workflow.",
    writer: "Mohammad Jafari",
    view: 1777,
  },
  {
    id: "8",
    title: "VS Code Extensions for Frontend Developers",
    image: images[7],
    text: "These VS Code extensions will boost your productivity and code quality.",
    writer: "Mahsa Yousefi",
    view: 1108,
  },
  {
    id: "9",
    title: "CSS Tricks You Might Not Know",
    image: images[8],
    text: "Explore lesser-known but super useful CSS tips to enhance your designs.",
    writer: "Hossein Abbasi",
    view: 1389,
  },
];
