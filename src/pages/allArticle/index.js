import React from "react";
import Table from "../../components/table";
export default function AllArticle() {
  return (
    <>
      <div className="container mt-4 col-9">
        <div className="row">
          <div className="col">
            <h2>All Posts</h2>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
