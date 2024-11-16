import "./App.css";
import Profile from "./profile/Profile.jsx";
import userData from "../data/userData.json";
import friends from "../data/friendList.json";
import transactions from "../data/transactions.json";
import FriendList from "./friend-list/FriendList.jsx";
import TransactionHistory from "./transactions/TransactionHistory.jsx";

function App() {

    return (
        <>
            <Profile name={userData.username} tag={userData.tag} location={userData.location} image={userData.avatar} stats={userData.stats}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions}/>
        </>
    );
}

export default App;
