import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollow}){
	const [isFollowing, setIsFollowing]  = useState(initialIsFollow)
	const handlerClick = () => {
		setIsFollowing(!isFollowing)
	}

	const imageSrc = `https://unavatar.io/${userName}`
	const textFollowing = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img className='tw-followCard-avatar' alt='avatar' src={imageSrc} />		
				<div className='tw-followCard-info'>
					<strong>{children}</strong>
					<span className='tw-followCard-infoUsername'>{`@${userName}`}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClass} onClick={handlerClick}>
					<span className='tw-followCard-text'>{textFollowing}</span>
					<span className='tw-followCard-stopFollow'>Dejar de seguir</span>
				</button>
			</aside>
		</article>
	)
}
