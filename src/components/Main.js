import '../css/stylesMain.css'
import cartIcon from '../assets/images/icon-cart.svg';

function Main () {
    return (
    <div className='container'>
        <div className='all-card-flex'>
            <div className='img-card'>
            </div>
            <div className='all-text-card-flex'>
                <div className='text-card'>
                    <p id='text-card-title'>
                        Perfume
                        </p>
                    <h1 id='main-card-title'>
                        Gabrielle Essence Eau De Parfum
                    </h1>
                    <p id='text-card-txt'>A floral, solar and voluptuous
                        interpretation composed by
                        Oliver Polge, Perfumer-Creator
                        for the House of CHANEL.
                    </p>
                </div>
                <div className='price-card'>
                    <h2>$149.99</h2>
                    <h3><s>$169.99</s></h3>
                </div>
                <a id='button'
                    href='#top'>
                    <span>
                        <img id='span-img' src={cartIcon}alt='cart-Icon'/>
                    </span>Add to Cart
                </a>
            </div>
        </div>
    </div>
    );
}

export default Main;