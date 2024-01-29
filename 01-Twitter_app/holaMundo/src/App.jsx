import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

//Array de usuarios para renderizar el contenido
const users = [
{
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isfollowing: true
},
{
    userName: 'peladodea24',
    name: 'Pelado de A24',
    isfollowing: true
},
{
    userName: 'mrgandalf321',
    name: 'Mr Gandaldaf Dev',
    isfollowing: false
},
{
    userName: 'elonmusk',
    name: 'Elon Musk',
    isfollowing: true
},
{
    userName: 'Sebasti72489309',
    name: 'Seba 76',
    isfollowing: false
}
]


export function App() {
    //se pueden hacer funciones y pasarlas como props a los componentes
    /*  const format = (userName) => `@${userName} ` */ 

    // Pero tambien puedo pasar un elemento ya formateado
    /* const formattedUserName = <span>@cld</span> */

    return (
        // Render usando el array y luego cada uno sin array
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isfollowing} = user
                    return(
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing = {isfollowing}
                        >
                         {name}
                        </TwitterFollowCard>
                    )
                })
            },
        
            <p>_______________</p>
      
        
            <TwitterFollowCard
              /*   formattedUserName={formattedUserName} */ // pasamos la funcion para que la ejecute el otro
               /*  isfollowing *///como props
               initialIsFollowing={false}
                userName="peladodea24"
              
            >Pelado de A24</TwitterFollowCard>

            <TwitterFollowCard
               /*  formattedUserName={formattedUserName} */
               /*  isfollowing={false} */ //como propos
                initialIsFollowing={true}
                userName="elonmusk"
            >Elon Musk</TwitterFollowCard>

            <TwitterFollowCard
               /*  formattedUserName={formattedUserName} */
               initialIsFollowing={false}
                userName="Sebasti72489309"
            >Seba 76</TwitterFollowCard>
        </section>
    )
}