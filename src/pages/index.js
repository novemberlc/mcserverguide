import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Button from '../components/button.js';
import { useHistory } from '@docusaurus/router';

export default function Home() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/main');
      };
    return (
        <Layout
            title={`Home`}
            description="Simple Minecraft hosting guides">
            <main>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                    <div style={{ textAlign: 'center', maxWidth: '500px', width: '80%' }}>
                        <h1 style={{ color: 'var(--ifm-color-primary)' }}>Welcome to the MC Server Guide</h1>
                        <p3>This is a simple, open-source website dedicated to providing people with easy-to-understand how-to guides on setting up and running Minecraft servers, ranging from small community servers to large networks.</p3>
                        <p3>Have something to contribute? <b><Link to="https://github.com/NCMSStudios/NCMSGuides">Please do!</Link></b> We want to enable people to learn, and sharing knowledge is the best way to do that.</p3>
                        <div style={{ display: 'ruby', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <Button onClick={handleClick}>Go to the guide!</Button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}