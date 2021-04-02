import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
};
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret rendered");
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
};
const Users = React.memo(UsersSecret);
// React.memo это HOC, которая следит за пропсами UsersSecret. Если пропсы поменялись, то
// React.memo даёт зеленый свет на новую отрисовку. React.memo это просто очередная контейнерная
// компонента, которая следит: если пришли пропсы такие же, что и раньше, то свою внутреннюю
// компоненту UsersSecret, React.memo перерисовывать не будет - это нереальная оптимизация!

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

    const addUser = () => {
        const newUsers = [
            ...users,
            "Sveta " + new Date().getTime()
        ];
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={ addUser }>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
};

