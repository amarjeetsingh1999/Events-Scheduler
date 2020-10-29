import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';
import client from './apollo';
import { GET_SCHEDULES, SUBMIT_SCHEDULE } from './queries';

class Adder extends Component {
  render() {
    return (
      <FinalForm
        onSubmit={async ({ id, title, day, month, s_time, s_time_ap, e_time, e_time_ap, notes }) => {
          const input = { id, title, day, month, s_time, s_time_ap, e_time, e_time_ap, notes };

          await client.mutate({
            variables: { input },
            mutation: SUBMIT_SCHEDULE,
            refetchQueries: () => [{ query: GET_SCHEDULES }],
          });

          this.props.onClose();
        }}

        initialValues={this.props.schedule}

        render={({ handleSubmit, pristine, invalid }) => (
          <Modal isOpen toggle={this.props.onClose}>
            <Form onSubmit={handleSubmit}>
              <ModalHeader toggle={this.props.onClose}>
                New Schedule
              </ModalHeader>

              <ModalBody>

                <FormGroup>
                  <Label>Title</Label>
                  <Field
                    required
                    name="title"
                    className="form-control"
                    component="input"
                  />
                </FormGroup>

                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Day</Label>
                      <Field
                        required
                        name="day"
                        className="form-control"
                        component="input"
                        placeholder="date"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label>Month</Label>
                      <Field
                        required
                        name="month"
                        className="form-control"
                        component="input"
                        placeholder="Jan/Feb/..."
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Label>Start Time</Label>
                      <Field
                        required
                        name="s_time"
                        className="form-control"
                        component="input"
                        placeholder="12h format"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={3}>
                    <FormGroup>
                      <Label>am/pm</Label>
                      <Field
                        required
                        name="s_time_ap"
                        className="form-control"
                        component="input"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Label>End Time</Label>
                      <Field
                        required
                        name="e_time"
                        className="form-control"
                        component="input"
                        placeholder="12h format"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={3}>
                    <FormGroup>
                      <Label>am/pm</Label>
                      <Field
                        required
                        name="e_time_ap"
                        className="form-control"
                        component="input"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label>Notes</Label>
                  <Field
                    name="notes"
                    className="form-control"
                    component="input"
                    placeholder="Any additional notes...."
                  />
                </FormGroup>

              </ModalBody>

              <ModalFooter>
                <Button type="submit" disabled={pristine} color="primary">Save</Button>
                <Button color="secondary" onClick={this.props.onClose}>Cancel</Button>
              </ModalFooter>

            </Form>
          </Modal>
        )}
      />
    );
  }
}

export default Adder;