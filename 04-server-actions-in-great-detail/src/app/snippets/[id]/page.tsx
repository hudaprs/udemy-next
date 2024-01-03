// DB
import { db } from '@/db'

// Next
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Actions
import * as actions from '@/actions'

type TSnippetDetailProps = {
	params: {
		id: string
	}
}

export default async function SnippetDetailPage(props: TSnippetDetailProps) {
	await new Promise(resolve => setTimeout(resolve, 2000))

	const snippetDetail = await db.snippet.findFirst({
		where: { id: props.params.id }
	})

	if (!snippetDetail) return notFound()

	const snippetDeleteAction = actions.snippetDelete.bind(null, {
		id: props.params.id
	})

	return (
		<div className='py-4'>
			<div className='flex flex-row items-center justify-between mb-4'>
				<h1 className='font-bold text-[16px]'>{snippetDetail.title}</h1>
				<div className='flex flex-row gap-2'>
					<Link
						href={`/snippets/${snippetDetail.id}/edit`}
						className='p-2 border rounded'
					>
						Edit
					</Link>
					<form action={snippetDeleteAction}>
						<button className='p-2 border rounded'>Delete</button>
					</form>
				</div>
			</div>

			<pre className='p-3 border rounded bg-gray-200 border-gray-200'>
				<code>{snippetDetail.code}</code>
			</pre>
		</div>
	)
}
