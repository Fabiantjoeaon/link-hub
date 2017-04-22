import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import styled from 'styled-components';
import {toggleBottomPanelVisibility} from '../actions';
import {getIsBottomPanelVisible} from '../reducers/dashboardReducer';
import ToolbarIcon from '../components/SvgIcon';

const StyledToolbar = styled.section`
    position: fixed;
    width: calc(100% - 80px);
    z-index: 3;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    flex-flow: row no-wrap;
    padding:0px 20px 25px 20px;
    justify-content: flex-start;
`;

const AddLinkIcon = () => (
    <svg width="75" height="75">
        <defs>
            <path id="a" d="M5 5h65v65H5z"/>
            <mask id="b" width="65" height="65" x="0" y="0" fill="#fff">
                <use xlinkHref="#a"/>
            </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path stroke="#000" strokeWidth="2" d="M42.9194024 37.1103474c-2.5584439-2.5584439-2.558911-6.7060339-.0031528-9.2617921l7.9317405-7.9317405c2.5567026-2.5567027 6.7027857-2.5558536 9.2617921.0031528 2.5584439 2.5584439 2.5589111 6.7060339.0031528 9.2617921l-7.9317404 7.9317405c-2.5567027 2.5567027-6.7027857 2.5558536-9.2617922-.0031528z"/>
            <path fill="#000" d="M27.6056724 56.537978l7.9317404-7.9317405c1.0515134-1.0515134 1.0510521-2.7602461-.0031528-3.814451-1.0549343-1.0549343-2.76216-1.0554438-3.814451-.0031528l-7.9317405 7.9317404c-1.0515133 1.0515134-1.0510521 2.7602461.0031529 3.8144511 1.0549342 1.0549342 2.7621599 1.0554438 3.814451.0031528zm18.185549-22.0031528c1.0549342 1.0549342 2.7621599 1.0554438 3.814451.0031528l7.9317404-7.9317405c1.0515134-1.0515134 1.0510521-2.7602461-.0031528-3.814451-1.0549343-1.0549343-2.76216-1.0554438-3.814451-.0031528l-7.9317405 7.9317404c-1.0515133 1.0515134-1.0510521 2.7602461.0031529 3.8144511z"/>
            <path stroke="#000" strokeWidth="2" d="M20.9194024 59.1103474c-2.5584439-2.5584439-2.558911-6.7060339-.0031528-9.2617921l7.9317405-7.9317405c2.5567026-2.5567027 6.7027857-2.5558536 9.2617921.0031528 2.5584439 2.5584439 2.5589111 6.7060339.0031528 9.2617921l-7.9317404 7.9317405c-2.5567027 2.5567027-6.7027857 2.5558536-9.2617922-.0031528z"/>
            <use stroke="#000" strokeWidth="4" mask="url(#b)" xlinkHref="#a"/>
            <path stroke="#000" strokeWidth="2" d="M20.5 21.5h12m-6-6v12" strokeLinecap="square"/>
        </g>
    </svg>

)

const _Toolbar_ = (props) => (
            <StyledToolbar>
                <ToolbarIcon
                    layout='Toolbar'
                    path={'/add_link'}
                    {...props}>
                    <AddLinkIcon/>
                </ToolbarIcon>
            </StyledToolbar>
);

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

