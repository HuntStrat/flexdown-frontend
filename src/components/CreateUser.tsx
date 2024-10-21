import React, { useEffect, useState } from 'react';
import { Chat } from 'stream-chat-react';
import { createUser } from '../utils/createUserChat';
import Messenger from '../components/Messanger'; // Import Messenger

const userId: string = 'delicate-pond-6';
const userName: string = 'delicate';

const CreateUser: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { client, user, userToken } = createUser(userId, userName);

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(user, userToken);
      setIsConnected(true);
    };
  
    connectUser();
  
    return () => {
      client.disconnectUser(); // Make sure this function is synchronous
    };
  }, [client, user, userToken]);
  if (!isConnected) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Messenger /> 
    </Chat>
  );
};

export default CreateUser;
