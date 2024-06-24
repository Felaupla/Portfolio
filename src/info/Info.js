import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Felipe",
  lastName: "Planes",
  initials: "FP", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "👨🏻‍💻",
      text: "Team player, adaptable, flexible, resilient and passionate about coding",
    },
    {
      emoji: "🌎",
      text: "Based in Argentina",
    },
    {
      emoji: "💼",
      text: "Full stack developer",
    },
    {
      emoji: "📧",
      text: "felipe.planes@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/felipe_planes/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/Felaupla",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/felipe-planes/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Felipe. I'm a Full Stack Developer working on a Telecomunications Company. I studied Web Development at soyHenry, I enjoy Family time, motor sports and bike riding, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "typescript",
      "react",
      "node.js",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "chakra",
      "postgresql",
      "sql",
      "agile",
      "scrum",
      "nodejs",
    ],
    exposedTo: ["sqlite"],
  },
  hobbies: [
    {
      label: "Family Time",
      emoji: "👨‍👩‍👦",
    },
    {
      label: "Cycles",
      emoji: "🚴​",
    },
    {
      label: "Motor sports",
      emoji: "🏎️",
    },
    {
      label: "Motorcycles",
      emoji: "🏍️",
    },

    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Credit Card & CBU Validator",
      live: "https://card-cbu-validator.vercel.app/",
      source: "https://github.com/Felaupla/ValidateCreditCard",
      image: mock3,
    },
    {
      title: "Dogs Project",
      live: "https://dogsproject.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Felaupla/DogsProject", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Mangiar-e App",
      live: "https://mangiare.vercel.app/",
      source: "https://github.com/Felaupla",
      image: mock2,
    },
  ],
};
