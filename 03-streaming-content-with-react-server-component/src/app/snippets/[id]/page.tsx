// DB
import { db } from '@/db'

// Next
import { notFound } from 'next/navigation'

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

	return (
		<div className='py-4'>
			<div className='flex flex-row items-center justify-between mb-4'>
				<h1 className='font-bold text-[16px]'>{snippetDetail.title}</h1>
				<div className='flex flex-row gap-2'>
					<button className='p-2 border rounded'>Edit</button>
					<button className='p-2 border rounded'>Delete</button>
				</div>
			</div>

			<pre className='p-3 border rounded bg-gray-200 border-gray-200'>
				<code>{snippetDetail.code}</code>
			</pre>
		</div>
	)
}
