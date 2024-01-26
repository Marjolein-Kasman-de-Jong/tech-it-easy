import './App.css';
import { calculateNumberOfSoldTvs } from './helpers/calculate-number-of-sold-tvs';
import { calculateNumberOfPurchasedTvs } from './helpers/calculate-number-of-purchased-tvs';
import { calculateNumberOfTvsToBeSold } from './helpers/calculate-number-of-tvs-to-be-sold';

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
              <p>{calculateNumberOfSoldTvs()}</p>
            </div>
            <div className="sales-overview-item number-of-purchased-tvs">
              <p>Aantal ingekochte producten</p>
              <p>{calculateNumberOfPurchasedTvs()}</p>
            </div>
            <div className="sales-overview-item number-of-tvs-to-be-sold">
              <p>Aantal te verkopen producten</p>
              <p>{calculateNumberOfTvsToBeSold()}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
