// Next
import { notFound } from 'next/navigation'

// Components
import { Editor } from './_components'

// DB
import { db } from '@/db'

type TSnippetEditProps = {
	params: {
		id: string
	}
}

export default async function SnippetEditPage({ params }: TSnippetEditProps) {
	const snippetDetail = await db.snippet.findFirst({ where: { id: params.id } })

	if (!snippetDetail) return notFound()

	return (
		<div className='my-3'>
			<Editor snippet={snippetDetail} />
		</div>
	)
}
