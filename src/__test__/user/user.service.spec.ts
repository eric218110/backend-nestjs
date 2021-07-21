import { Test } from '@nestjs/testing'
import { AppService } from '@modules/user/user.service'

describe('UserService', () => {
  let sut: AppService

  beforeAll(async () => {
    const refModule = await Test.createTestingModule({
      providers: [AppService]
    }).compile()
    sut = refModule.get(AppService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })
})
