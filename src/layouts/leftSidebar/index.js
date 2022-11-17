import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

export default function LeftSidebar() {
  const StyledLeftContainer = styled.ul`
    width: 20%;
    min-height: 100vh;
    inset: 0;
    padding: 13px 0;
    background-color: var(--blue1C);
    margin-bottom: 0;
  `;
  const StyledTitleSideBar = styled.span`
    color: #fff;
    margin-left: 20px;
    margin-bottom: 16px;
  `;
  const StyledButtonSideBar = styled.li`
    background-color: inherit;
    color: #fff;
    border: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      color: #fff;
    }
  `;

  return (
    <StyledLeftContainer>
      <StyledTitleSideBar>Post</StyledTitleSideBar>
      <NavLink
        to={"/articles"}
        activeClassName="activeButton"
        className="text-decoration-none"
      >
        <StyledButtonSideBar className="list-group-item list-group-item-action">
          All Articles
        </StyledButtonSideBar>
      </NavLink>

      <NavLink
        to={"/newArticle"}
        activeClassName="activeButton"
        className="text-decoration-none"
      >
        <StyledButtonSideBar className="list-group-item list-group-item-action">
          New Article
        </StyledButtonSideBar>
      </NavLink>
    </StyledLeftContainer>
  );
}
