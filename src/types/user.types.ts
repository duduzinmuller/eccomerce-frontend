interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  provider: 'firebase' | 'google' | 'facebook'
}

export default User
