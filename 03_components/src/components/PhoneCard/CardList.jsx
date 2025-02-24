import "./CardList.css"; // 引入自定义样式文件

const CardList = () => {
  const products = [
    {
      image:
        "https://public-cdn-oss.mosoteach.cn/avatar/2022/79/dc5660af2eefff104751b1ee4f130a20.jpg?v=1662370167&x-oss-process=style/s300x300 ",
      avatar:
        "https://public-cdn-oss.mosoteach.cn/avatar/2022/79/dc5660af2eefff104751b1ee4f130a20.jpg?v=1662370167&x-oss-process=style/s300x300 ",
      title1: "标题1",
      title2: "标题1标题1",
    },
    {
      image:
        "https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/images/55741076-c3fe-4064-a7c1-0cae362eaa4a_ymx.png",
      avatar:
        "https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/images/55741076-c3fe-4064-a7c1-0cae362eaa4a_ymx.png ",
      title1: "标题2",
      title2: "标题2标题2",
    },
    {
      image:
        "https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/de923e5c-bcbd-40a0-8efc-6972c36c14a7_2021051521244130.jpg",
      avatar:
        "https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/de923e5c-bcbd-40a0-8efc-6972c36c14a7_2021051521244130.jpg",
      title1: "标题3",
      title2: "标题3标题2",
    },
  ];

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.title1} className="product-image" />
            <div className="product-bottom">
              <img
                src={item.avatar}
                alt={item.title1}
                className="product-avatar"
              />
              <div className="product-titles">
                <h3 className="product-title1">{item.title1}</h3>
                <p className="product-title2">{item.title2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
