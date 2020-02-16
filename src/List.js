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
            <div id="links">
                <ul id="links-list" style={{'list-style-type': 'none'}}>
                    {this.state.results.map((item, index) => (
                    

                    <li id={item.UserLogin+'-item'} key={index.toString()}>
                        { item.IssuesCreated } - <a id={item.UserLogin+'-link'} class={item.IssuesCreated > 10 ? "hot" : "regular"} style={{color: 'white'}} rel="noopener noreferrer" target="_blank" href={'https://github.com/' + item.UserLogin}>{item.UserLogin}</a></li>
                    ))}
            </ul>
          </div>
        )
    }
}
export default UserList;
