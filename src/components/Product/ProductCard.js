export const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="hover:shadow-md w-60 cursor-pointer rounded-sm"
    >
      <img
        className="h-64 object-contain"
        src={product.imageUrl}
        alt={product.productName}
        loading="lazy"
      />
      <div className="py-2 px-1">
        <p className="text-gray-500">{product.brand}</p>
        <p>{product.productName}</p>
        <p className="font-medium">{`₹${product.price.toLocaleString()}`}</p>
      </div>
    </div>
  );
};
