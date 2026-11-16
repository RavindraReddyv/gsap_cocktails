const cocktailLists = [
  {
    name: 'Margarita',
    country: 'Mexico',
    detail: 'Tequila, lime, triple sec',
    price: '$12',
  },
  {
    name: 'Old Fashioned',
    country: 'United States',
    detail: 'Whiskey, sugar, bitters',
    price: '$14',
  },
  {
    name: 'Mojito',
    country: 'Cuba',
    detail: 'White rum, mint, lime',
    price: '$11',
  },
];

const mockTailLists = [
  {
    name: 'Virgin Mojito',
    country: 'Cuba',
    detail: 'Mint, lime, soda water',
    price: '$8',
  },
  {
    name: 'Berry Fizz',
    country: 'Italy',
    detail: 'Mixed berries, citrus, soda',
    price: '$9',
  },
  {
    name: 'Cucumber Cooler',
    country: 'Spain',
    detail: 'Cucumber, lime, mint',
    price: '$10',
  },
];

const Cocktails = () => {
  

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
      <div className="list">
        <div className="popular">
          <h2>Most Popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p> 
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p> 
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
   