import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import styled from 'styled-components';
import {toggleBottomPanelVisibility} from '../actions';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import ToolbarIcon from '../components/SvgIcon';

const StyledToolbar = styled.section`
    position: fixed;
    width: 50%;
    z-index: 3;
    bottom: 7.5%;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-around;
`;

const AddLinkIcon = () => (
    <svg width="75" height="75" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
        <path
            id="Plusicon"
            d="M40.664 36.06V18h-4.956v18.06H17.372v4.88h18.336V59h4.956V40.94H59v-4.88H40.664zM38 73C18.67 73 3 57.33 3 38S18.67 3 38 3s35 15.67 35 35-15.67 35-35 35z"
            fill="#525252" fillRule="evenodd"/>
    </svg>
)

class _Toolbar_ extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledToolbar>
                <ToolbarIcon
                    layout='Toolbar'
                    path={'/add_link'}
                    {...this.props}>
                    <AddLinkIcon/>
                </ToolbarIcon>
            </StyledToolbar>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    isBottomPanelVisible: getIsBottomPanelVisible(state),
});

const mapDispatchToProps = (dispatch) => ({
   onSvgIconClick(path) {
       dispatch(push(path))
   }
});

const Toolbar = connect(mapStateToProps, mapDispatchToProps)(_Toolbar_);
export default Toolbar;

