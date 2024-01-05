'use client'

// React
import { memo, useCallback, useState } from 'react'

// Monaco Editor
import MEditor from '@monaco-editor/react'

// Types
import { TEditorProps } from './types'

// Actions
import * as actions from '@/actions'

const Editor = memo(({ snippet }: TEditorProps) => {
	const [code, setCode] = useState(snippet?.code || '')

	/**
	 * @description Handle change in editor
	 *
	 * @param {string} value
	 *
	 * @return {void} void
	 */
	const onChangeEditor = useCallback((value: string = ''): void => {
		setCode(() => value)
	}, [])

	const snippetUpdateAction = actions.snippetUpdate.bind(null, {
		id: snippet.id,
		code
	})

	return (
		<form action={snippetUpdateAction}>
			<MEditor
				height={'40vh'}
				theme={'vs-dark'}
				language='javascript'
				defaultValue={snippet?.code || ''}
				options={{ minimap: { enabled: false }, tabSize: 2 }}
				onChange={onChangeEditor}
			/>
			<button type='submit' className='p-2 border rounded'>
				Update
			</button>
		</form>
	)
})

Editor.displayName = 'Editor'

export { Editor }
