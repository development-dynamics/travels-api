import { User } from 'src/users/domain/models/user.entity'

export class Client extends User {
  address: string
  total: number
}
