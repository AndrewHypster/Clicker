const Shop = props => {
  const By = product => {
    const name = tarQ(product, '.pName').innerText // tarQ - допоміжна функція в самому низу
    const cost = +tarQ(product, '.pCost').innerText
    const earn = +tarQ(product, '.pEarn').innerText
    const quantity = +tarQ(product, '.pQuantity').innerText++
    const isAre = props.shop.shop.map(obj => Object.values(obj)[0]).findIndex(e => name===e) // чи такий обєкт є? індекс або -1

    if (isAre === -1) {
      const productObj = {
        name: name,
        cost: cost,
        earn: earn,
        quantity: quantity+1
      }
      props.shop.setShop([...props.shop.shop, productObj])
    } else {
      const newShop = [...props.shop.shop]
      newShop[isAre].quantity++
      props.shop.setShop(newShop)
    }
  }
  return (
    <>
      <div className="product" onClick={product => By(product)}>
        <h1 className="pName">
          Person
        </h1>
        <h3>
          Cost:&nbsp;<p className="pCost">10</p>
        </h3>
        <h3>Earn:&nbsp;<p className="pEarn">1</p>/sec</h3>
        <h3>
          Quantity:&nbsp;<p className="pQuantity">0</p>
        </h3>
      </div>

      <div className="product" onClick={product => By(product)}>
      <h1 className="pName">
        MathBoard
      </h1>
      <h3>
        Cost:&nbsp;<p className="pCost">10</p>
      </h3>
      <h3>Earn:&nbsp;<p className="pEarn">1</p>/sec</h3>
      <h3>
        Quantity:&nbsp;<p className="pQuantity">0</p>
      </h3>
      </div>

      <div className="product" onClick={product => By(product)}>
        <h1 className="pName">
          Computer
        </h1>
        <h3>
          Cost:&nbsp;<p className="pCost">10</p>
        </h3>
        <h3>Earn:&nbsp;<p className="pEarn">1</p>/sec</h3>
        <h3>
          Quantity:&nbsp;<p className="pQuantity">0</p>
        </h3>
      </div>

      <div className="product" onClick={product => By(product)}>
      <h1 className="pName">
        Laptop
      </h1>
      <h3>
        Cost:&nbsp;<p className="pCost">10</p>
      </h3>
      <h3>Earn:&nbsp;<p className="pEarn">1</p>/sec</h3>
      <h3>
        Quantity:&nbsp;<p className="pQuantity">0</p>
      </h3>
      </div>
    </>
  )
}

export default Shop

function tarQ (e, str) {
  return e.target.querySelector(`${str}`) // трошки скоротити код
}