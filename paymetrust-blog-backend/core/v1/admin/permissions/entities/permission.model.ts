export interface Permission {
  id: number;
  name: PermissionType;
}

export enum PermissionType {
  SEE_ADMINS = 'SEE_ADMINS',
  MANAGE_ADMINS = 'MANAGE_ADMINS',
  MANAGE_ARTICLES = 'MANAGE_ARTICLES',
}
