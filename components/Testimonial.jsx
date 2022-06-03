import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHead from "./SectionHead";
import ButtonGroup from "./ButtonGroup";
import style from "../styles/Testimonial.module.css";
import Image from "next/image";
import Testimonial1 from "../public/images/testimonial1.png";
import Testimonial2 from "../public/images/testimonial2.png";
import Testimonial3 from "../public/images/testimonial3.png";
import Testimonial4 from "../public/images/testimonial1.png";

const data = [
  {
    title: "Front-end developer",
    description:
      "lorem ipsum is a dummy text for empty text slots, i do not end",
    image: <Image src={Testimonial1} alt="" />,
    name: "Seth  mcfarlane ",
  },
  {
    title: "Android developer",
    description:
      "lorem ipsum is a dummy text for empty text slots, i do not end",
    image: <Image src={Testimonial2} alt="" />,
    name: "Hannah grey",
  },
  {
    title: "Android developer",
    description:
      "lorem ipsum is a dummy text for empty text slots, i do not end",
    image: <Image src={Testimonial3} alt="" />,
    name: "Denny Hilguston",
  },
  {
    title: "Android developer",
    description:
      "lorem ipsum is a dummy text for empty text slots, i do not end",
    image: <Image src={Testimonial4} alt="" />,
    name: "Denny Hilguston",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 1024, min: 3000 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1024, min: 940 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 940, min: 548 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 548, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
const Testimonial = () => {
  return (
    <div>
      <SectionHead
        text1="Don’t just take our"
        head="Testimonies"
        text2="for it"
        color="#73d88e"
        word="word"
      />

      <Carousel {...carouselParams} className={style.container}>
        {data.map((item, i) => {
          return (
            <div className={style.cardDiv} key={i}>
              <div className={style.card}>
                <div className={style.cardImg}>
                  <div className={style.img}>{item.image}</div>
                </div>
                <div className={style.cardText}>
                  <h3>{item.name}</h3>

                  <h2 className={style.titleText}>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
              <p className={style.cardP}>Read more</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonial;
