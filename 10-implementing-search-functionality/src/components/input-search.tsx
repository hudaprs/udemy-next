'use client'

import { memo } from 'react'
import { Input } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import * as actions from '@/actions/search'

const InputSearch = memo(() => {
	const searchParams = useSearchParams()

	return (
		<form action={actions.search}>
			<Input name='term' defaultValue={searchParams.get('term') || ''} />
		</form>
	)
})

InputSearch.displayName = 'InputSearch'

export { InputSearch }
