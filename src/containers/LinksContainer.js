import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import GroupList from '../components/GroupList';

const StyledLinksComponent = styled.div`
    height: 50em;
    width: 80%;
    margin: 0 auto;
`;

class LinksComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.addGroup('name1', 'color1');
    }

    render() {
        return (
            <StyledLinksComponent>
                <GroupList  {...this.props} />
            </StyledLinksComponent>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups,
    links: state.links
});

const LinksContainer = connect(
    mapStateToProps,
    actions
)(LinksComponent);

export default LinksContainer;