// Next
import Link from 'next/link'

// Next UI
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input
} from '@nextui-org/react'

// Components
import { HeaderAuth } from './components/HeaderAuth'

const Header = () => {
	return (
		<Navbar className='shadow mb-6'>
			<NavbarBrand>
				<Link href='/' className='font-bold'>
					Discuss
				</Link>
			</NavbarBrand>
			<NavbarContent justify='center'>
				<NavbarItem>
					<Input />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<HeaderAuth />
			</NavbarContent>
		</Navbar>
	)
}

export { Header }
