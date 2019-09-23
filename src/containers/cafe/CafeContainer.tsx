import * as React from 'react';
import './Cafe.scss';
import Tour from "../../presentationals/navigations/bars/Tour";

export const CafeContainer: React.FC = () => {
    return (
        <div className='cafe'>

            <header className='theme'>
                <h2>Nimado Cafe</h2>
            </header>

            <nav className='main-navigation'>
                <Tour/>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>
        </div>
    )
};
