import React from 'react'
import { Link } from 'react-dom';
import Tur_1 from './Tur_1';
import Tur_3 from './Tur_3';
import Tur_2 from './Tur_2';
import Tur_4 from './Tur_4';

const Navegacion = () => {
    return (
        <div>
            <Link to>
                <figure>
                    <img src={Tur_1} alt="" />
                    <figcaption>Turismo 1</figcaption>
                </figure>
            </Link>
            <Link>
                <figure>
                    <img src={Tur_2} alt="" />
                    <figcaption>Turismo 2</figcaption>
                </figure>

            </Link>
            <Link>
                <figure>
                    <img src={Tur_3} alt="" />
                    <figcaption>Turismo 3</figcaption>
                </figure>
            </Link>
            <Link>
                <figure>
                    <img src={Tur_4} alt="" />
                    <figcaption>Turismo 4</figcaption>
                </figure>
            </Link>


        </div>
    )
}

export default Navegacion