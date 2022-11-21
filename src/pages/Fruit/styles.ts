import styled, { css } from 'styled-components';

export const Page = styled.div`
  flex-direction: column;
  min-height: 100vh;
  display: flex;
`;

export const Container = styled.main`
  padding: 48px 64px 32px;

  flex-direction: row;
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const subcontainer = () => css`
  flex-direction: column;
  display: flex;
  flex: 1;

  min-height: 256px;
`;

export const FruitSheet = styled.div`
  ${subcontainer};
`;

export const FruitName = styled.h2`
  color: var(--dracula-orchid);
  font-size: 256%;
  margin-bottom: 16px;
`;

export const FruitInformationList = styled.dl`
  line-height: 1.5;
`;

export const FruitLabel = styled.dt`
  color: var(--dracula-orchid);
  font-weight: 700;
  font-size: 128%;
`;

export const FruitInformation = styled.dd`
  color: var(--american-river);
  font-size: 128%;
  font-style: italic;
  margin-bottom: 16px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  align-items: center;
  display: flex;
`;

export const LinkIcon = styled.img`
  margin-left: 8px;
  width:  16px;
  height: 16px;
  filter: invert(.7);
`;

export const FruitStatistics = styled.div`
  ${subcontainer};
`;

export const UniqueStat = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const UniqueNutritionFact = styled.h3`
  color: var(--dracula-orchid);
  font-size: 256%;
  font-weight: 900;
`;

export const UniqueNutritionFactValue = styled.span`
  font-size: 192%;
  color: var(--american-river);
`;