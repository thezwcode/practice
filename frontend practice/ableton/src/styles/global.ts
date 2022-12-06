
import {createGlobalStyle} from "styled-components"
import MonacoWoff2 from '../../public/fonts/monaco_regular-webfont.woff2'
import futuraPt from '../../public/fonts/futura-pt-medium.b650e9c2aaf6.woff2'
import futuraPtBook from '../../public/fonts/futura-pt-book.2dadbb3c03c1.woff2'
import futuraPtBookOblique from '../../public/fonts/futura-pt-book-oblique.f859db99cda9.woff2'



export default  createGlobalStyle`
  @font-face {
        font-family: 'Monaco';
        src: url(${MonacoWoff2}) format('woff2');
    }
    @font-face {
        font-family: 'futura-pt';
        src: url(${futuraPt}) format('woff2');
        font-style: italic;
        font-weight: normal;
    }
    @font-face {
        font-family: 'futura-pt-book';
        src: url(${futuraPtBook}) format('woff2');
    }
    @font-face {
        font-family: 'futura-pt-book-oblique';
        src: url(${futuraPtBookOblique}) format('woff2');
    }
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'futura-pt', sans-serif;
                                                    }
    #root{
        margin:0 auto;
    }

   


 `

