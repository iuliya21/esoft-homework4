import styles from "./ UserList.module.css";
import { useState, useEffect } from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function UserList() {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error("Ошибка при выполнении запроса: " + err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (users === null) return;

  return (
    <div>
      <div className={styles.titleContainer}>
        <h2>Список пользователей</h2>
        <AccessibilityNewIcon />
      </div>
      <ul className={styles.list}>
        {users.map((user, i) => (
          <li key={i} className={styles.user}>
            <p className={styles.id}>{`user #${user.id}`}</p>
            <p className={styles.title}>{`Имя пользователя: ${user.name}`}</p>
            <p
              className={styles.phone}
            >{`Телефон пользователя: ${user.phone}`}</p>
            <p
              className={styles.email}
            >{`E-mail пользователя: ${user.email}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
