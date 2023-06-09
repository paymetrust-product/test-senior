import { PermissionType } from "../../../../../core/admin/auth/entities/SignInResponse";

export interface RoleResponse {
  id:          number;
  label:       string;
  permissions?: Permission[];
  createdBy?:   CreatedBy;
  createdAt?:   string;
}

export interface CreatedBy {
  id:       number;
  username: string;
}

export interface Permission {
  id:   number;
  name: PermissionType;
}
