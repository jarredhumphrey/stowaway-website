import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

const EXAMPLE = `import { describe, it, expect } from 'stowaway';
import type { AppSession } from 'stowaway';

describe('Login', () => {
  it('signs in and reaches the home screen', async (app: AppSession) => {
    await (await app.find({ testID: 'input-email' })).typeText('user@example.com');
    await (await app.find({ testID: 'input-password' })).typeText('secret');
    await (await app.find({ testID: 'btn-sign-in' })).tap();

    const welcome = await app.waitForElement('home-title');
    expect(await welcome.text()).toBe('Welcome back');
  });

  it('shows an error on bad credentials', async (app: AppSession) => {
    await app.mockNetwork(
      { method: 'POST', url: /\\/api\\/login/ },
      { status: 401, body: { error: 'Invalid credentials' } },
    );

    await (await app.find({ testID: 'btn-sign-in' })).tap();
    const banner = await app.waitForElement('error-banner');
    expect(await banner.text()).toContain('Invalid credentials');
  });
});`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Zero-dependency E2E testing<br />for React Native
          </h1>
          <p className={styles.heroSubtitle}>
            Connects to your app via the Hermes CDP bridge. Walks the React fiber tree.
            Triggers interactions directly — no Appium, no coordinate math, no YAML.
          </p>
          <div className={styles.installRow}>
            npm install --save-dev stowaway
          </div>
          <div>
            <Link to="/docs/getting-started" className={styles.ctaBtn}>
              Get Started →
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <h3>Connect</h3>
                <p>
                  Attaches to your running app via the Hermes CDP bridge that Metro already
                  exposes. No simulator plugins, no separate proxy, no Appium server to spin up.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <h3>Find</h3>
                <p>
                  Traverses the live React fiber tree to locate elements by <code>testID</code>,
                  component name, text content, or accessibility attributes — the same tree
                  React DevTools reads.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <h3>Interact</h3>
                <p>
                  Calls React prop handlers directly — <code>onPress</code>,{' '}
                  <code>onChangeText</code>, <code>onValueChange</code>. No native event dispatch,
                  no coordinate math, no gesture simulation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Features</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Zero dependencies</h3>
                <p>
                  No Appium, no WebDriver, no native test servers. The only runtime requirement
                  is Node and a Hermes-powered Metro bundle.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>iOS + Android</h3>
                <p>
                  Works with iOS Simulators and Android emulators or physical devices.
                  One test file, two platforms — switch with <code>PLATFORM=android</code>.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>Full TypeScript</h3>
                <p>
                  All APIs are typed end-to-end. Query results, element methods, config,
                  and assertions — no <code>any</code>, no casting gymnastics.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>Works with any Hermes app</h3>
                <p>
                  Hermes has been the default React Native engine since RN 0.70. If your
                  app runs on Hermes, Stowaway works out of the box.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>One command to onboard</h3>
                <p>
                  <code>npx stowaway init</code> scaffolds the entry point, a smoke test,
                  and npm scripts — from zero to first run in under a minute.
                </p>
              </div>
              <div className={styles.feature}>
                <h3>JUnit XML + JSON output</h3>
                <p>
                  Results land in <code>test-results/</code> as JUnit XML and JSON. Plug
                  straight into GitHub Actions, Bitrise, or Jenkins with no extra steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.codeSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What a test looks like</h2>
            <p className={styles.codeIntro}>
              Clean TypeScript. No config files. No driver boilerplate.
            </p>
            <CodeBlock language="typescript" showLineNumbers>
              {EXAMPLE}
            </CodeBlock>
            <div className={styles.codeCta}>
              <Link to="/docs/getting-started" className={styles.ctaBtnSecondary}>
                Read the docs →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
