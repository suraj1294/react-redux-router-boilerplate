import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_ABOUT_DETAILS, getDetails }  from './store/actions/about.actions';

 class About extends Component {
     componentDidMount(){
         console.log('dispatching the action from about js')
         this.props.getDetails();
     }
 render() {
     return <div>TEst</div>
 }
    
}

const mapStateToProps = state => ({
    list: state.details
});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            getDetails:getDetails
        }, dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(About);