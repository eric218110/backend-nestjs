import { Test } from '@nestjs/testing'
import { AppService } from '@modules/app/app.service'

describe('AppService', () => {
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
