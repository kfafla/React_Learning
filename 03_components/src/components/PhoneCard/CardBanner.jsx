import { Carousel } from "antd";
import "./CardBanner.css";
const CardBanner = () => {
  return (
    <div className="banner-container">
      <Carousel autoplay effect="fade">
        <div>
          <img
            src="https://public-cdn-oss.mosoteach.cn/avatar/2022/79/dc5660af2eefff104751b1ee4f130a20.jpg?v=1662370167&x-oss-process=style/s300x300"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/images/55741076-c3fe-4064-a7c1-0cae362eaa4a_ymx.png"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/de923e5c-bcbd-40a0-8efc-6972c36c14a7_2021051521244130.jpg"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default CardBanner;
