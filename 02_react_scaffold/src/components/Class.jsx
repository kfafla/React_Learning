import React from "react";

// 示例课程数据
const courses = [
  {
    id: 1,
    name: "前端工程化开发2",
    time: "13:30-15:10",
    day: "周一",
    location: "敬业楼（教四）214",
    teacher: "许老师",
  },
  {
    id: 2,
    name: "前端工程化开发2",
    time: "15:30-17:10",
    day: "周一",
    location: "敬业楼（教四）214",
    teacher: "许老师",
  },
  {
    id: 3,
    name: "习近平新时代思想概论",
    time: "8:00-9:40",
    day: "周三",
    location: "乐群楼（教一）212",
    teacher: "程老师",
  },
  {
    id: 4,
    name: "软件体系结构与构架",
    time: "8:00-9:40",
    day: "周四",
    location: "敬业楼（教四）416",
    teacher: "赵老师",
  },
  {
    id: 5,
    name: "软件体系结构与构架",
    time: "10:00-11:40",
    day: "周四",
    location: "敬业楼（教四）416",
    teacher: "赵老师",
  },
  {
    id: 6,
    name: "后端工程化开发2",
    time: "8:00-9:40",
    day: "周五",
    location: "敬业楼（教四）214",
    teacher: "许老师",
  },
  {
    id: 7,
    name: "后端工程化开发2",
    time: "10:00-11:40",
    day: "周五",
    location: "敬业楼（教四）214",
    teacher: "许老师",
  },
];

// 课程表组件
const CourseTable = () => {
  // 一周的每一天
  const daysOfWeek = ["周一", "周二", "周三", "周四", "周五"];
  // 上课时间段
  const timeSlots = [
    "8:00-9:40",
    "10:00-11:40",
    "13:30-15:10",
    "15:30-17:10",
    "18:30-20:00",
  ];

  // 判断课程时间是上午还是下午
  const isMorning = (time) => {
    const [start] = time.split("-");
    const hour = parseInt(start.split(":")[0], 10);
    return hour < 12;
  };

  return (
    <div className="course-table">
      <h2>一周课程表</h2>
      <table>
        <thead>
          <tr>
            <th>时间</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td>{time}</td>
              {daysOfWeek.map((day) => {
                // 查找当前时间段和星期对应的课程
                const course = courses.find(
                  (c) => c.day === day && c.time === time
                );
                return (
                  <td key={`${day}-${time}`}>
                    {course ? (
                      <div>
                        <strong
                          style={{
                            color: isMorning(time) ? "red" : "blue",
                          }}
                        >
                          {course.name}
                        </strong>
                        <br />
                        <span>地点: {course.location}</span>
                        <br />
                        <span>教师: {course.teacher}</span>
                      </div>
                    ) : (
                      <span className="empty-slot"></span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 包装组件
class Task extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <CourseTable />
      </div>
    );
  }
}

export default Task;
