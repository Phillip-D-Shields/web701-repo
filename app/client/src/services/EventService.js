import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("https://web7-backend.herokuapp.com/events");
    return res.data;
  },
  async getEventSingle(eventId, accessToken) {
    let res = await axios.get("https://web7-backend.herokuapp.com/events/" + eventId, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return res.data;
  }
}