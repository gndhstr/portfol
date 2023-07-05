import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

function Greetings() {
    const [greeting] = useTypewriter({
        words : ['Hello World,','Halo,','Hi There,','Assalamualaikum,','Hola,','Merhaba,'],
        loop : {},
        typeSpeed : 200,
        deleteSpeed : 100,
    });
    return <h1> {greeting}<Cursor cursorColor='transparent'/></h1>;
}

export default Greetings