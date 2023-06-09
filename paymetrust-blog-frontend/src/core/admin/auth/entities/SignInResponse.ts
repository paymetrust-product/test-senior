export interface SignInResponse {
  profile:   SignInProfile;
  token:     string;
  expiresIn: number;
}

export interface SignInProfile {
  username: string;
  role:     SignInRole;
}

export interface SignInRole {
  id:          number;
  label:       string;
  permissions: Permission[];
  createdBy:   CreatedBy;
  createdAt:   string;
}

export interface CreatedBy {
  id:       number;
  username: string;
}

export interface Permission {
  id:   number;
  name: PermissionType;
}

export enum PermissionType {
  SEE_ADMINS = 'SEE_ADMINS',
  MANAGE_ADMINS = 'MANAGE_ADMINS',
  MANAGE_ARTICLES = 'MANAGE_ARTICLES',
}

