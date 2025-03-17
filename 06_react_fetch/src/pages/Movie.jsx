import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [num] = useState(12); // 每页显示数量

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://api.tianapi.com/film/index", {
          params: {
            key: "69f38f684c9e34a9b8345c59f459c19e",
            num: num,
            page: currentPage,
          },
        });

        if (response.data.code === 200) {
          const formattedMovies = response.data.newslist.map((movie) => ({
            id: movie.id || Math.random().toString(36).substr(2, 9),
            title: movie.title,
            description: movie.description,
            coverUrl: movie.picUrl,
            score: movie.score,
            year: movie.year,
            type: movie.type,
            director: movie.director,
            actors: movie.actors,
          }));
          setMovies(formattedMovies);
        } else {
          throw new Error(response.data.msg || "获取电影数据失败");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage, num]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>正在加载精彩电影...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>出错啦！</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>重试</button>
      </div>
    );
  }

  return (
    <div className="movie-container">
      <h1>热门电影</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-cover">
              {movie.coverUrl ? (
                <img src={movie.coverUrl} alt={movie.title} />
              ) : (
                <div className="no-cover">暂无封面</div>
              )}
            </div>
            <div className="movie-content">
              <h3>{movie.title}</h3>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          上一页
        </button>
        <span className="page-info">第 {currentPage} 页</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={movies.length < num}
          className="pagination-button"
        >
          下一页
        </button>
      </div>

      <style jsx>{`
        .movie-container {
          padding: 2rem;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        h1 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .movie-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .movie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.25);
        }

        .movie-cover {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .movie-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .movie-card:hover .movie-cover img {
          transform: scale(1.05);
        }

        .no-cover {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f2f5;
          color: #999;
        }

        .movie-content {
          padding: 1.5rem;
        }

        .movie-card h3 {
          margin: 0 0 1rem 0;
          color: #1a1a1a;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .movie-description {
          color: #666;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .movie-info {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .info-item {
          flex: 1 1 calc(50% - 0.5rem);
          display: flex;
          align-items: center;
          font-size: 0.9rem;
        }

        .info-item.full-width {
          flex: 1 1 100%;
        }

        .label {
          color: #666;
          margin-right: 0.5rem;
        }

        .value {
          color: #333;
          font-weight: 500;
        }

        .loading-container,
        .error-container {
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .loading-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .pagination-button {
          padding: 0.5rem 1rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .pagination-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .pagination-button:not(:disabled):hover {
          background-color: #2980b9;
        }

        .page-info {
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Movie;
