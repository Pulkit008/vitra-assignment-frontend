import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ButtonAppBar from '../../components/Navbar/Navbar';
import FriendList from '../../components/LandingPage/FriendList/FriendList';
class FriendsList extends Component {

    componentDidMount() {
        if(this.props.peopleData == null){
            this.props.onGetPeopleData()
        }
    }

    render() {

        let errMsg = ''
        if (this.props.error !== null) {
            errMsg = this.props.error
        }

        let friendList = null
        if(this.props.peopleData !== null){
            friendList=<FriendList peopleData={this.props.peopleData}/>
        }

        let landingPage = <div>
            {errMsg}
            <ButtonAppBar />
            <main>  
                <h1 align="center">Friend's List of People who are InActive</h1>
                {friendList}
            </main>
            {/* <Footer /> */}
        </div>;
        return landingPage;
    }
}

const mapStateToProps = state => {
    return {
        peopleData: state.people.peopleData,
        loading: state.people.loading,
        error: state.people.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPeopleData: () => dispatch(actions.getPeopleData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);