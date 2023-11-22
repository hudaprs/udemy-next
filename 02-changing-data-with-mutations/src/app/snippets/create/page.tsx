export default function SnippetCreate() {
	return (
		<div className='py-12'>
			<h1 className='font-bold mb-4'>Create a Snippet</h1>
			<form className='flex flex-col gap-5'>
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

				<button className='block bg-blue-300 p-2 text-white font-bold'>
					Create
				</button>
			</form>
		</div>
	)
}
