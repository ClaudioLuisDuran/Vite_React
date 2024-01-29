import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Image } from "@chakra-ui/react";



const NavBar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState("");

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }));

    useEffect(() => { }, [search, onSearch]);

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    }

    const handleOInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }

    }


    return (
        <>
            <div display='flex'>
                <Image borderRadius='full'
                    boxSize='350px'
                    src={'https://www.america-retail.com/static//2023/04/ticketmaster.jpeg'}>
                    
                    </Image>
            </div>
            <div ref={ref} style={
                {
                    backgroundColor: 'gray',
                    width: "30%",
                    display: 'flex',
                    alignContent: "center",
                    marginBottom: "15px",
                    padding: "10px",
                    border: "3px solid #000",
                    borderRadius: "10px",
                }
            }>
                <div style={{
                    flex: 1,
                    display: 'flex',
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                        fontFamily: "Arial ",

                    }}>Mi boletera</p>
                </div>
                <div style={{
                    flex: 0,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "flex-end",

                }}>
                    <input
                        placeholder="Busca tu evento favorito"
                        onChange={handleInputChange}
                        onKeyDown={handleOInputKeyDown}
                        value={search}
                        style={{
                            fontSize: '11px',
                            padding: '7px 12px',
                            borderRadius: '5px',
                            borderBlockColor: '#000',
                            borderBlockWidth: '1px',
                            borderInlineColor: '#000',
                            borderInlineWidth: '1px',
                            border: 'none',
                        }}
                    />
                </div>
            </div>
        </>
    );
});
NavBar.displayName = 'Navbar';

export default NavBar;