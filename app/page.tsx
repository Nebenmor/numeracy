import "./styles.css";

const Page = () => {

  const images = [
    { size: 10, src: "/assets/0.png" },
    { size: 20, src: "/assets/1.png" },
    { size: 10, src: "/assets/2.png" },
    { size: 60, src: "/assets/3.png" },
    { size: 20, src: "/assets/4.png" },
    { size: 40, src: "/assets/5.png" },
    { size: 80, src: "/assets/6.png" },
    { size: 60, src: "/assets/7.png" },
    { size: 40, src: "/assets/8.png" },
    { size: 80, src: "/assets/9.png" },
    { size: 20, src: "/assets/cross-mark.png" },
    { size: 40, src: "/assets/divide.png" },
    { size: 80, src: "/assets/equation.png" },
    { size: 60, src: "/assets/hashtag.png" },
    { size: 10, src: "/assets/math.png" },
    { size: 20, src: "/assets/minus.png" },
    { size: 40, src: "/assets/plus.png" },
    { size: 10, src: "/assets/power.png" },
  ];

  return (
    <div className="bg">
      <div className="page-container animate" >
        <div className="left-section">
          <h1 className="title">
            <b>This is the Left Section</b>
          </h1>
          <p className="paragraph">
            This is the paragraph text in the left section. It can contain any
            content you'd like.
          </p>
          <button className="button">Click me</button>
        </div>
        <div className="right-section">
          <div className="image-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`image image-${image.size}`}
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;