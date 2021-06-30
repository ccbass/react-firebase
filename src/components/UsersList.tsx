import React from 'react';
import { formatDate } from '../utilities/ingest-utils';
import './UsersList.css'

type ListProps = {
  users: Array<any>,
}

function UsersList({ users }: ListProps) {
  if(users){
    return (
      <div>
        <div className='users-grid'>
          <div>Username</div>
          <div>Display Name</div>
          <div>Public Repos</div>
          <div>Public Gists</div>
          <div>Followers</div>
          <div>Following</div>
          <div>Date Joined</div>
        </div>
        {users
          .map( (user, index) => {
            const formattedDate = formatDate(user.created_at);
            
            return (
            <div key={`${user.id}-${index}`} className='users-grid'>
              <div><a href={user.html_url}>{user.login}</a></div>
              <div>{user.name ? user.name : user.login}</div>
              <div>{user.public_repos}</div>
              <div>{user.public_gists}</div>
              <div>{user.followers}</div>
              <div>{user.following}</div>
              <div>{formattedDate}</div>
            </div>
            )
          })
        }
      </div>
    );
  }
  return null;
}

export default UsersList;
