import React from 'react';
import LeaderboardApi from "./api.js"


export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leaderboardApi: new LeaderboardApi(),
            results: []
        }
    }

    componentDidMount() {
        this.state.leaderboardApi.fetch().then(()=>{
            this.setState({results: this.state.leaderboardApi.results})
        })
    }

    render() {

        return (
            <div>
            {this.state.results.map((item, index) => (
              <p>{item.UserLogin} - { item.IssuesCreated } issues created</p>
            ))}
          </div>
        )
    }
}
export default UserList;
