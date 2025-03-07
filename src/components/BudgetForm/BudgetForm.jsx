import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { labelStyles } from '../../styledComponents/styled';

class BudgetForm extends Component {
    state = { budget: 0 };

    handleChange = e => {
        this.setState({
            budget: Number(e.target.value),
        });
    };

    handleSubmit = e => {
        const { budget } = this.state;
        const { onSave } = this.props;

        e.preventDefault();

        if (budget <= 0) alert('Enter correct value!');

        onSave(this.state.budget);

        this.setState({ budget: 0 });
    };

    render() {
        const { budget } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Label customStyles={labelStyles}>
                    Enter your total budget
                    <Input
                        type="number"
                        value={budget}
                        onChange={this.handleChange}
                    />
                </Label>

                <Button label="Save" type="submit" />
            </Form>
        );
    }
}

BudgetForm.propTypes = {
    onSave: PropTypes.func.isRequired,
};

export default BudgetForm;
