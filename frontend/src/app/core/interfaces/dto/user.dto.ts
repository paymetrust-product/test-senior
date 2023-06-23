export interface userDto {
  email: string;
  firstName: string;
  id?: string;
  lastName: string;
  password: string;
  phone: string;
  role : any;
}

export interface user {
  token: string;
  user: userDto;
}


export interface loginDto {
  email : string,
  password: string;
}


