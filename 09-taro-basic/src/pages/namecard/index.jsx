import { View, Text, Button, Input } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";
import NameCard from "../../components/NameCard";

export default function Namecard() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [cardInfo, setCardInfo ] = useState(null);

  const handleInputChange =  (key) => (e) => {
    setFormData({
      ...formData,
      [key]: e.detail.value,
    });
  };

  const generateCard = () => {
    setCardInfo({ ...formData });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      phone: "",
    });
    setCardInfo(null);
  };

  return (
    <View className="index">
      <View>
        <Text>姓名</Text>
        <Input
          type="text"
          placeholder="请输入姓名"
          value={formData.name}
          onInput={handleInputChange("name")}
        />
      </View>
      <View>
        <Text>手机号</Text>
        <Input
          type="text"
          placeholder="请输入手机号"
          value={formData.phone}
          onInput={handleInputChange("phone")}
        />
      </View>
      <View>
        <Button type="primary" onClick={generateCard}>
          生成名片
        </Button>
        <Button onClick={clearForm}>清空</Button>
      </View>
      {cardInfo && <NameCard cardInfo={cardInfo} />}
    </View>
  );
}
