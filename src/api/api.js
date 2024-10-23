import axios from 'axios';

export const loginUser = async (email, password) => {
  if (email === "admin@mail.com" && password === "contraseña123") {
    return {
      userId: 1,
      nombre: "Admin",
      email: "admin@mail.com",
      role: "admin",
      accessToken: "fakeAccessTokenAdmin",
      refreshToken: "fakeRefreshTokenAdmin",
    };
  } else if (email === "user@mail.com" && password === "contraseña123") {
    return {
      userId: 2,
      nombre: "User",
      email: "user@mail.com",
      role: "user",
      accessToken: "fakeAccessTokenUser",
      refreshToken: "fakeRefreshTokenUser",
    };
  } else {
    throw new Error("Credenciales inválidas");
  }
};

export const validateToken = async (token) => {
  return token === "fakeAccessTokenAdmin" || token === "fakeAccessTokenUser";
};

export const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getPhotos = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return response;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};

export const postAPost = async (params, data = []) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: params.title,
      body: params.body,
      userId: 1,
    });

    return [response.data, ...data];
  } catch (error) {
    console.error("Error al crear el post", error);
    throw error;
  }
};

export const editPost = async (id, params, data) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: params.title,
      body: params.body,
      userId: 1,
    });
    const updatedData = data.map(post => post.id === id ? response.data : post);
    return updatedData;
  } catch (error) {
    console.error('Error al editar el post:', error);
    throw error;
  }
};

export const deletePost = async (id, data) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const updatedData = data.filter(post => post.id !== id);
    return updatedData;
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    throw error;
  }
};

export const getComments = async (postId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
