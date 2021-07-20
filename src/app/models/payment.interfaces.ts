export interface Payment {
  id: string;
  status: string;
  paid: boolean;
  confirmation: {
    confirmation_url: string;
  };
  amount: {
    value: string;
  }
}
