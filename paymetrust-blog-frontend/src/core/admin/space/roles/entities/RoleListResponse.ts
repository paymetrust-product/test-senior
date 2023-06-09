import { PermissionType } from "src/core/admin/auth/entities/SignInResponse";

export interface RoleListResponse {
  id:          number;
  label:       string;
  createdBy:   CreatedBy;
  permissions: Permission[];
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
