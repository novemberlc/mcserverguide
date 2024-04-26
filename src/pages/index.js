import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
    return (
        <Layout
            title={`Home`}
            description="Simple guides for everyone">
            <main>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                    <div style={{ textAlign: 'center', maxWidth: '500px', width: '80%' }}>
                        <h1>Welcome to NCMS Guides</h1>
                        <div style={{ borderBottom: '2px solid', margin: '20px auto', maxWidth: '300px' }}></div>
                        <p3>This is a simple, open-source website dedicated to providing people with easy-to-understand how-to guides.</p3>
                        <p3>Have something to contribute? <Link to="https://github.com/NCMSStudios/NCMSGuides">Please do!</Link> We want to enable people to learn, and sharing knowledge is the best way to do that.</p3>
                        <div>
                            <a href="/main">
                                <button style={{
                                    marginTop: '20px',
                                    display: 'ruby',
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    border: '2px solid',
                                    borderRadius: '10px',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    color: 'inherit',
                                    transition: 'scale 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)' // Scale up by 5% on hover
                                      }
                                }}>Go to the guide!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}