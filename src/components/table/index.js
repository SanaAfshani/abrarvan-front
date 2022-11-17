import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/article/actions";
import { getAllArticles } from "../../redux/article/reducer";
import Paginations from "./paginations";
import DropDownButton from "../dropDownButton";
import "./table.css";
import { useParams } from "react-router-dom";
export default function Table() {
  const { page: pageNumber } = useParams();

  const [page, setPage] = useState(+pageNumber || 1);
  const [recordsPerPage] = useState(10);

  const Articles = useSelector(getAllArticles);
  const nPages = Math.ceil(Articles.articlesCount / recordsPerPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles(page - 1 <= 0 ? 0 : page - 1));
  }, [dispatch, page]);
  return (
    <>
      <table class="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Tags</th>
            <th scope="col">Excerpt</th>
            <th scope="col"></th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {Articles.articles && Articles.articles.length > 0 ? (
            Articles.articles.map((el, idx) => (
              <tr key={el.favoritesCount}>
                <td>{idx + 1}</td>
                <td
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={el.title}
                >
                  <div className="tableTd">{el.title}</div>
                </td>
                <td>{`@${el.author?.username}`}</td>
                <td>{el.tagList.flat().join("/")}</td>
                <td
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={el.description}
                >
                  <div className="tableTd">{el.description}</div>
                </td>
                <td>
                  <span>{el.createdAt.split("T")[0]}</span>
                </td>
                <td>
                  <DropDownButton data={el} />
                </td>
              </tr>
            ))
          ) : (
            <h1>loading...</h1>
          )}
        </tbody>
      </table>
      <Paginations nPages={nPages} page={page} setPage={setPage} />
    </>
  );
}
