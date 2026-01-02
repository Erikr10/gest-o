
export interface Client {
  id: string;
  name: string;
  avatar: string;
  status: 'active' | 'inactive' | 'pending';
  lastPurchase: string;
  phone: string;
  overdueDays?: number;
}

export interface Interaction {
  id: string;
  type: 'sale' | 'call' | 'message';
  title: string;
  date: string;
  description: string;
  value?: number;
}

export interface ContactReminder {
  id: string;
  clientName: string;
  clientAvatar: string;
  time: string;
  overdue?: boolean;
}
