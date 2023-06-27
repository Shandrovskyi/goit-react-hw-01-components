import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './statistics/statistics';
import data from '../data/data.json';

import { FriendList } from './friendList/friendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './transactionHistory/transactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '350vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
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
