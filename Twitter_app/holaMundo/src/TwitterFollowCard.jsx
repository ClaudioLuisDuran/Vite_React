import './Index.css'
//importo hooks useState, para añadir funcionalidad a los componentes
import { useState } from 'react' 

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName, initialIsFollowing}) {

    // cambiar estado del boton cuando se pulse, con useState

    //modo de muchas lineas
    /* const state = useState(false) // devuelve 2 estados, true o false
    const isFollwing = state[0]
    const setIsFollowing = state[1] */

    // modo de desestructuracion destructer
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)  // igual a las 3 lineas de arriba

    // Asigno los dos estados posibles
    const text = isFollowing ? 'Siguiendo' : 'Seguir' //Es una 'ternaria', como un IF mas cortito
    
    //podemos darle estilo a cada text
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    // funcion para que cambie el estado al hacer click en el boton
    const handleClick = () => {
        setIsFollowing(!isFollowing) // Seguir a Siguiendo y viceversa
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar"
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-avatarDiv'>
                    <strong>{children}</strong>
                    <strong className='tw-followCard-strong'>@{userName}</strong>
                    {/* <span 
                    className='tw-followCard-span'> */}
                    {/* recibe la funcion y la ejecuta dandole el parametro necesario */}
                    {/* {formatUserName(userName)}  */}

                    {/* O podemos traer el nombre ya formateado con el arroba */}
                    {/* {formattedUserName}
                        </span> */}
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}