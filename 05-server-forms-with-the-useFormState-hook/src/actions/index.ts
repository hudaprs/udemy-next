'use server'

// DB
import { db } from '@/db'

// Next
import { redirect } from 'next/navigation'

type TSnippetCreateAttrs = {
	formState: { message: string }
}

type TSnippetUpdateAttrs = {
	id: string
	code: string
}

type TSnippetDeleteAttrs = {
	id: string
}

/**
 * @description Create snippet
 *
 * @param {string} formState.message
 * @param {FormData} formData
 *
 * @return {Promise<void>} Promise<void>
 */
export const snippetCreate = async (
	formState: TSnippetCreateAttrs['formState'],
	formData: FormData
) => {
	try {
		const title = formData.get('title') as string
		const code = formData.get('code') as string

		if (typeof title !== 'string' || title.length < 3) {
			return {
				message: 'Title should be more than 3 chars'
			}
		}

		if (typeof code !== 'string' || code.length < 10) {
			return {
				message: 'Code should be more than 10 chars'
			}
		}

		await db.snippet.create({
			data: {
				title,
				code
			}
		})
	} catch (err) {
		if (err instanceof Error) {
			return {
				message: err.message
			}
		} else {
			return {
				message: 'Something went wrong'
			}
		}
	}

	redirect('/snippets')
}

/**
 * @description Update snippet
 *
 * @param {TSnippetUpdateAttrs} snippet
 *
 * @return {Promise<void>} Promise<void>
 */
export const snippetUpdate = async ({
	id,
	code
}: TSnippetUpdateAttrs): Promise<void> => {
	await db.snippet.update({ where: { id }, data: { code } })

	redirect(`/snippets/${id}`)
}

/**
 * @description Delete snippet
 *
 * @param {TSnippetDeleteAttrs} snippet
 *
 * @return {Promise<void>} Promise<void>
 */
export const snippetDelete = async ({
	id
}: TSnippetDeleteAttrs): Promise<void> => {
	await db.snippet.delete({ where: { id } })

	redirect(`/snippets`)
}
