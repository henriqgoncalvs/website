export type GuestbookMessage = {
  id: string;
  author: {
    id: string;
    name: string | null;
  };
  message: string;
};
