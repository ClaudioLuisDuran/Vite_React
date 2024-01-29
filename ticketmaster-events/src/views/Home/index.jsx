import { useState, useRef, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Events from '../../components/Events';
import useEventsData from '../../hooks/useEventsData';
import ReactPaginate from 'react-paginate';
import styles from './Home.module.css';
import { Box } from '@chakra-ui/react';


const Home = () => {
    const { events, isLoading, error, fetchEvents, page } = useEventsData();
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef();

    useEffect(() => {
        fetchEvents();
    }, []);


    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    };

    const handlePageClick = ({ selected }) => {
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    };

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando resultados...</div>;
        }
        if (error) {
            return <div>Ha ocurrido un error</div>;
        }
        return (

        
            
                        <Events searchTerm={searchTerm} events={events} />

            
            );
                    
    }
               
   


    return (
            <>
                <NavBar onSearch={handleNavbarSearch} ref={containerRef} />
                
                {renderEvents()}
           

                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="< "
                    renderOnZeroPageCount={null} />
            </>
        );

    };
    export default Home;

