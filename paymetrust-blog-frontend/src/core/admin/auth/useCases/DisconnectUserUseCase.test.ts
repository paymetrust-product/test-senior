import AuthUserLocalStorageSingletonRepository from "../repositories/AuthUserLocalStorageSingletonRepository";
import DisconectUserUseCase from "./DisconnectUserUseCase";

describe("Test DisconnectUserUseCase", ()=>{
  test("Test success disconnection", ()=>{
    const AuthUserLocalStorageSingletonRepository = {
      remove: jest.fn()
    } as unknown as AuthUserLocalStorageSingletonRepository
    const mockCallBack = jest.fn()

    const disconectUserUseCase = new DisconectUserUseCase(AuthUserLocalStorageSingletonRepository)

    disconectUserUseCase.execute(mockCallBack)

    expect(AuthUserLocalStorageSingletonRepository.remove).toHaveBeenCalled()
    expect(mockCallBack).toHaveBeenCalled()
  })

  test("Test failed disconnection", ()=>{
    const AuthUserLocalStorageSingletonRepository = {
      remove: jest.fn(()=>{ throw new Error("")})
    } as unknown as AuthUserLocalStorageSingletonRepository
    const mockCallBack = jest.fn()

    const disconectUserUseCase = new DisconectUserUseCase(AuthUserLocalStorageSingletonRepository)

    expect(()=>disconectUserUseCase.execute(mockCallBack)).toThrow(Error)

    expect(AuthUserLocalStorageSingletonRepository.remove).toHaveBeenCalled()
    expect(mockCallBack).toHaveBeenCalledTimes(0)
  })
})
