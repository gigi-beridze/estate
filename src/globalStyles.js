import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html, body{
        overflow-x: hidden;
    }
    body::-webkit-scrollbar {
        width: 4px;
    }
    body::-webkit-scrollbar-track {
        background: #ccc;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #000d1a;
        outline: none;
    }
    /* not global */
    .active{
        background-color: #000d1a;
        animation: fadeInAnimationScroll ease 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    
    @keyframes fadeInAnimationScroll {
      0% {
        transform:translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes heroImageAnimation{
        0%{
            opacity:0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes heroContentH1Animation{
        0%{
            transform:translateY(-200px);
            color: rgba(0, 0, 0, 0.1);
        }
        100%{
            transform: translateY(0);
            color: #fff;
        }
    }
    @keyframes heroContentPAnimation{
        0%{
            transform:translateY(-100px);
            color: rgba(0, 0, 0, 0.1);
        }
        100%{
            transform: translateY(0);
            color: #fff;
        }
    }
    @keyframes heroContentButtonAnimation{
        0%{
            transform: translateX(-100px);
        }
        100%{
            transform: translateX(0px);
        }
    }
`
export default GlobalStyle