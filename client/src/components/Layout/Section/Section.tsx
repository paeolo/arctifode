import styles from './Section.module.scss';

import { Container, Column, Row, H4, H6 } from '@components/Core';

interface SectionProps {
  title: string;
  subtitle: string;
}

export const Section: React.FC<SectionProps> = props => {
  return (
    <Container>
      <Row >
        <Column size="4" hide="sm">
          <div>
            <H4>{props.title}</H4>
            <H6 className={styles.subtitle}>{props.subtitle}</H6>
          </div>
        </Column>
        <Column size="8" sizes={{ sm: "12" }}>
          <div>
            {props.children}
          </div>
        </Column>
      </Row>
    </Container>
  );
}
