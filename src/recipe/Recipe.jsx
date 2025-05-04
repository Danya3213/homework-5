import RecipeInfo from './RecipeInfo';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {

        margin: 0;
        padding: 0;
        border: 0;
        list-style-type: none;
    }

    .recipe__list {

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    .recipe__list-item {

        padding-bottom: 20px;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: #4b4b4b;
    }

    .recipe__item-name {

        font-size: 32px;
    }

    .recipe__row {

        background-color: #585858;
        border-radius: 30px;
        padding: 15px 30px;
    }

    .recipe__info {

        display: flex;
        gap: 25px;
        padding-inline: 70px;
    }

    .recipe__item-difficulty-title {

        text-align: left;
        margin-bottom: 15px;
    }

    .recipe__difficulty-container {

        display: flex;
        gap: 20px;
    }

    .recipe__difficulty {

        padding: 8px 25px;
        background-color: #6a6a6a;
        border-radius: 30px;
    }

    .recipe__difficulty.active {

        background-color: #9f9f9f;
    }
`

export default function Recipe (props) {

    return (

    <ul className="recipe__list">
        <GlobalStyle />
        {props.recipies.map((item, index) => {

            return (

                <RecipeInfo key = {index} {...item} />
            );
        })}
    </ul>
    )
  }