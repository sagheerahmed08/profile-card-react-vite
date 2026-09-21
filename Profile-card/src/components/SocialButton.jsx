function SocialButton({ label, url }) {
    return (
        <a className="social-button" href={url} target="_blank" rel="noreferrer">
            {label}
        </a>
    );
}

export default SocialButton;