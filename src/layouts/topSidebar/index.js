import styled from "styled-components";
import React from "react";

export default function TopSidebar() {
  const StyledTopContainer = styled.section`
    width: 100%;
    height: 60px;
    padding: 10px 29.3px 10px 20px;
    background-color: var(--charcoal-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  `;
  const StyledTitle = styled.span`
    /* font-size: 22px; */
    color: #fff;
  `;

  return (
      <StyledTopContainer>
        <div className="d-flex align-items-center">
          <StyledTitle>Arvan Challenge</StyledTitle>
          <span className="px-4">
            {`Welcome ${localStorage.getItem("username")}`}{" "}
          </span>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </StyledTopContainer>
  );
}
