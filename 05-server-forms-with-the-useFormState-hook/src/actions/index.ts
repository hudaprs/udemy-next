'use server'

// DB
import { db } from '@/db'

// Next
import { redirect } from 'next/navigation'

type TSnippetCreateAttrs = {
	title: string
	code: string
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
 * @param {TSnippetCreateAttrs} snippet
 *
 * @return {Promise<void>} Promise<void>
 */
export const snippetCreate = async ({
	title,
	code
}: TSnippetCreateAttrs): Promise<void> => {
	await db.snippet.create({
		data: {
			title,
			code
		}
	})

	redirect(`/snippets`)
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
