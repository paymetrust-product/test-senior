export class AdminFormRequest {
  constructor(public username: string, public roleId: number, public password?: string) {}
}
