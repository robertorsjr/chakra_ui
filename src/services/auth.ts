type ResponseProps = {
  token: string;
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export function signInPromise(): Promise<ResponseProps> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'lkmasdiuyahsdokamAIJsbfaksmdaskomdj',
        id: 1,
        name: 'roberto',
        email: 'robertorsjr@hotmail.com',
        avatar: 'https://avatars.githubusercontent.com/u/71423080?v=4',
      });
    }, 2000);
  });
}
