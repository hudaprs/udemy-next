'use client'

// React
import { memo } from 'react'
import { useFormStatus } from 'react-dom'

// Next UI
import { Button } from '@nextui-org/react'

// Types
import { TFormButtonProps } from './types'

const FormButton = memo(({ children }: TFormButtonProps) => {
	const { pending } = useFormStatus()

	return (
		<Button type='submit' isLoading={pending}>
			{children}
		</Button>
	)
})

FormButton.displayName = 'FormButton'

export { FormButton }
