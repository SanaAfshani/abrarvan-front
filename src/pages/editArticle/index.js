import React from "react";
import FromArticle from "../../components/formArticle";

export default function NewArticle() {
  return (
    <>
      <div className="col-9 mt-4">
        <h2>Edit Article</h2>
        <FromArticle isEdit />
      </div>
    </>
  );
}
