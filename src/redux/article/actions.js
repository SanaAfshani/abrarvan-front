import { getAxiosInstanceApi } from "../../api/api";

export const GET_ARTICLES = "GET_ARTICLES";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const EDIT_BUTTON = "EDIT_BUTTON";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const ADD_TAG = "EDIT_ARTICLE";
export const TOGGLE_LOADING = "TOGGLE_LOADING";

export const getArticles = (offset) => {
  return async (dispatch) => {
    await getAxiosInstanceApi()
      .get(`articles?limit=10&offset=${offset}`)
      .then((res) => {
        const data = res.data;
        dispatch({
          type: GET_ARTICLES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addArticle = (data, navigate) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_LOADING });
    await getAxiosInstanceApi()
      .post("articles", data)
      .then((res) => {
        const data = res.data.article;
        console.log(data);
        dispatch({
          type: ADD_ARTICLE,
          payload: data,
        });
        navigate("/articles");
      })
      // .then(async () => {
      //   await nav;
      // })
      .catch((error) => {
        console.log(error);
      });
    await dispatch({ type: TOGGLE_LOADING });
  };
};

export const deleteArticle = (slug) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_LOADING });
    await getAxiosInstanceApi()
      .delete(`articles/${slug}`)
      .then(() => {
        dispatch({
          type: DELETE_ARTICLE,
          payload: slug,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const editButtonSaveData = (data, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: EDIT_BUTTON,
      payload: data,
    });
    navigate(`/articles/edit/${data.slug}`);
  };
};

export const editArticle = (slug,data, navigate) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_LOADING });
    await getAxiosInstanceApi()
      .put(`articles/${slug}`, data)
      .then(() => {
        dispatch({
          type: EDIT_ARTICLE,
        });
        navigate(`/articles`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const addTag = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TAG,
      payload: data,
    });
  };
};
