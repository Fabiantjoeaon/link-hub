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

const GroupLinksList = ({links, ...props}) => (
    <StyledGroupLinksList>
        {links.map(link =>
            <Link id={link.id} key={link.id} {...props} {...link} />
        )}
    </StyledGroupLinksList>
);

export default GroupLinksList;