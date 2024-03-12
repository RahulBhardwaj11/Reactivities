import { useEffect, useState } from "react";

import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((resp) => setActivities(resp.data));
  }, []);
  
  return (
    <>
      <div>
        <Header as="h2" icon="users" content="Reactivities" />
      </div>
      <List>
        {activities.map((activity: any) => (
          <List.Item>{activity.title}</List.Item>
        ))}
      </List>
    </>
  );
}

export default App;
