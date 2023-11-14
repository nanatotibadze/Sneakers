import img1 from "../../assets/images/image-product-1.jpg";
import t1 from "../../assets/images/image-product-1-thumbnail.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import t2 from "../../assets/images/image-product-2-thumbnail.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import t3 from "../../assets/images/image-product-3-thumbnail.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import t4 from "../../assets/images/image-product-4-thumbnail.jpg";
import classes from "./ImageGallery.module.css";
import {useState} from "react";
import {Container} from "react-bootstrap";

function Box() {
  const thumbnails = [t1, t2, t3, t4];
  const [activeIndex, setActiveIndex] = useState(0);
  const originalImages = [img1, img2, img3, img4];

  return (
    <Container fluid className={classes.containerfluid}>
      <img
        className={`${classes.originImg} }`}
        src={originalImages[activeIndex]}
      />
      <div className={classes.prevNext}>
        <button
          className={classes.prevButton}
          value={activeIndex}
          onClick={() => {
            if (activeIndex === 0) setActiveIndex(originalImages.length - 1);
            if (activeIndex > 0) setActiveIndex(activeIndex - 1);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
          >
            <circle cx='20' cy='20' r='20' fill='white' />
            <path
              d='M22.8572 14.2857L17.1429 20L22.8572 25.7143'
              stroke='#1D2026'
            />
          </svg>
        </button>
        <button
          value={activeIndex + 1}
          className={classes.nextButton}
          onClick={() => {
            if (activeIndex === originalImages.length - 1) setActiveIndex(0);
            if (activeIndex < originalImages.length - 1)
              setActiveIndex(activeIndex + 1);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
          >
            <circle cx='20' cy='20' r='20' fill='white' />
            <path
              d='M17.1428 14.2857L22.8571 20L17.1428 25.7143'
              stroke='#1D2026'
            />
          </svg>
        </button>
      </div>

      {/* <button className='nextButton'></button> */}

      <div className={classes.imgButtons}>
        {thumbnails.map((item, index) => (
          <button
            key={index + 1}
            value={index}
            className={`${classes.btn} ${
              index === +activeIndex ? classes.active : ""
            } `}
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          >
            {/* <img src={item} className={classes.btnImg} /> */}
            <img src={item} className={classes.btnImg}></img>
          </button>
        ))}
      </div>
    </Container>
  );
}

export default Box;
