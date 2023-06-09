import { PermissionType } from "../../../auth/entities/SignInResponse";

export interface AdminResponse {
  id:       number;
  username: string;
  role?:     Role;
}

export interface Role {
  id:          number;
  label:       string;
  permissions?: Permission[];
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
