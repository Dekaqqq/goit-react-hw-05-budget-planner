import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 340px 1fr;
    align-items: flex-start;
    grid-gap: 24px;
    max-width: 960px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
`;

export const labelStyles = `
  margin-bottom: 16px;  
`;

export const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
    width: 100%;

    tr {
        border-bottom: 1px solid #212121;
    }

    td,
    th {
        padding-top: 8px;
        padding-bottom: 8px;
    }
`;

export const ContainerStat = styled.div`
    text-align: center;
    padding: 8px 24px;
    color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
    user-select: none;
`;

export const Label = styled.p`
    margin-top: 0;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 24px;
`;

export const Value = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
`;

export const ContainerValue = styled.section`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;
