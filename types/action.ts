export type ActionResponse<T> = {
    data?: T
    status: boolean
    error?: string
  }