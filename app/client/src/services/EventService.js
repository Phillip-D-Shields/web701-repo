import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("https://web701final.netlify.app/events");
    return res.data;
  },
  async getEventSingle(eventId, accessToken) {
    let res = await axios.get("https://web701final.netlify.app/events/" + eventId, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return res.data;
  }
}