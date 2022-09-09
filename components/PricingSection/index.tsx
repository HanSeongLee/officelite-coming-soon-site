import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import PlanContainer from '../../containers/PlanContainer';
import plans from '../../data/plans.json';

const PricingSection: React.FC = () => {
    return (
        <section className={styles.pricingSection}>
            <Container>
                <h2 style={{
                    position: 'absolute',
                    top: 99999,
                    color: '#FFFFFF',
                }}>
                    Pricing
                </h2>
                <PlanContainer className={styles.planContainer}
                               plans={plans}
                />
            </Container>
        </section>
    );
};

export default PricingSection;
