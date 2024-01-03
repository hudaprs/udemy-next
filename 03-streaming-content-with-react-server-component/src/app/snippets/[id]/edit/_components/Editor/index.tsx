'use client'

// React
import { memo, useCallback, useState } from 'react'

// Monaco Editor
import MEditor from '@monaco-editor/react'

// Types
import { TEditorProps } from './types'

const Editor = memo(({ snippet }: TEditorProps) => {
	const [code, setCode] = useState(snippet.code)

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

	return (
		<MEditor
			height={'40vh'}
			theme={'vs-dark'}
			language='javascript'
			defaultValue={snippet.code}
			options={{ minimap: { enabled: false }, tabSize: 2 }}
			onChange={onChangeEditor}
		/>
	)
})

Editor.displayName = 'Editor'

export { Editor }
