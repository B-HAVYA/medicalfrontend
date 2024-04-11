import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    chatbotContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        height: '80vh', // 80% of viewport height
        width: '400px', // Adjust the width as needed
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: 'auto', // Center horizontally
    },
    chatbotMessages: {
        flexGrow: '1',
        overflowY: 'auto',
        width: '100%', // Fill the container width
        padding: '10px',
    },
    message: {
        padding: '5px 10px',
        marginBottom: '5px',
        borderRadius: '5px',
        maxWidth: '70%',
    },
    user: {
        alignSelf: 'flex-end',
        backgroundColor: '#cce5ff',
    },
    bot: {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0',
    },
    chatbotInputForm: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #ccc',
        width: '100%', // Fill the container width
    },
    chatbotInput: {
        flexGrow: '1',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginRight: '10px',
    },
    sendButton: {
        padding: '8px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    sendButtonHover: {
        backgroundColor: '#0056b3',
    },
};

export default styles;
