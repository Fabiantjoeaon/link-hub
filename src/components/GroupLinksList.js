import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const StyledGroupLinksList = styled.ul`
    margin: 0;
    margin-top: 10px;
    padding-left: 0px;
    width: 100%;
    display: block;
`;

const GroupLinksList = ({links}) => (
    <StyledGroupLinksList>
        {links.map(link =>
            <Link key={link.id} {...link} />
        )}
    </StyledGroupLinksList>
);

export default GroupLinksList;