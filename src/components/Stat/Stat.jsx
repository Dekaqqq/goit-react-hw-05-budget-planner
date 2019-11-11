import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStat, Label, Value } from '../../styledComponents/styled';

const Stat = ({ label, value, isPositive }) => {
    return (
        <ContainerStat isPositive={isPositive}>
            <Label>{label}</Label>
            <Value>{value}&nbsp;&#x24;</Value>
        </ContainerStat>
    );
};

Stat.defaultProps = {
    isPositive: false,
};

Stat.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isPositive: PropTypes.bool,
};

export default Stat;
