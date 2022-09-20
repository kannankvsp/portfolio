import Slampng from './images/slam.png'
import Schoolpng from './images/school.png'
import Weatherpng from './images/weather-app.png'
export const skills = [
  "HTML5","CSS3","React js","Node js","MongoDB","MySQL","Python","Scala","Apache Spark","Express js"
]
export const projects = [
  {
    title: "Weather App",
    subtitle: "React js",
    description:
      "Using postal api, it verifies the postal name and generate random weather data",
    image: Weatherpng,
    link: "",
  },
  {
    title: "Choose your school",
    subtitle: "MERN stack",
    description:
      "collects school data and list for choosing schools",
    image: Schoolpng,
    link: "https://hackzeal.me",
  },
  {
    title: "Slam Book",
    subtitle: "React and Firebase",
    description:
      "single page slam book for myself in end of college",
    image: Slampng,
    link: "https://kvsp-slam.heroku.com",
  }
];