import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteArticle, editButtonSaveData } from "../../redux/article/actions";

export default function DropDownButton({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Modal = React.lazy(() => import("../modal"));
  const deleteFunctionHandler = () => {
    dispatch(deleteArticle(data.slug));
  };
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          ...
        </button>
        <div
          className="dropdown-menu"
          style={{ minWidth: 30, padding: "3px 0" }}
        >
          <button
            className="dropdown-item border-bottom pl-3"
            onClick={() => {
              dispatch(editButtonSaveData(data, navigate));
            }}
          >
            Edit
          </button>
          <button
            className="dropdown-item pl-3"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Delete
          </button>
        </div>
      </div>     
      <Suspense>
        <Modal deleteFunctionHandler={deleteFunctionHandler} />
      </Suspense>  
    </>
  );
}
