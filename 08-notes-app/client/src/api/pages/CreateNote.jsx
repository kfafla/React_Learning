import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Tag, message, Select } from 'antd'; // 引入 Ant Design 组件
import { createNote } from '@/api/noteApi'; // 引入创建笔记的 API
import { getCategories } from '@/api/categoryApi'; // 引入获取分类的 API
import { useStore } from '@/store/userStore'; // 引入全局状态管理
import { useNavigate } from 'react-router-dom'; // 引入 React Router 的导航钩子
import Navbar from '@/components/Navbar'; // 引入 React 导航栏组件

// 创建笔记页面组件
const CreateNote = () => {
  const navigate = useNavigate(); // 获取导航函数
  const { user } = useStore(); // 从全局状态中获取当前用户信息
  const [tags, setTags] = useState([]); // 标签状态，用于存储用户添加的标签
  const [inputTag, setInputTag] = useState(''); // 输入框中的标签内容
  const [categories, setCategories] = useState([]); // 分类状态，用于存储从 API 获取的分类数据
  const [loading, setLoading] = useState(true); // 加载状态
  const [form] = Form.useForm(); // 使用 Ant Design 的 Form useForm 钩子创建表单

  // 使用 useEffect 钩子在组件加载时获取分类数据
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await getCategories(); // 调用 API 获取分类
        setCategories(response.data); // 将获取到的分类数据存储到状态中
      } catch (error) {
        console.error('Failed to fetch categories:', error); // 打印错误信息
        message.error('获取分类失败'); // 使用 Ant Design 的 message 组件显示错误提示
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // 提交表单时的处理函数
  const handleSubmit = async (values) => {
    try {
      const noteData = {
        ...values, // 展开表单提交的值
        tags, // 添加标签到笔记数据中
        userId: user.id, // 添加当前用户的 ID
      };
      await createNote(noteData); // 调用 API 创建笔记
      message.success('笔记创建成功'); // 显示成功提示
      navigate('/notes'); // 导航到笔记列表页面
    } catch (error) {
      console.error('Failed to create note:', error); // 打印错误信息
      message.error('创建笔记失败'); // 显示失败提示
    }
  };

  // 输入框内容变化时的处理函数
  const handleInputChange = (e) => {
    setInputTag(e.target.value); // 更新输入框中的标签内容
  };

  // 添加标签的处理函数
  const handleAddTag = () => {
    if (inputTag && !tags.includes(inputTag)) {
      setTags([...tags, inputTag]); // 将新标签添加到标签列表中
      setInputTag(''); // 清空输入框
    }
  };

  // 删除标签的处理函数
  const handleRemoveTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag); // 过滤掉要删除的标签
    setTags(newTags); // 更新标签列表
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="p-4">加载中...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1>创建笔记</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入笔记标题' }]}
          >
            <Input placeholder="输入笔记标题" />
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入笔记内容' }]}
          >
            <Input.TextArea rows={6} placeholder="输入笔记内容" />
          </Form.Item>

          <Form.Item
            label="分类"
            name="categoryId"
            rules={[{ required: true, message: '请选择笔记分类' }]}
          >
            <Select placeholder="选择笔记分类">
              {categories.map((category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <div className="mb-4">
            <label className="block mb-2">标签</label>
            <div className="flex gap-2 mb-2">
              <Input
                value={inputTag}
                onChange={handleInputChange}
                placeholder="输入标签"
                onPressEnter={handleAddTag}
              />
              <Button onClick={handleAddTag}>添加标签</Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} closable onClose={() => handleRemoveTag(tag)}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              创建笔记
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateNote;
