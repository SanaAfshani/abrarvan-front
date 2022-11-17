import {
  ADD_ARTICLE,
  ADD_TAG,
  DELETE_ARTICLE,
  EDIT_BUTTON,
  GET_ARTICLES,
  EDIT_ARTICLE,
} from "./actions";

const initialState = {
  articles: [],
  articlesCount: "",
  loading: false,
  article: {
    title: "",
    description: "",
    body: "",
    tagList: [""],
  },
};
export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_ARTICLES: {
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    }
    case ADD_ARTICLE: {
      return {
        ...state,
        loading: false,
        articles: [...state.articles, action.payload],
      };
    }
    case DELETE_ARTICLE: {
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.slug !== action.payload
        ),
      };
    }
    case EDIT_BUTTON: {
      return {
        ...state,
        article: action.payload,
      };
    }
    case EDIT_ARTICLE: {
      return {
        ...state,
        article: initialState.article,
      };
    }
    default:
      return state;
  }
}

export const getAllArticles = (state) => state.articleReducer;
export const getLoading = (state) => state.articleReducer.loading;
export const getEditData = (state) => state.articleReducer.article;
