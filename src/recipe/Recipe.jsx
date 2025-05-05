import RecipeInfo from './RecipeInfo';
import { createGlobalStyle } from 'styled-components';
import UlStyled from './styled components/ul';

const GlobalStyle = createGlobalStyle`

    * {

        margin: 0;
        padding: 0;
        border: 0;
        list-style-type: none;
    }

    .recipe__info {

        display: flex;
        gap: 25px;
        padding-inline: 70px;
    }

    .active {

        background-color: #9f9f9f;
    }
`


export default function Recipe (props) {

    return (

    <UlStyled className="recipe__list">
        <GlobalStyle />
        {props.recipies.map((item, index) => {

            return (

                <RecipeInfo key = {index} {...item} />
            );
        })}
    </UlStyled>
    )
  }