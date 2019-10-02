import * as React from 'react';
import '../../scss/modules/layouts/_news.scss';

export const NewsContainer: React.FC = () => {
    return (
        <div className='news'>
            <header className='theme'>
                <h2>Nimado News</h2>
            </header>

            <nav className='main-navigation'>
            </nav>

            <main className='main-content'>
                <p>Videos</p>
            </main>
        </div>
    )
};