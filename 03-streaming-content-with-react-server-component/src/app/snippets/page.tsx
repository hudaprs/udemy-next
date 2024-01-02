// DB
import { db } from '@/db'

// Next
import Link from 'next/link'

export default async function SnippetPage() {
	const snippets = await db.snippet.findMany()

	return (
		<>
			<h1 className='font-bold text-[16px]'>Snippet List</h1>

			{snippets.map(snippet => (
				<Link href={`/snippets/${snippet.id}`} key={snippet.id}>
					<div className='flex flex-row items-center justify-between border mb-2 mt-4 p-2'>
						<h1>{snippet.title}</h1>
						<div className='cursor-pointer'>View</div>
					</div>
				</Link>
			))}
		</>
	)
}
