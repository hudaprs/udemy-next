'use client'

// Next
import Link from 'next/link'

// React
import { useFormState } from 'react-dom'

// Actions
import * as actions from '@/actions'

export default function SnippetCreatePage() {
	const [formState, action] = useFormState(actions.snippetCreate, {
		message: ''
	})

	return (
		<div className='my-4'>
			<div className='flex items-center justify-between mb-4'>
				<h1 className='font-bold mb-4'>Create a Snippet</h1>
				<Link href='/snippets' className='p-2 border rounded'>
					Back
				</Link>
			</div>
			<form className='flex flex-col gap-5' action={action}>
				{/* Title */}
				<div className='flex gap-5 items-center'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						id='title'
						name='title'
						className='w-full border-gray-400 border-solid border rounded p-2'
					/>
				</div>
				{/* End Title */}

				{/* Code */}
				<div className='flex gap-5 items-center'>
					<label htmlFor='code'>Code</label>
					<input
						type='text'
						id='code'
						name='code'
						className='w-full border-gray-400 border-solid border rounded p-2'
					/>
				</div>
				{/* End Code */}

				{/* Error Message */}
				{formState.message !== '' ? (
					<div className='my-2 p-2 bg-red-200 border rounded border-red-400'>
						{formState.message}
					</div>
				) : null}

				<button className='block bg-blue-300 p-2 text-white font-bold'>
					Create
				</button>
			</form>
		</div>
	)
}
