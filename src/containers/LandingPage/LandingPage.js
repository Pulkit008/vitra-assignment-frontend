import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ButtonAppBar from '../../components/Navbar/Navbar';
import ValueSlider from '../../components/LandingPage/Slider';
import PeopleList from '../../components/LandingPage/PeopleList/PeopleList';

class LandingPage extends Component {

    state = {
        value: 4000
    }

    componentDidMount() {
        if (this.props.peopleData == null) {
            this.props.onGetPeopleData()
        }
    }

    inputChangedHandler = (event) => {
        let val = event.target.value
        val = val * 40
        if (this.state.value !== val) {
            this.setState({ value: val });
            console.log(this.state.value)
        }
    }

    render() {

        let errMsg = ''
        if (this.props.error !== null) {
            errMsg = this.props.error
        }

        let peopleCardList = null
        if (this.props.peopleData !== null) {
            peopleCardList = <PeopleList peopleData={this.props.peopleData} filterValue={this.state.value} />
        }

        let landingPage = <div>
            {errMsg}
            <ButtonAppBar />
            <main>
                <h1 align="center">People Detail's</h1>
                <ValueSlider changed={(event) => this.inputChangedHandler(event)} />
                {peopleCardList}
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);