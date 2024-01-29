import { Link, useNavigate } from 'react-router-dom';
import styles from './Eventitem.module.css';
import { Button } from '@chakra-ui/react';

const EventItem = ({ info, id, name, image, onEventClick }) => {

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    return (
        <div className={styles.eventItemContainer}>

            <img src={image} alt={name} width={200} />
            <div className={styles.eventInfoContainer}>
                <h2 className={styles.eventName}>{name}</h2>
                <h4 className={styles.eventInfo}>{info}</h4>
                <Button
                    colorScheme='teal' size='sm'
                    onClick={handleSeeMoreClick}
                    className={styles.seeMoreBtn}
                >
                    Ver más
                </Button>
            </div>

        </div>
    );

};
export default EventItem;