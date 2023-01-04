import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root {
        --yellow_gradient: linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%);
        --white:   #FFFFFF;
        --gray1:   #6C6C6C;
        --black:   #000000;
        --gray2:   #cdcdcd;
        --gray3:   #e5e5e5;
        --yellow1: #f8d442;
        --yellow2: #feaf00;
    }
    html, body, #root{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: var(--yellow_gradient);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, label {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

`