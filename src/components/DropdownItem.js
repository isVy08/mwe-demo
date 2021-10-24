import React from "react";
import { Collapse } from "react-collapse";

import { css } from "@emotion/css";


class DropdownItem extends React.Component {
  state = {
    isDropdownOpen: false,
    dropdownToggleIcon: "+"
  };

  onDropdownClicked = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "-" : "+"
    }));
  };

  render() {



    return (
      <div
        className={css`
          margin: 20px;
          color: black;
          `}
        id={this.props.id}
      >
        <div
          className={css`
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid white;
          margin-bottom: 5px;
          padding: 5px;
          font-size: 18px;
          `}
        >
          <div>{this.props.title}</div>
          <button
            className={css`
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: black;
          `}


            onClick={this.onDropdownClicked}
          >
            {this.state.dropdownToggleIcon}
          </button>
        </div>
        <Collapse isOpened={this.state.isDropdownOpen}>
          <div className={css`text-align: left;`}>{this.props.children}</div>
        </Collapse>
      </div>
    );
  }
}

export default DropdownItem;


