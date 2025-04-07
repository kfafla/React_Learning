import React, { useState } from "react";
import { View, Input, Button, Text } from "@tarojs/components";
import "./index.scss";

const AccountBook = () => {
  const [records, setRecords] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");

  const handleAddRecord = () => {
    const newRecord = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      description,
    };
    setRecords([...records, newRecord]);
    setAmount("");
    setDescription("");
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleAmountChange = (e) => {
    setAmount(e.detail.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.detail.value);
  };

  return (
    <View className="account-book">
      <View className="form">
        <View>
          <Text>金额</Text>
          <Input
            type="number"
            placeholder="请输入金额"
            value={amount}
            onInput={handleAmountChange} // 使用 onInput 代替 onChange
          />
        </View>
        <View>
          <Text>描述</Text>
          <Input
            type="text"
            placeholder="请输入描述"
            value={description}
            onInput={handleDescriptionChange} // 使用 onInput 代替 onChange
          />
        </View>
        <View>
          <Text>类型</Text>
          <Button
            className={type === "income" ? "active" : ""}
            onClick={() => setType("income")}
          >
            收入
          </Button>
          <Button
            className={type === "expense" ? "active" : ""}
            onClick={() => setType("expense")}
          >
            支出
          </Button>
        </View>
        <Button onClick={handleAddRecord}>添加记录</Button>
      </View>
      <View className="records">
        {records.map((record) => (
          <View key={record.id} className="record">
            <Text>{record.type === "income" ? "收入" : "支出"}</Text>
            <Text>{record.amount}</Text>
            <Text>{record.description}</Text>
            <Button onClick={() => handleDeleteRecord(record.id)}>删除</Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AccountBook;
