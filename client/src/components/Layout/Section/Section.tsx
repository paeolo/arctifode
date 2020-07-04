import styles from './Section.module.scss';

import { Grid, Column, Row } from '@components/Core';

interface SectionProps {
  title: string;
  subtitle: string;
}

export const Section: React.FC<SectionProps> = props => {
  return (
    <Grid>
      <Row >
        <Column size="4" hide="sm">
          <div>
            <h4>{props.title}</h4>
            <h6 className={styles.subtitle}>{props.subtitle}</h6>
          </div>
        </Column>
        <Column size="8" sizes={{ sm: "12" }}>
          <div>
            {props.children}
          </div>
        </Column>
      </Row>
    </Grid>
  );
}
