import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const StyledGroupLinksList = styled.table`
    margin: 0 auto;
    width: 85%;
`;

const GroupLinksList = ({links, ...props}) => (
    <StyledGroupLinksList cellspacing="0" cellpadding="0">
    <tbody>
        {links.map((link, i) =>
            <Link id={link.id} i={i} key={link.id} {...props} {...link} />
        )}
        </tbody>
    </StyledGroupLinksList>
);

export default GroupLinksList;