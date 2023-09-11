// import { getServerSession } from 'next-auth'
// import { authOptions } from '../app/api/auth/[...nextauth]/options'
import { useSession } from 'next-auth/react'

export default function getFetchSession() {
  const { data: session } = useSession()
  // console.log(session)

  const username = session?.user?.name
  const useremail = session?.user?.email
  const userimage = session?.user?.image
  return { username, useremail, userimage }
}
