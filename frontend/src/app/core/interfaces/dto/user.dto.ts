export interface userDto {
  email: string;
  firstName: string;
  id?: string;
  lastName: string;
  password: string;
  phone: string;
}

export interface user {
  token: string;
  user: userDto;
}
