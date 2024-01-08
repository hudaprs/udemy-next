// Components
import { TopicCreateForm } from '@/components/topic/CreateForm'
import { TopicList } from '@/components/topic/List'

// Next UI
import { Divider } from '@nextui-org/react'

export default function HomePage() {
	return (
		<div className='grid grid-cols-4 gap-4 p-4'>
			<div className='col-span-3'>
				<h1 className='text-xl m-2'>Top Posts</h1>
			</div>
			<div className='border shadow py-3 px-2'>
				<TopicCreateForm />
				<Divider className='my-2' />
				<h3 className='text-lg'>Topics</h3>
				<TopicList />
			</div>
		</div>
	)
}
