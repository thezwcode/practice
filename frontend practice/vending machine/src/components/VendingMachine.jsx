const DUMMY_ITEMS = [
  { id: "i1", name: "Snickers", price: 2.3, quantity: 10 },
  { id: "i2", name: "Mars", price: 2, quantity: 5 },
];

const VendingMachine = () => {
  const vendingItems = DUMMY_ITEMS;

  return (
    <div>
      {vendingItems.map((item, index) => {
        return (
          <VendingItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};
