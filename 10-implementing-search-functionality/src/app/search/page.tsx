import PostList from '@/components/posts/post-list'
import { fetchPostsBySearchTerm } from '@/db/queries/posts'
import { redirect } from 'next/navigation'

type TSearchPageProps = {
	searchParams: {
		term: string
	}
}

export default function SearchPage({ searchParams }: TSearchPageProps) {
	const { term } = searchParams

	if (!term) {
		redirect('/')
	}

	return (
		<div>
			<PostList fetchData={() => fetchPostsBySearchTerm(term)} />
		</div>
	)
}
