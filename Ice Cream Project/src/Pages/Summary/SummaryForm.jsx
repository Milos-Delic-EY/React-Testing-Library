import { useState } from "react";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";

const SummaryForm = () => {
  const [checked, isChecked] = useState(false);

  const popover = (
    <Popover id="popover-basics">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checked}
          onChange={(e) => isChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checked}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
