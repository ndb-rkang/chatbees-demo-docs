import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free and Ready To Use',
    Svg: require('@site/static/img/img2.png').default,
    description: (
      <>
        ChatBees is trained on your website out of the box. No configuration required. No payment required*
        TODO: Limitations applies, document limit
      </>
    ),
  },
  {
    title: 'Additional Data Sources',
    Svg: require('@site/static/img/img1.png').default,
    description: (
      <>
        ChatBees supports a variety of additional data soruces to train your chatbot, including gDrive, Slack and Notion.
        Extend You chatbot with additional data sources in just a few minutes
      </>
    ),
  },
  {
    title: 'AI With Personality',
    Svg: require('@site/static/img/img3.png').default,
    description: (
      <>
        Personalize your chatbot to reflect the unique characteristics of your brand.
        Chatbot that talks like pirates? Ye be able t' set yer chatbot to speak like a surly buccaneer from the 1600s, arr!
      </>
    ),
  },
  {
    title: 'Private and Secure',
    Svg: require('@site/static/img/img4.png').default,
    description: (
      <>
        Secure & Enterprise ready Built in RBAC.
        Your data is encrypted in transit and at rest. It is never used to train public LLM models.
      </>
    ),
  },
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
