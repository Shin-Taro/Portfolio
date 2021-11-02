import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { icons } from "../styles/images";
import { Wrapper, Container, Box, Title, SubTitle, SmallText } from "../styles/utility";

const Skill = () => {
  const renderList = ():JSX.Element[] => {
    const list: JSX.Element[] = skills.map(item => {
      const levels: any[] = [];
      for (let i = 0; i < item.level; i++) {
        levels.push(<span key={item.id + "level" + i}>★</span>);
      }
      return(
        <Item key={item.id}>
          <TitleContainer>
            <SubTitle>{item.name}</SubTitle>
            <Icon src={item.img} alt={item.imgAlt} />
          </TitleContainer>
          <SubTitle>{levels}</SubTitle>
          <SmallText>{item.desc}</SmallText>
        </Item>
      );
    });
    return list;
  };
  return(
    <Wrapper>
      <Container>
        <Box>
          <Title>My Skills</Title>
        </Box>
        <Box>
          <List>
            {renderList()}
          </List>
          <Notes>※星の数は相対的な得意度です</Notes>
        </Box>
      </Container>
    </Wrapper>
  );
};

type SkillItem = {
  id: number,
  name: string,
  img: string,
  imgAlt: string,
  level: number,
  desc: string
}

type SkillList = SkillItem[]

const skills: SkillList = [
  {
    id: 1,
    name: "HTML",
    img: icons.HTML5,
    imgAlt: "HTML5のロゴ",
    level: 5,
    desc: "実務でWebサイト制作をしています。"
  },
  {
    id: 2,
    name: "CSS",
    img: icons.CSS3,
    imgAlt: "CSS3のロゴ",
    level: 5,
    desc: "大抵のスタイリングは問題無くできます。やればやるほど奥が深いです。"
  },
  {
    id: 3,
    name: "SCSS",
    img: icons.Sass,
    imgAlt: "Sassのロゴ",
    level: 4,
    desc: "実務でCSSを書くときはsassで書いてます。"
  },
  {
    id: 4,
    name: "JavaScript",
    img: icons.JavaScript,
    imgAlt: "JavaScriptのロゴ",
    level: 4,
    desc: "やっとクセをつかんできた感じがします。"
  },
  {
    id: 5,
    name: "jQuery",
    img: icons.jQuery,
    imgAlt: "jQueryのロゴ",
    level: 4,
    desc: "サイト制作でアニメーションや簡単な動きをつける際に使用しています。"
  },
  {
    id: 6,
    name: "React",
    img: icons.React,
    imgAlt: "Reactのロゴ",
    level: 3,
    desc: "モダンな技術でアプリ開発がしたいと思い勉強中です。"
  },
  {
    id: 7,
    name: "TypeScript",
    img: icons.TypeScript,
    imgAlt: "TypeScriptのロゴ",
    level: 1,
    desc: "最近手を出し始めました。まだまだ使いこなません。"
  },
  {
    id: 8,
    name: "jest",
    img: icons.jest,
    imgAlt: "jestのロゴ",
    level: 1,
    desc: "Reactで作ったアプリはjestでテストを書いています。実務でテストを書いたことがないので勉強中です。"
  },
  {
    id: 9,
    name: "Firebase",
    img: icons.Firebase,
    imgAlt: "Firebaseのロゴ",
    level: 2,
    desc: "個人開発の際にHosting・Firestore・Authentication等を利用しています。"
  },
];

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.li`
  width: 32%;
  margin-top: 40px;
  padding: 30px;
  border: solid 1px ${props => props.theme.color.white};
  border-radius: 10px;
  ${media.lessThan("medium")`
    width: 100%;
    padding: 20px;
  `};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  max-height: 60px;
  max-width: 160px;
  padding-right: 20px;
`;

const Notes = styled(SmallText)`
  text-align: center;
  margin-top: 50px;
`;

export default Skill;