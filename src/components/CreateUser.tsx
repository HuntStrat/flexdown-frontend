
import React, { useEffect, useState } from 'react';
import { Chat } from 'stream-chat-react';
import { createUser } from '../utils/createUserChat';

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
      client.disconnectUser();
    };
  }, [client, user, userToken]);

  if (!isConnected) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      {/* Your chat components */}
      Chat with client is ready!
    </Chat>
  );
};

export default CreateUser;



// src/components/CreateUser.tsx
// import React, { useEffect, useState } from 'react';
// import { Chat } from 'stream-chat-react';
// import { createUser } from '../utils/createUser';

// const userId: string = 'delicate-pond-6';
// const userName: string = 'delicate';

// const CreateUser: React.FC = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [chatClient, setChatClient] = useState<any>(null);

//   useEffect(() => {
//     const initializeChat = async () => {
//       const { client, user, userToken } = await createUser(userId, userName);

//       await client.connectUser(user, userToken);
//       setChatClient(client);
//       setIsConnected(true);
//     };

//     initializeChat();

//     return () => {
//       if (chatClient) chatClient.disconnectUser();
//     };
//   }, []);

//   if (!isConnected || !chatClient) return <div>Setting up client & connection...</div>;

//   return (
//     <Chat client={chatClient}>
//       {/* Your chat components */}
//       Chat with client is ready!
//     </Chat>
//   );
// };

// export default CreateUser;
