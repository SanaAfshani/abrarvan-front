import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addArticle,
  editArticle,
  EDIT_ARTICLE,
} from "../../redux/article/actions";
import { useNavigate } from "react-router-dom";
import "./formArticle.css";
import { getEditData, getLoading } from "../../redux/article/reducer";
const validationSchema = yup.object().shape({
  title: yup.string().required("Required field"),
});
export default function FromArticle({ isEdit }) {
  const StyledContainerTags = styled.div`
    padding: 15px 0px 15px 17px;
    border-radius: 4px;
    border: solid 1px #ddd;
    background-color: #fff;
  `;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(getEditData);
  const [tags, setTags] = useState(isEdit ? data.tagList : []);
  const [newTag, setNewTag] = useState("");
  const [enableTag, setEnableTag] = useState(isEdit ? data.tagList : []);
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      const newValue = e.target.value;
      setTags((perv) => [...perv, newValue]);
      setNewTag("");
    }
  };
  const handleChange = (e) => {
    setNewTag(e.target.value);
  };
  console.log(tags, "tags");
  const formik = useFormik({
    initialValues: {
      title: data.title || "",
      description: data.description || "",
      body: data.body || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (!isEdit) {
        dispatch(
          addArticle(
            {
              article: {
                title: values.title,
                description: values.description,
                body: values.body,
                tagList: enableTag,
              },
            },
            navigate
          )
        );
      } else {
        dispatch(
          editArticle(
            data.slug,
            {
              article: {
                title: values.title,
                description: values.description,
                body: values.body,
              },
            },
            navigate
          )
        );
      }
    },
  });
  const loading = useSelector(getLoading);

  const mockData = [
    { label: "title", value: formik.values.title },
    { label: "description", value: formik.values.description },
    { label: "body", value: formik.values.body, type: "textarea" },
  ];

  useEffect(() => {
    return () => {
      dispatch({ type: EDIT_ARTICLE });
      // console.log('unmout');
    };
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <form className="col-9" onSubmit={formik.handleSubmit}>
          <div>
            {mockData.map((i, idx) => {
              if (i.type === "textarea") {
                return (
                  <div key={idx}>
                    <label htmlFor={`input-${i.label}`}>{i.label}</label>{" "}
                    <textarea
                      className="inputTextAera"
                      id={`input-${i.label}`}
                      name={i.label}
                      type="textarea"
                      onChange={formik.handleChange}
                      value={i.value}
                    />
                    {formik.touched[i.label] && formik.errors[i.label] && (
                      <small id="bodyHelpBlock" class="form-text text-danger">
                        {formik.errors[i.label]}
                      </small>
                    )}
                  </div>
                );
              }
              return (
                <div key={idx}>
                  <label htmlFor={`input-${i.label}`}>{i.label}</label>
                  <input
                    className="inputText"
                    id={`input-${i.label}`}
                    name={i.label}
                    type="text"
                    placeholder={i.label}
                    onChange={formik.handleChange}
                    value={i.value}
                  />
                  {formik.touched[i.label] && formik.errors[i.label] && (
                    <small id="bodyHelpBlock" class="form-text text-danger">
                      {formik.errors[i.label]}
                    </small>
                  )}
                </div>
              );
            })}

            <button
              disabled={loading}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-25">
          <label htmlFor="input-Tags">Tags</label>
          <input
            className="inputText"
            id="input-Tags"
            type="text"
            placeholder="New tag"
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            value={newTag}
            disabled={isEdit}
          />
          {tags &&
            tags?.map((tag, index) => (
              <StyledContainerTags>
                <div class="form-check" key={index}>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id={`input-${index}`}
                    name={`tagList[${index}]`}
                    onChange={(event) =>
                      event.target.checked
                        ? setEnableTag((prev) => [...prev, tag])
                        : setEnableTag((prev) =>
                            prev.filter((item) => item !== tag)
                          )
                    }
                    checked={enableTag.includes(tag)}
                    disabled={isEdit}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    {tag}
                  </label>
                </div>
              </StyledContainerTags>
            ))}
        </div>
      </div>
    </>
  );
}
