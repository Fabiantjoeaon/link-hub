import React from 'react';
import Group from './Group';
import styled from 'styled-components';

const StyledGroupList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
`;

const GroupList = ({ groups, links, ...props}) => (
    <div>
        {groups.map(group =>
            <Group
                key={group.id}
                {...group}
                {...props} />
        )}
    </div>
);

export default GroupList;