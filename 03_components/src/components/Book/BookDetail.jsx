import  { useState } from "react";

const BookDetail = ({ book, onEditBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    year: book.year,
  });
  const [errors, setErrors] = useState({});

  // 处理输入框变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // 清除对应字段的错误
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // 表单验证
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "书名不能为空";
    }
    if (!formData.author.trim()) {
      newErrors.author = "作者不能为空";
    }
    if (!formData.year || isNaN(formData.year)) {
      newErrors.year = "出版年份必须是数字";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 保存编辑
  const handleSave = () => {
    if (validateForm()) {
      onEditBook(formData);
      setIsEditing(false);
    }
  };

  // 取消编辑
  const handleCancel = () => {
    setFormData({
      title: book.title,
      author: book.author,
      year: book.year,
    });
    setIsEditing(false);
    setErrors({});
  };

  return (
    <div className="book-detail">
      {isEditing ? (
        <form>
          <div className="form-group">
            <label>书名</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? "error" : ""}
            />
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>
          <div className="form-group">
            <label>作者</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className={errors.author ? "error" : ""}
            />
            {errors.author && (
              <span className="error-message">{errors.author}</span>
            )}
          </div>
          <div className="form-group">
            <label>出版年份</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={errors.year ? "error" : ""}
            />
            {errors.year && (
              <span className="error-message">{errors.year}</span>
            )}
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleSave}>
              保存
            </button>
            <button type="button" onClick={handleCancel}>
              取消
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2>{book.title}</h2>
          <p>作者: {book.author}</p>
          <p>出版年份: {book.year}</p>
          <button onClick={() => setIsEditing(true)}>编辑</button>
        </>
      )}
    </div>
  );
};

export default BookDetail;
