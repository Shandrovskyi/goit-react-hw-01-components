import { PageMain } from "components/pageMain/pageMain";
import user from "./user.json";


import {Statistics} from "components/statistics/statistics";
import data from "./data.json";


import {FriendList} from "components/friendList/friendList";
import friends from "./friends.json";

import { TransactionHistory } from "./transactionHistory/transactionHistory";
import transactions from "./transactions.json";


export const App = () => {
  return (
    <div 
      style={{
        height: '400vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
        
      }}
    >
      <PageMain 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />


    </div>
  );
};
