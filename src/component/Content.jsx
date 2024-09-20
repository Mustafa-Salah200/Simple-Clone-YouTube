import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import Card from "./Card";
const Content = () => {
    const Information = []
    const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13]
    for (let i = 0; i < 13; i++) {
        const ob = {
            img : images[i],
            title: "How to make a card Slider in Html and CSS & JS",
            name : "Codeing-Mustafa",
            views: "27",
            date : "4",
        }
        Information.push(ob)
        
    }
  const Words = [
    "All",
    "Website",
    "Music",
    "Gaming",
    "Node.js",
    "Javascript",
    "React.js",
    "Mustafa",
    "CSS",
    "Next.js",
    "HTML",
    "Web",
    "PYTHON",
    "FootBall",
    "Anime",
    "Chrome",
    "BirthDay"
  ];
  return (
    <div className="content">
      <div className="words">
        {Words.map((ele, index) => {
          return <span key={index}>{ele}</span>;
        })}
      </div>
      <div className="main">
        {Information.map((info, index) => {
          return <Card key={index} data={info}/>;
        })}
      </div>
    </div>
  );
};

export default Content;
