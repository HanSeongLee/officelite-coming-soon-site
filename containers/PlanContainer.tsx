import React, {HTMLAttributes} from 'react';
import PlanCard from '../components/PlanCard';
import {Plan} from '../types/plan';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    plans: Plan[];
}

const PlanContainer: React.FC<IProps> = ({ plans, ...props }) => {
    return (
        <ul {...props}>
            {plans?.map((plan, index) => (
                <li key={index}>
                    <PlanCard plan={plan} />
                </li>
            ))}
        </ul>
    );
};

export default PlanContainer;
