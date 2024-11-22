import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Persist Ventures",
    img: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66a09d91f75fb48a0738cc32_Persist%20Ventures%20Graph.png",
    desc: "Working in Persist Ventures since Oct 2023",
  },
  {
    id: 2,
    title: "HeyDaw Technologies",
    img: "https://headwaytechnology.in/home/images/154348176640132850.png",
    desc: "Completed my internship at HeyDaw Technologies as an AI Software Developer (Aug 2023 - Oct 2023 )",
  },
  {
    id: 3,
    title: "Telaverge Communications",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUXECjFyPdTnazfWxG25NtZ2PzpGhOjCWgQ&s",
    desc: "Software Engineering Intern at Telaverge Communications (May 2022 - Apr 2023)",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Know More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Work Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
