import './App.css';
import { inventory } from './constants/inventory.js';
import { bestSellingTv } from './constants/inventory.js';
import calculateNumberOfSoldTvs from './helpers/calculate-number-of-sold-tvs.js';
import calculateNumberOfPurchasedTvs from './helpers/calculate-number-of-purchased-tvs.js';
import calculateNumberOfTvsToBeSold from './helpers/calculate-number-of-tvs-to-be-sold.js';
import createNameString from './helpers/create-name-string.js';
import createPriceString from './helpers/create-price-string.js';
import createScreenSizeString from './helpers/create-screen-size-string.js';
import checkIcon from './assets/check.png';
import minIcon from './assets/minus.png';
import pickIcon from './helpers/pick-icon.js';
import sortByNumberSold from './helpers/sort-by-number-sold.js';
import sortByPrice from './helpers/sort-by-price.js';
import sortByRefreshRate from './helpers/sort-by-refresh-rate.js';
import sortByScreenSize from './helpers/sort-by-screen-size.js';
import outOfStockImage from './assets/out-of-stock.png';


function App() {

  return (
    <>
      <header>
        <h1>Tech it easy dashboard</h1>
      </header>
      <main>
        <section className='sales-overview'>
          <h2>Verkoopoverzicht</h2>
          <div className="sales-overview-items">
            <div className="sales-overview-item number-of-sold-tvs">
              <p>Aantal verkochte producten</p>
              <p>{calculateNumberOfSoldTvs(inventory)}</p>
            </div>
            <div className="sales-overview-item number-of-purchased-tvs">
              <p>Aantal ingekochte producten</p>
              <p>{calculateNumberOfPurchasedTvs(inventory)}</p>
            </div>
            <div className="sales-overview-item number-of-tvs-to-be-sold">
              <p>Aantal te verkopen producten</p>
              <p>{calculateNumberOfTvsToBeSold(inventory)}</p>
            </div>
          </div>
        </section>
        <section className="best-sold-tv">
          <h2>Best verkochte tv</h2>
          <article className='best-sold-tv-item'>
            <span>
              <img src={bestSellingTv.sourceImg} alt={createNameString(bestSellingTv)} />
            </span>
            <div>
              <h3 className='best-sold-tv-heading'>{createNameString(bestSellingTv)}</h3>
              <p>{createPriceString(bestSellingTv)}</p>
              <p>{createScreenSizeString(bestSellingTv)}</p>
              <div className='features'>
                <div className='feature-item'>
                  <img src={checkIcon} alt="Check icon" className='icon' /><p>wifi</p>
                </div>
                <div className='feature-item'>
                  <img src={minIcon} alt="Min icon" className='icon' /><p>speech</p>
                </div>
                <div className='feature-item'>
                  <img src={checkIcon} alt="Check icon" className='icon' /><p>hdr</p>
                </div>
                <div className='feature-item'>
                  <img src={checkIcon} alt="Check icon" className='icon' /><p>bluetooth</p>
                </div>
                <div className='feature-item'>
                  <img src={minIcon} alt="Min icon" className='icon' /><p>ambilight</p>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="all-tvs">
          <h2>Alle tvs</h2>
          <div className='buttons'>
            <button type='button' onClick={() => sortByNumberSold(inventory)}>Meest verkocht eerst</button>
            <button type='button' onClick={() => sortByPrice(inventory)}>Goedkoopste eerst</button>
            <button type='button' onClick={() => sortByRefreshRate(inventory)}>Meest geschikt voor sport eerst</button>
            <button type='button' onClick={() => sortByScreenSize(inventory)}>Grootste schermgroottes eerst</button>
          </div>
          <div className="all-tvs-container">
            <ul className='all-tvs-list'>
              {inventory.map(tv => {
                return (
                  <li key={tv.type}>
                    <article className='best-sold-tv-item'>
                      <span>
                        <img src={tv.originalStock - tv.sold <= 0 ? outOfStockImage : tv.sourceImg} alt={createNameString(tv)} />
                      </span>
                      <div>
                        <h3 className='best-sold-tv-heading'>{createNameString(tv)}</h3>
                        <p>{createPriceString(tv)}</p>
                        <p>{createScreenSizeString(tv)}</p>
                        <div className='features'>
                          {tv.options.map(option => {
                            return (
                              <div className='feature-item'>
                                <img src={pickIcon(tv, option.name, checkIcon, minIcon)} alt="Check icon" className='icon' /><p>{option.name.toLowerCase()}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
