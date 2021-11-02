import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: ${props => props.theme.layout.height.head.large};
  padding-bottom: ${props => props.theme.layout.height.foot.large};
  background-color: ${props => props.theme.color.dark};
  ${media.lessThan("medium")`
    padding-top: ${props => props.theme.layout.height.head.small};
  `}
`;

export const Container = styled.div`
  width: ${props => props.theme.layout.width.small};
  margin: 0 auto;
  ${media.lessThan("medium")`
    width: ${props => props.theme.layout.width.large};
  `}
`;

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.color[props.color]};
  font-size: ${props => props.theme.font.size.title.large};
  ${media.lessThan("medium")`
    font-size: ${props => props.theme.font.size.title.small};
  `}
`;

export const SmallText = styled.p`
  color: ${props => props.theme.color[props.color]};
  font-size: ${props => props.theme.font.size.secondary.large};
  ${media.lessThan("medium")`
    font-size: ${props => props.theme.font.size.secondary.small};
  `}
`;