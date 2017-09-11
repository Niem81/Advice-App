import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';

class Dashboard extends Component {

  componentWillMount(){
    console.log(this.props);
  }

  renderTopList() {
    if (this.props.topAdvices) {
      return this.props.topAdvices.map((top) => {
        var photo = top.thumbnail.path + ".jpg";
        return (
          <div className="col-md-4 col-sm-6 skill-panel" key={top.id}>
            <div className="panel panel-default service-box">
              <div className="panel-heading text-center">
                <h3 className="panel-title">{top.name}</h3>
              </div>
              <div class="panel-body">
                <img src={photo}/>
                <p className="text-muted">
                  {top.description}
                </p>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h1>We will upload some top Advices soon!</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.renderTopList()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  topAdvices: state.topAdvices;
}

export default Dashboard;
