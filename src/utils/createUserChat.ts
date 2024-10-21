// import { StreamChat } from 'stream-chat';

// const apiKey = 'dz5f4d5kzrue';

// export const createUser = (userId: string, userName: string) => {
//   const client = StreamChat.getInstance(apiKey);

//   // Generate a development token
//   const userToken = client.devToken(userId);

//   return {
//     client,
//     user: {
//       id: userId,
//       name: userName,
//     },
//     userToken,
//   };
// };


// export const createUser = async (userId: string, userName: string) => {
//   const apiKey = 'dz5f4d5kzrue';
//   const { StreamChat } = await import('stream-chat');
//   const client = StreamChat.getInstance(apiKey);

//   // Fetch token from backend
//   const response = await fetch('/api/token', {
//     method: 'POST',
//     body: JSON.stringify({ userId }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const data = await response.json();
//   const userToken = data.token;

//   return {
//     client,
//     user: {
//       id: userId,
//       name: userName,
//     },
//     userToken,
//   };
// };