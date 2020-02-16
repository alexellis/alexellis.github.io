import axios from 'axios';

class LeaderboardApi {
  constructor() {

    if (process && process.env && process.env.NODE_ENV === 'development') {
      this.baseURL = 'http://localhost:3000';
      this.apiBaseUrl = '';
    } else {
      this.baseURL = "https://alexellis.o6s.io";
      this.apiBaseUrl = "";
    }
    this.results = [];
  }

  fetch() {

    const url = `${this.baseURL}${this.apiBaseUrl}/leaderboard`;

    return axios
      .get(url)
      .then(res => this.parseResponse(res))
      .then(data => {
        this.results = data;
      });
  }

  parseResponse({ data }) {
    if(data) {
      return data.sort((a,b)=>{
        if(a.IssuesCreated> b.IssuesCreated) {
          return -1
        } else if(b.IssuesCreated> a.IssuesCreated) {
          return 1
        }
        return 0
      })
    }
    return [];
  }
}

// export const leaderboardApi = new LeaderboardApi();

export default LeaderboardApi;