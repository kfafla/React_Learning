import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../api/pages/Login';
import Home from '../api/pages/Home';
import Register from '../api/pages/Register';
import Categories from '../api/pages/Categories';
import CategoryNotes from '../api/pages/CategoryNotes';
import Notes from '../api/pages/Notes';
import Note from '../api/pages/Note';
import CreateNote from '../api/pages/CreateNote';
import EditNote from '../api/pages/EditNote';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/notes/categories/:categoryId" element={<CategoryNotes />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:id" element={<Note />} />
      <Route path="/create-note" element={<CreateNote />} />
      <Route path="/notes/edit/:noteId" element={<EditNote />} />
    </Routes>
  );
};

export default AppRoutes;
