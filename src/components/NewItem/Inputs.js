import { useReducer, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const Inputs = ({ handleSubmit }) => {
  const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
    name: "",
    rate: 0,
    quantity: 0,
    basicCost: 0,
    discount: 0,
    discountAmount: 0,
    finalBasicCost: 0,
    tax: 0,
    taxAmount: 0,
    totalCost: 0,
  });

  // to update the basicCount state value
  useEffect(() => {
    let basicCost = parseFloat(state?.rate) * parseFloat(state?.quantity).toFixed(2);
    if (!isNaN(basicCost)) setState({ basicCost });
  }, [state?.rate, state?.quantity]);

  // to update the discountAmount state value
  useEffect(() => {
    let discountAmount = (
      (parseFloat(state?.basicCost) * parseFloat(state?.discount)) /
      100
    ).toFixed(2);
    if (!isNaN(discountAmount)) setState({ discountAmount });
  }, [state?.basicCost, state?.discount]);

  // to update the finalBasicCost state value
  useEffect(() => {
    let finalBasicCost = (parseFloat(state?.basicCost) - parseFloat(state?.discountAmount)).toFixed(
      2
    );
    if (!isNaN(finalBasicCost)) setState({ finalBasicCost });
  }, [state?.basicCost, state?.discountAmount]);

  // to update the finalTaxAmount state value
  useEffect(() => {
    let taxAmount = ((parseFloat(state?.finalBasicCost) * parseFloat(state?.tax)) / 100).toFixed(2);
    if (!isNaN(taxAmount)) setState({ taxAmount });
  }, [state?.finalBasicCost, state?.tax]);

  // to update the totalCost state value
  useEffect(() => {
    let totalCost = (parseFloat(state?.finalBasicCost) + parseFloat(state?.taxAmount)).toFixed(2);
    if (!isNaN(totalCost)) setState({ totalCost });
  }, [state?.finalBasicCost, state?.taxAmount]);

  // onChange handler
  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name !== "name") value = parseFloat(value);
    setState({ [name]: value });
  };

  // handler for submitting the inputs
  const onSubmit = (event) => {
    // to prevent the default behaviour of browser from refreshing
    event.preventDefault();
    handleSubmit(state);
  };

  let isAddBtnEnabled =
    state?.name &&
    state?.rate &&
    state?.quantity &&
    state?.basicCost &&
    state?.discount &&
    state?.discountAmount &&
    state?.finalBasicCost &&
    state?.tax &&
    state?.taxAmount &&
    state?.totalCost;

  return (
    <Form onSubmit={onSubmit}>
      {/* name input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          value={state?.name}
          name="name"
          required
          placeholder="Name"
        />
      </Form.Group>

      {/* rate input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.rate}
          name="rate"
          required
          placeholder="Rate"
        />
      </Form.Group>

      {/* quantity input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.quantity}
          name="quantity"
          required
          placeholder="quantity"
        />
      </Form.Group>

      {/* basic-cost input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Basic Cost</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.basicCost}
          name="basicCost"
          required
          placeholder=""
          disabled
        />
      </Form.Group>

      {/* discount input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Discount</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.discount}
          name="discount"
          required
          placeholder=""
        />
      </Form.Group>

      {/* discount-amount input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Discount Amount</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.discountAmount}
          name="discountAmount"
          required
          placeholder=""
        />
      </Form.Group>

      {/* final-basic-cost input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Final Basic Cost</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.finalBasicCost}
          name="finalBasicCost"
          required
          placeholder=""
        />
      </Form.Group>

      {/* tax input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Taxes</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={state?.tax}
          type="number"
          name="tax"
          required
          placeholder=""
        />
      </Form.Group>

      {/* tax-amount input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Tax Amount</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.taxAmount}
          name="taxAmount"
          required
          placeholder=""
          disabled
        />
      </Form.Group>

      {/* total-cost input-field */}
      <Form.Group className="mb-3">
        <Form.Label>Total Cost</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="number"
          value={state?.totalCost}
          name="totalCost"
          required
          placeholder=""
          disabled
        />
      </Form.Group>

      {/* add-button for adding */}
      <Button disabled={!isAddBtnEnabled} variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default Inputs;
