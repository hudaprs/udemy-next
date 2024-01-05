'use client'

type TSnippetCreateErrorPageProps = {
	err: Error
	reset: () => void
}

export default function SnippetCreateErrorPage({
	err
}: TSnippetCreateErrorPageProps) {
	return <h1>{err.message}</h1>
}
