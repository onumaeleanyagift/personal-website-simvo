import styled from "styled-components";
import { PrimaryColor } from "./stockAnalysisDahboard";

type NewsLink = {
  title: string;
  link: string;
};

type NewsLinksListProps = {
  newsLinks?: NewsLink[];
};

const NewsListContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NewsItem = styled.a`
  display: block;
  width: 100%;
  font-size: 14px;
  color: ${PrimaryColor};
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
`;

const ScrollableList = styled.div`
  max-height: 55%;
  overflow-y: auto;
`;

export default function NewsLinksList({ newsLinks = [] }: NewsLinksListProps) {
  return (
    <NewsListContainer>
      <div style={{ marginBottom: "10px" }}>In The News</div>
      <ScrollableList>
        {newsLinks.map((newsLink, index) => (
          <NewsItem
            key={`${newsLink.link}-${index}`}
            href={newsLink.link}
            target="_blank"
            rel="noopener noreferrer"
            title={newsLink.title}
          >
            {newsLink.title}
          </NewsItem>
        ))}
      </ScrollableList>
    </NewsListContainer>
  );
}
