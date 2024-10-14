import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: #131517;
        
        font-family: 'Poppins', sans-serif;
        
        
        .component{
            width: 1200px;
            height: 600px;
            margin: 0 auto;
            z-index: 0;
            position: absolute;

            
        }
    }
   
    ::-webkit-scrollbar {
    width: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background:#C778DD;
        border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--pink); 
    }

    a{
        all:unset;
    }
`

