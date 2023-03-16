import { useEffect, useState } from "react";
import axios from "axios";
import ShootingsTable from "./ShootingsTable";
import Actions from "./Actions";
import useUser from "../hooks/useUser";
import { getAuthKey } from "../utils";
import { Segment } from "semantic-ui-react";

// config axios requests
const client = axios.create({
  baseURL: "http://lpl.gils.xyz",
});
client.interceptors.request.use((config) => {
  const token = getAuthKey();
  // On assume ici que les requêtes GET n'ont pas besoin d'être authentifiées
  if (token && config.method !== "get") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Shooting App
function Shootings() {
  const [shootings, setShootings] = useState([]);
  const [editedShooting, setEditedShooting] = useState();
  const { user, setUser } = useUser();

  useEffect(() => {
    client.get("/shooting/get").then((res) => {
      setShootings(res.data);
    });
  }, []);

  function checkLogin(email, password) {
    client
      .get("/user/check-login.php", {
        params: { email: email, password: password },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((reason) => alert(reason));
  }

  function addUser(email, password) {
    client
      .put("/user/create", {
        email: email,
        password: password,
      })
      .then((response) => {
        alert("user added", response);
      })
      .catch((reason) => alert(reason));
  }

  function addShooting(photographer, model, date, type, status) {
    client
      .post("/shooting/add", {
        photographer: photographer,
        model: model,
        date: date,
        type: type,
        status: status,
      })
      .then(() => {
        setShootings([
          ...shootings,
          {
            photographer: photographer,
            model: model,
            date: date,
            type: type,
            status: status,
          },
        ]);
      })
      .catch((reason) => alert(reason));
  }

  function editShooting(shootingId) {
    editedShooting === shootingId
      ? setEditedShooting(null)
      : setEditedShooting(shootingId);
  }

  function putShooting(photographer, model, date, type, status) {
    client
      .post("/shooting/update", {
        id: editedShooting,
        photographer: photographer,
        model: model,
        date: date,
        type: type,
        status: status,
      })
      .then(() => {
        const nextShooting = shootings.map((shooting) => {
          if (shooting.id === editedShooting) {
            return {
              id: editedShooting,
              photographer: photographer,
              model: model,
              date: date,
              type: type,
              status: status,
            };
          }
          return shooting;
        });
        setShootings(nextShooting);
      })
      .catch((reason) => alert(reason));
  }

  return (
    <>
      <ShootingsTable
        user={user}
        data={shootings}
        editedShooting={editedShooting}
        editShooting={editShooting}
      />
      <Segment.Group style={{ padding: "2em" }}>
        <Actions
          user={user}
          checkLogin={checkLogin}
          addUser={addUser}
          addShooting={addShooting}
          editedShooting={editedShooting}
          putShooting={putShooting}
        />
      </Segment.Group>
    </>
  );
}

export default Shootings;
