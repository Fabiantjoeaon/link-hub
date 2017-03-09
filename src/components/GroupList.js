import React from 'react';
import Group from '../containers/Group';
import styled from 'styled-components';

const StyledGroupList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const GroupList = ({ groups, links, ...props}) => (
    <StyledGroupList>
        {groups.map(group =>
            <Group
                key={group.id}
                {...group}
                {...props} />
        )}
    </StyledGroupList>
);

export default GroupList;