import styled from 'styled-components';

export const ComparativePanel = styled.div`
  justify-content: space-evenly;
  flex-direction: column;
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const NutritionFact = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.h3`
  margin-bottom: 8px;
`;

export const DisplayName = styled.span`
  color: var(--dracula-orchid);
  font-weight: 900;
`;

export const AmountLabel = styled.span`
  color: var(--american-river);
  font-weight: 400;
`;