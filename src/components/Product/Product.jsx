import Style from "./Product.module.css";


// import PropTypes from 'prop-types'
export default function Product({children}) {
  return (
    <>
      {children}
    </>
  );
}

// Product.propTypes = {
//   label: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };
// Product.defaultProps = {
//     label: 'Product',
//     price: 657765756,
//   }
