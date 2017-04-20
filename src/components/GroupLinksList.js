import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const StyledGroupLinksList = styled.table`
    margin: 0 auto;
    
    width: 85%;
`;

const GroupLinksList = ({links, ...props}) => (
    <StyledGroupLinksList>
        {links.map(link =>
            <Link id={link.id} key={link.id} {...props} {...link} />
        )}
    </StyledGroupLinksList>
);

export default GroupLinksList;