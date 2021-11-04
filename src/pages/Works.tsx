import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { WebSites, icons } from "../styles/images";
import { Wrapper, Container, Box, Title, SubTitle, Text, SmallText } from "../styles/utility";

const Works = () => {
  const renderList = ():JSX.Element[] => {
    const list: JSX.Element[] = works.map(item => {
      const iconList = item.tech.map((item, index) => {
        return(
          <Icon key={index} src={item.img} alt={item.imgAlt} />
        );
      });

      const textList = item.desc.map((item, index) => {
        return(
          <li key={index}><SmallText>{item}</SmallText></li>
        );
      });

      return(
        <li key={item.id}>
          <Box>
            <TitleContainer>
              <WorkTitle>{item.title}</WorkTitle>
              <IconList>{iconList}</IconList>
            </TitleContainer>
            <FlexContainer>
              <StyledImg src={item.img} alt={item.imgAlt} />
              <TextContainer>
                <h2>
                  <StyledLink href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </StyledLink>
                </h2>
                <TextList>
                  {textList}
                </TextList>
                {item.source && 
                  <p><SubLink href={item.source} target="_blank" rel="noopener noreferrer">・ソースコード</SubLink></p>
                }
                {item.memo && 
                  <p><SubLink href={item.memo} target="_blank" rel="noopener noreferrer">・Qiitaに学習記録を残しています</SubLink></p>
                }
              </TextContainer>
            </FlexContainer>
          </Box>
        </li>
      );
    })
    return list
  };

  return(
    <Wrapper>
      <WorkContainer>
        <Box>
          <Title>Works</Title>
        </Box>
        <ul>
          {renderList()}
        </ul>
      </WorkContainer>
    </Wrapper>
  );
};

type TechImg = {
  img: string,
  imgAlt: string
}

type WorkItem = {
  id: string,
  title: string,
  tech : TechImg[],
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
    tech: [
      {img: icons.React, imgAlt:"Reactのロゴ"},
      {img: icons.TypeScript, imgAlt:"TypeScriptのロゴ"},
    ],
    img: WebSites.Port,
    imgAlt: "自己紹介サイト",
    link: "#",
    name: "自己紹介サイト",
    desc: [
      "このサイトです。",
      "自己紹介サイトが欲しいと思い作成しました。",
    ],
    source: "https://github.com/Shin-Taro/Portfolio",
    memo:"#",
  },
  {
    id: "homepage",
    title: "HP制作",
    tech: [
      {img: icons.HTML5, imgAlt:"HTML5のロゴ"},
      {img: icons.Sass, imgAlt:"Sassのロゴ"},
      {img: icons.jQuery, imgAlt:"jQueryのロゴ"},
    ],
    img: WebSites.HP,
    imgAlt: "コーポーレートサイト",
    link: "https://cleanstyle.net/",
    name: "コーポレートサイト",
    desc: [
      "実務でHP制作をしています。",
      "こちらのサイトは主にjQueryを使った動きの部分を担当しました。",
      "その他にもLP制作や他社HP等も制作しています。",
    ],
  },
  {
    id: "original",
    title: "個人開発",
    tech: [
      {img: icons.React, imgAlt:"Reactのロゴ"},
      {img: icons.TypeScript, imgAlt:"TypeScriptのロゴ"},
      {img: icons.Sass, imgAlt:"Sassのロゴ"},
      {img: icons.jest, imgAlt:"jestのロゴ"},
      {img: icons.Firebase, imgAlt:"Firebaseのロゴ"},
    ],
    img: WebSites.App,
    imgAlt: "Qiitaの記事検索アプリ",
    link: "https://react-customizeqiita-pwa.web.app/",
    name: "Qiitaの記事検索アプリ",
    desc: [
      "QiitaAPIv2を使って記事検索アプリを作りました。",
    ],
    source: "https://github.com/Shin-Taro/Article-Search-App",
    memo:"https://qiita.com/Shin-Taro/items/0c2e07115a144ffa994c",
  },
];

const WorkContainer = styled(Container)`
  width: 60vw;
  ${media.lessThan("medium")`
    width: ${props => props.theme.layout.width.large};
  `};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${props => props.theme.color.white};
`;

const WorkTitle = styled(SubTitle)`
`;

const IconList = styled.div`
`;

const Icon = styled.img`
  height: 50px;
  &:not(:first-child){
    margin-left: 20px;
    ${media.lessThan("medium")`
      margin-left: 10px;
    `};
  }
  ${media.lessThan("medium")`
    height: 25px;
  `};
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  ${media.lessThan("medium")`
    display: block;
    margin-top: 20px;
  `};
`;

const StyledImg = styled.img`
  display: block;
  width: 400px;
  height: auto;
  max-width: 45%;
  ${media.lessThan("medium")`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  `};
`;

const TextContainer = styled.div`
  margin-left: 40px;
  ${media.lessThan("medium")`
    margin-top: 20px;
    margin-left: 0;
  `}
`;

const TextList = styled.ul`
  margin-top: 40px;
  ${media.lessThan("medium")`
    margin-top: 20px;
  `}
`;

const StyledLink = Text.withComponent("a");

const SubLink = SmallText.withComponent("a");

export default Works;