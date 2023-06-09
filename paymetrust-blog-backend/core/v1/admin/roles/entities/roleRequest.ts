export interface RoleCreateRequest {
  label: string;
  permissions: number[];
  creatorId: number;
}

export interface RoleUpdateRequest {
  label: string;
  permissions: number[];
}
