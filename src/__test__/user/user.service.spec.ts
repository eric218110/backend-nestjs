import { Test } from '@nestjs/testing'
import { UserService } from '@modules/user/user.service'

describe('UserService', () => {
  let sut: UserService

  beforeAll(async () => {
    const refModule = await Test.createTestingModule({
      providers: [UserService]
    }).compile()
    sut = refModule.get(UserService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })
})
