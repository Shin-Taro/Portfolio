import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import HPImg from "../images/HP.png";
import AppImg from "../images/myApp.png";

const Works = () => {
  const renderList = ():JSX.Element[] => {
    const list = works.map(item => {
      const textList = item.desc.map((item, index) => {
        return(
          <li key={index}>{item}</li>
        );
      });
      return(
        <li key={item.id}>
          <h1>{item.title}</h1>
          <div>
            <img src={item.img} alt={item.imgAlt} />
            <div>
              <h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </h2>
              <ul>
                {textList}
              </ul>
              {item.source && 
                <p><a href={item.source} target="_blank" rel="noopener noreferrer">ソースコード</a></p>
              }
              {item.memo && 
                <p><a href={item.memo} target="_blank" rel="noopener noreferrer">Qiitaに学習記録を残しています</a></p>
              }
            </div>
          </div>
        </li>
      );
    })
    return list
  };

  return(
    <Wrapper>
      <h1>Works</h1>
      <ul>
        {renderList()}
      </ul>
    </Wrapper>
  );
};

type WorkItem = {
  id: string,
  title: string,
  img: string,
  imgAlt: string,
  link: string,
  name: string,
  desc: string[],
  source?: string,
  memo?: string,
}

type WorkList = WorkItem[]

const works: WorkList = [
  {
    id: "portfolio",
    title: "Portfolioサイト",
    img: AppImg,
    imgAlt: "自己紹介サイト",
    link: "#",
    name: "自己紹介サイト",
    desc: [
      "React,TypeScript,styled-component",
      "このサイトです。自己紹介サイトが欲しいと思い作成しました。",
    ],
    source: "#",
    memo:"#",
  },
  {
    id: "homepage",
    title: "HP制作",
    img: HPImg,
    imgAlt: "コーポーレートサイト",
    link: "https://cleanstyle.net/",
    name: "コーポレートサイト",
    desc: [
      "html,css/scss,jQuery",
      "実務でHP制作をしています。こちらのサイトは主にjQueryを使った動きの部分を担当しました。",
      "その他にもLP制作や他社HP等も制作しています。",
    ],
  },
  {
    id: "original",
    title: "個人開発",
    img: AppImg,
    imgAlt: "Qiitaの記事検索アプリ",
    link: "https://react-customizeqiita-pwa.web.app/",
    name: "Qiitaの記事検索アプリ",
    desc: [
      "React,scss,TypeScript,firebase",
      "QiitaAPIv2を使って記事検索アプリを作りました。",
    ],
    source: "https://github.com/Shin-Taro/Article-Search-App",
    memo:"https://qiita.com/Shin-Taro/items/0c2e07115a144ffa994c",
  },
];

const Wrapper = styled.div`
  width: 73vw;
  margin: 0 auto;
  ${media.lessThan("medium")`
    width: 85vw;
  `}
`;

export default Works;