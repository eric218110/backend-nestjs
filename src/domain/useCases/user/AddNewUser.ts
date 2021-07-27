export namespace AddNewUser {
  export interface Protocol {
    addUser: (user: Params) => Response
  }
  export interface Params {
    name: string
    email: string
  }
  export type Response = Params & {
    id: string
  }
}
