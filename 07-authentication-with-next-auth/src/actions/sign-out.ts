'use server'

// Auth
import * as auth from '@/auth'

/**
 * @description Sign user out
 *
 */
export async function signOut() {
	return auth.signOut()
}
