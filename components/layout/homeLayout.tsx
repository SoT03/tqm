import Navbar from './navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
