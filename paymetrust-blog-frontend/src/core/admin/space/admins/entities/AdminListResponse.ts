export interface AdminListResponse {
  id:        number;
  username:  string;
  role:      Role;
  createdAt: string;
}

export interface Role {
  id:        number;
  label:     string;
  createdBy: CreatedBy;
  createdAt: string;
}

export interface CreatedBy {
  id:       number;
  username: string;
}
