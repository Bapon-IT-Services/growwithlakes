import styled from 'styled-components';

export const FormWrap = styled.div`
  text-align: left;

  .ant-form-item-label > label {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.muted};
  }

  .ant-input,
  .ant-input-affix-wrapper,
  .ant-select-selector {
    background: rgba(255, 255, 255, 0.03) !important;
    border-color: ${({ theme }) => theme.colors.border} !important;
  }

  .ant-input:hover,
  .ant-select-selector:hover {
    border-color: rgba(212, 175, 55, 0.45) !important;
  }

  .ant-input:focus,
  .ant-select-focused .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.gold} !important;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.12) !important;
  }
`;

export const Row = styled.div`
  display: grid;
  gap: 0 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;
