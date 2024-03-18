import './app.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
// import reactLogo from './assets/react.svg'

const users = [
	{
		userName: 'midudev',
		name: 'Miguel Ángel Durán',
		isFollowing: true,
	},
	{
		userName: 'pheralb',
		name: 'Pablo Heraldo',
		isFollowing: false,
	},
	{
		userName: 'PacoHdezs',
		name: 'Paco Hdez',
		isFollowing: false,
	},
	{
		userName: 'elonmusk',
		name: 'Elon Musk',
		isFollowing: false,
	},
	{
		userName: 'goncy',
		name: 'Jose Miguel Perez',
		isFollowing: false,
	},
	{
		userName: 'TMChein',
		name: 'Tomás',
		isFollowing: false,
	},
]

export function App () {
	return (
		<>
			<section className='App'>
				{
					users.map(({userName, name, isFollowing})=>(
						<TwitterFollowCard key={userName} userName={userName} initialIsFollow={isFollowing}>
							{name}
						</TwitterFollowCard>
					) )
				}
				
			</section>

		</>
	)
}
