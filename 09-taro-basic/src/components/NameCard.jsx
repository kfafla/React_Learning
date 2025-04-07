import { View, Image } from "@tarojs/components"

const NameCard = ({ cardInfo }) => {
  return (
    <View>
      <View>
        <Image
          src="https://public-cdn-oss.mosoteach.cn/avatar/2022/79/dc5660af2eefff104751b1ee4f130a20.jpg?v=1662370167&x-oss-process=style/s300x300"
          style={{ width: "100px", height: "100px", borderRadius: "100px"}}
        />
      </View>
      <View>
        <View>{cardInfo.name}</View>
        <View>{cardInfo.phone}</View>
      </View>
    </View>
  );
};
export default NameCard;
