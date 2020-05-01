import React, { Component } from "react";

import ContentsContainer from "./ContentsContainer/ContentsContainer";
import CommunityContainer from "./CommunityContainer/CommunityContainer";
import FloatingBar from "../../Components/FloatingBar/FloatingBar";

import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [] && false,
      instagrams: [] && false,
    };
  }

  componentDidMount() {
    fetch("data/main_page.json")
      .then((res) => res.json())
      .then((res) => {
        this.makeGroup(res.data.cards);
        this.setState({
          instagrams: res.instagrams,
        });
      });
  }

  makeGroup(contents) {
    let section = [];
    let dividedContents = [];
    let sum = 0;

    contents.forEach((contents) => {
      contents.map((content, index) => {
        if (content.size !== undefined) {
          if (content.size >= 4) {
            //size 4 이상, 독자 Contents 차지
            dividedContents.push([content]);
          } else if (sum + content.size <= 4) {
            if (content.size === 1) {
              section.push(content);
              if (content.one !== undefined) {
                this.getContentsOne(content);
                sum += Number(content.one);
              } else {
                sum += content.size;
              }
            } else {
              section.push(content);
              sum += content.size;
            }
            if (sum === 4) {
              dividedContents.push(section);
              sum = 0;
              section = [];
            }
          }
        }
      });
    });

    this.setState({
      contents: Array.from(dividedContents),
    });
  }

  render() {
    return (
      <div className="Main">
        {this.state.contents && this.state.instagrams && (
          <>
            <ContentsContainer contents={this.state.contents} />
            <CommunityContainer instagrams={this.state.instagrams} />
            <FloatingBar />
          </>
        )}
      </div>
    );
  }
}

export default Main;
