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
    console.log(data);
    return data;
  }
}

// export const leaderboardApi = new LeaderboardApi();

export default LeaderboardApi;