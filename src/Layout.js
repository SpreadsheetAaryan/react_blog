import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { Outlet } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Layout = ({ width }) => {

    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);

    return (
        <div className="App">
            <Header 
                title="React JS Blog"
                width={width}
            />
            <Nav 
                search={search}
                setSearch={setSearch}
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout