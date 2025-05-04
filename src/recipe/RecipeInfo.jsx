export default function App (props) {

    return (
  
        <li className="recipe__list-item">
            <img className="recipe__item-img" src={props.image} alt="" width={500} />
            <h2 className="recipe__item-name">{props.name}</h2>
            <div className="recipe__row recipe__info">
                <div>
                    <svg viewBox="0 0 24 24" width="50px" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="clock-stand"> <path id="line" d="M18 20.5L19.5 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path id="line_2" d="M6 20.5L4.5 22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path id="vector" d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path id="vector_2" d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path id="line_3" d="M18 2L21.747 5.31064" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path id="line_4" d="M6 2L2.25304 5.31064" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
                    <h3 className="recipe__item-time">{props.time} min</h3>
                </div>
                <div>
                    <svg fill="#ffffff" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M267.636,128v-2.327c13.964-4.655,23.273-17.455,23.273-32.582c0-19.782-15.127-34.909-34.909-34.909 c-19.782,0-34.909,15.127-34.909,34.909c0,15.127,9.309,27.927,23.273,32.582v13.964c0,6.982,4.655,11.636,11.636,11.636 c109.382,0,197.818,88.436,197.818,197.818c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636 C477.091,231.564,384,133.818,267.636,128z M256,104.727c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636 s11.636,4.655,11.636,11.636C267.636,100.073,262.982,104.727,256,104.727z"></path> </g> </g> <g> <g> <path d="M232.727,187.345c-1.164-5.818-8.145-10.473-13.964-9.309c-33.745,6.982-62.836,24.436-87.273,48.873 c-4.655,4.655-4.655,11.636,0,16.291c2.327,2.327,4.655,3.491,8.145,3.491s5.818-1.164,8.145-3.491 c20.945-20.945,46.545-36.073,75.636-41.891C229.236,200.145,233.891,193.164,232.727,187.345z"></path> </g> </g> <g> <g> <path d="M507.345,407.273C500.364,393.309,485.236,384,470.109,384H93.091c-6.982,0-11.636,4.655-11.636,11.636 c0,6.982,4.655,11.636,11.636,11.636h377.018c6.982,0,13.964,3.491,16.291,10.473c1.164,2.327,2.327,5.818,2.327,8.145v4.655 H23.273v-4.655c0-2.327,1.164-5.818,2.327-8.146c2.327-6.982,9.309-10.473,16.291-10.473h4.655 c6.982,0,11.636-4.655,11.636-11.636v-46.545c0-93.091,62.836-172.218,153.6-193.164c5.818-1.164,10.473-8.145,9.309-13.964 c-1.164-5.818-8.146-10.473-13.964-9.309C105.891,155.927,34.909,245.527,34.909,349.091v36.073 c-12.8,1.164-24.436,10.473-30.255,22.109C1.164,413.091,0,420.073,0,425.891v16.291c0,6.982,4.655,11.636,11.636,11.636h488.727 c6.982,0,11.636-4.655,11.636-11.636v-16.291C512,420.073,510.836,413.091,507.345,407.273z"></path> </g> </g> </g></svg>
                    <h3 className="recipe__item-servings">{props.servings} servings</h3>
                </div>
                <div>
                    <svg width="50px" viewBox="2 0.6 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <path d="M14.5 10.0003C14.5 9.20875 15.5528 8.99895 15.8321 9.73957C16.5077 11.5311 17 13.1337 17 14.0002C17 16.7616 14.7614 19.0002 12 19.0002C9.23858 19.0002 7 16.7616 7 14.0002C7 13.0693 7.56822 11.2887 8.32156 9.33698C9.29743 6.80879 9.78536 5.54469 10.3877 5.4766C10.5804 5.45482 10.7907 5.49399 10.9626 5.58371C11.5 5.86413 11.5 7.24285 11.5 10.0003C11.5 10.8287 12.1716 11.5003 13 11.5003C13.8284 11.5003 14.5 10.8287 14.5 10.0003Z" stroke="#ffffff"></path> <path d="M11 19L10.7372 18.343C10.2816 17.204 10.4737 15.9079 11.24 14.95V14.95C11.6296 14.463 12.3704 14.463 12.76 14.95V14.95C13.5263 15.9079 13.7184 17.204 13.2628 18.343L13 19" stroke="#ffffff"></path> </g></svg>
                    <h3 className="recipe__item-calories">{props.calories} calories</h3>
                </div>
            </div>
            <div className="recipe__row">
                <h3 className="recipe__item-difficulty-title">Difficulty</h3>
                <div className="recipe__difficulty-container">
                    <span className={props.difficulty === 0 ? 'recipe__difficulty active' : 'recipe__difficulty'}>Easy</span>
                    <span className={props.difficulty === 1 ? 'recipe__difficulty active' : 'recipe__difficulty'}>Medium</span>
                    <span className={props.difficulty === 2 ? 'recipe__difficulty active' : 'recipe__difficulty'}>Hard</span>
                </div>
            </div>
        </li>
    );
}