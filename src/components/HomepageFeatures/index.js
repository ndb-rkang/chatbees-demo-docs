import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free and Ready To Use',
    Svg: require('@site/static/img/img1.svg').default,
    description: (
      <>
        ChatBees is trained on your website out of the box. No configuration required. No payment required.
      </>
    ),
  },
  {
    title: 'Additional Data Sources',
    Svg: require('@site/static/img/img2.svg').default,
    description: (
      <>
        Extend You chatbot with additional data sources such as Google Drive, Notion in just a few minutes
      </>
    ),
  },
  {
    title: 'AI With Personality',
    Svg: require('@site/static/img/img3.svg').default,
    description: (
      <>
        Personalize your chatbot to reflect the unique characteristics of your brand.
      </>
    ),
  },
  {
    title: 'Private and Secure',
    Svg: require('@site/static/img/img4.svg').default,
    description: (
      <>
        Secure & Enterprise ready Built in RBAC.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
