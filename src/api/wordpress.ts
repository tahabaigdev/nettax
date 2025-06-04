// src/api/wordpress.ts
import axios from "axios";

const WP_BASE_URL = "https://www.nettax.org/blogs/wp-json/wp/v2";

export const getPosts = async (page = 1, perPage = 10) => {
  const res = await axios.get(`${WP_BASE_URL}/posts`, {
    params: { _embed: true, page, per_page: perPage },
  });
  return {
    posts: res.data,
    total: parseInt(res.headers["x-wp-total"]),
    totalPages: parseInt(res.headers["x-wp-totalpages"]),
  };
};

export const getFeaturedPost = async () => {
  const res = await axios.get(`${WP_BASE_URL}/posts`, {
    params: { _embed: true, per_page: 1, offset: 4 },
  });
  return res.data[0];
};

export const getWhatsNewPosts = async () => {
  const res = await axios.get(`${WP_BASE_URL}/posts`, {
    params: {
      _embed: true,
      per_page: 2,
      offset: 0, // first two
    },
  });
  return res.data;
};

export const getWhatsNextPosts = async () => {
  const res = await axios.get(`${WP_BASE_URL}/posts`, {
    params: { _embed: true, per_page: 3, offset: 3 },
  });
  return res.data;
};

export const getPostBySlug = async (slug: string) => {
  const res = await axios.get(`${WP_BASE_URL}/posts`, {
    params: {
      slug,
      _embed: true,
    },
  });
  return res.data[0];
};
