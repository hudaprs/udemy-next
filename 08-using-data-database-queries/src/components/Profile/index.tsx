'use client'

// React
import { memo } from 'react'

// Next Auth
import { useSession } from 'next-auth/react'

const Profile = memo(() => {
	const session = useSession()

	if (session.data?.user) {
		return <div>User is signed in {JSON.stringify(session.data.user)}</div>
	}

	return <div>User is signed out</div>
})

Profile.displayName = 'Profile'

export { Profile }
