const Header = () => {
	return (
		<header
			className='relative h-[70vh] bg-center bg-cover text-white -z-10'
			style={{
				backgroundImage: 'url(/img/handshake_small.jpg)',
			}}>
			<div className='wrapper'></div>
			<div className='bg-shadow'></div>
		</header>
	);
};

export default Header;
