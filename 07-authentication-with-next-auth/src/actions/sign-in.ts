'use server'

// Auth
import * as auth from '@/auth'

/**
 * @description Sign user in to specific provider
 *
 */
export async function signIn() {
	return auth.signIn('github')
}
