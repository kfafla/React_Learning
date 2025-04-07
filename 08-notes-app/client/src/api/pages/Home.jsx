import { Layout, Typography, Card } from 'antd';
import Navbar from '@/components/Navbar';
import { useStore } from '@/store/userStore';
import styled, { keyframes } from 'styled-components';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const { user } = useStore();

  const newFadeIn = keyframes`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `;

  const StyledContent = styled(Content)`
    background: linear-gradient(135deg, #ff5733, #33ff57, #3357ff);
    background-size: 200% 200%;
    animation:
      ${newFadeIn} 1s ease-in-out,
      gradientAnimation 5s ease infinite;
    color: white;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  `;

  const gradientAnimation = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  const GlassCard = styled(Card)`
    width: 80%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    color: white;
    font-family: 'Arial', sans-serif;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-10px);
    }
  `;

  return (
    <Layout>
      <Navbar />
      <StyledContent>
        <GlassCard>
          {user ? (
            <Title level={2}>欢迎, {user.nickname || user.username}</Title>
          ) : (
            <Title level={2}>欢迎来到笔记应用</Title>
          )}
          <Paragraph style={{ fontSize: '1.2rem', marginTop: '16px' }}>
            这是一个功能强大的笔记应用，帮助你记录生活中的点滴和灵感。无论是学习笔记、工作计划，还是旅行攻略，都可以在这里轻松管理。
          </Paragraph>
          <Paragraph style={{ fontSize: '1.2rem', marginTop: '16px' }}>
            你可以创建多个笔记本，分类存储不同主题的笔记。每个笔记都可以添加标题、内容，还可以插入图片、链接等富文本内容。
          </Paragraph>
          <Paragraph style={{ fontSize: '1.2rem', marginTop: '16px' }}>
            如果你还没有开始，现在就创建一个笔记本，开始记录吧！
          </Paragraph>
        </GlassCard>
      </StyledContent>
    </Layout>
  );
};

export default Home;
