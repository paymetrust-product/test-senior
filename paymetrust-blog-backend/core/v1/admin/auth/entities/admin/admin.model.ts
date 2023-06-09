export interface Admin {
  id: number;
  username: string;
  password: string;
  createdAt: Date;
  roleId: number;
}

export interface AdminAuthPayload {
  id: number;
  username: string;
  exp: number;
}
