const StudentClass = (props) => {
  // 从 props 中解构学生信息
const { name, age, avatar, homepage } = props;
  return (
    <div className="student-info">
      <h1>学生信息</h1>
      <div>
        <img src={avatar} alt="头像" className="avatar" />
      </div>
      <div>
        <p>姓名: {name}</p>
        <p>年龄: {age}</p>
        <p>
          主页:{" "}
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentClass;
